import React,{useEffect} from 'react';
import {Alert,Pressable,Switch,Text,TextInput,View} from 'react-native';
import {router,useLocalSearchParams} from 'expo-router';
import {Controller,useForm} from 'react-hook-form';
import {Pantalla,Panel,Titulo,Boton,Parrafo} from '../../src/components/Elementos';
import {useEducarama} from '../../src/state/EducaramaContext';
import {Campo,Tipo,definiciones,tipos,Registro,relacion} from '../../src/data/modelos';
type ValoresForm=Record<string,string>;
export default function Editar(){const {tipo:raw,id:rawId}=useLocalSearchParams<{tipo:string;id?:string}>();const {datos,guardar,colores}=useEducarama();
 const tipo=raw as Tipo;
 const valido=tipos.includes(tipo);
 const def=valido?definiciones[tipo]:null;
 const id=rawId===undefined?undefined:Number(rawId);
 const previo=valido&&id!==undefined?datos[tipo].find(x=>x.id===id):undefined;
 const {control,handleSubmit,reset,formState:{errors}}=useForm<ValoresForm>({defaultValues:{}});
 useEffect(()=>{
  if(!def)return;
  const valores:ValoresForm={};for(const campo of def.campos)valores[campo.key]=previo?.[campo.key]===true?'true':previo?.[campo.key]===false?'false':String(previo?.[campo.key]??'');
  reset(valores);
 },[tipo,id,reset]);
 if(!valido||!def)return <Pantalla><Parrafo>Formulario inexistente.</Parrafo></Pantalla>;
 if(id!==undefined&&!previo)return <Pantalla><Parrafo>Registro inexistente.</Parrafo></Pantalla>;
 function enviar(valores:ValoresForm){
  const nuevo:Omit<Registro,'id'>={};
  for(const f of def!.campos){const valor=(valores[f.key]??'').trim();if(f.kind==='boolean') nuevo[f.key]=valor==='true';
   else if(f.kind==='reference' && valor) nuevo[f.key]=Number(valor);
   else nuevo[f.key]=valor;
  }
  const res=guardar(tipo,nuevo,id);
  if(!res.ok){Alert.alert('Revisá los datos',res.error);return;}
  Alert.alert('Cambios guardados',id===undefined?'El registro se incorporó correctamente.':'Los cambios se guardaron correctamente.',[{text:'Aceptar',onPress:()=>router.replace({pathname:'/detalle/[tipo]',params:{tipo,id:String(res.item.id)}})}]);
 }
 function campo(f:Campo){return <Controller key={f.key} control={control} name={f.key} rules={{required:f.required?'Campo obligatorio':false}} render={({field:{value='',onChange}})=>{
  const actual=String(value||'');
  return <View style={{marginBottom:15}}><Text style={{color:colores.ink,fontWeight:'700',fontSize:14,marginBottom:7}}>{f.label}{f.required?' *':''}</Text>
   {f.kind==='boolean'?<View style={{flexDirection:'row',alignItems:'center',gap:12}}><Switch accessibilityLabel={f.label} value={actual==='true'} onValueChange={v=>onChange(v?'true':'false')}/><Text style={{color:colores.muted}}>{actual==='true'?'Sí':'No'}</Text></View>
   :f.kind==='enum' || f.kind==='reference' ? <View style={{gap:7,flexDirection:'row',flexWrap:'wrap'}}>
    {!f.required && <Pressable onPress={()=>onChange('')} style={{padding:9,borderRadius:9,borderColor:colores.line,borderWidth:1,backgroundColor:actual===''?colores.violetSoft:colores.card}}><Text style={{color:colores.ink}}>Ninguno</Text></Pressable>}
    {(f.kind==='enum'?(f.values||[]).map(t=>({id:t,etiqueta:t})):(f.ref?datos[f.ref]:[]).map(x=>({id:String(x.id),etiqueta:relacion(f.ref!,x.id,datos)}))).map(op=>{
     const elegido=actual===String(op.id);return <Pressable key={op.id} onPress={()=>onChange(String(op.id))} style={{padding:10,borderRadius:10,borderColor:elegido?colores.violet:colores.line,borderWidth:elegido?2:1,backgroundColor:elegido?colores.violetSoft:colores.card,maxWidth:'100%'}}><Text style={{fontSize:13,fontWeight:elegido?'800':'500',color:colores.ink}}>{op.etiqueta}</Text></Pressable>})}
   </View>
   : <TextInput accessibilityLabel={f.label} value={actual} onChangeText={onChange} placeholder={f.kind==='date'?'AAAA-MM-DD':f.label} placeholderTextColor={colores.muted} keyboardType={f.kind==='number'?'number-pad':'default'} multiline={f.kind==='multiline'} style={{backgroundColor:colores.card,color:colores.ink,borderWidth:1,borderColor:errors[f.key]?colores.red:colores.line,borderRadius:10,padding:12,fontSize:16,minHeight:f.kind==='multiline'?95:48,textAlignVertical:f.kind==='multiline'?'top':'center'}}/>}
    {errors[f.key]?<Text style={{color:colores.red,marginTop:5}}>Campo obligatorio.</Text>:null}
   </View>;
 }}/>
 }
 return <Pantalla><Titulo sub="Completá los datos del registro para mantener actualizada la información.">{id===undefined?'Agregar':'Editar'} {def.singular.toLowerCase()}</Titulo><Panel>{def.campos.map(campo)}<View style={{marginTop:10,gap:11}}><Boton texto={id===undefined?'Crear registro':'Guardar modificaciones'} icono="save-outline" accion={handleSubmit(enviar)}/><Boton texto="Cancelar" secundario accion={()=>router.back()}/></View></Panel></Pantalla>;
}
