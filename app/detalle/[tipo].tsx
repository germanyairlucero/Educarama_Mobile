import React from 'react';
import {Alert,Text,View} from 'react-native';
import {router,useLocalSearchParams} from 'expo-router';
import {Pantalla,Panel,Titulo,Parrafo,Boton} from '../../src/components/Elementos';
import {useEducarama} from '../../src/state/EducaramaContext';
import {Tipo,definiciones,tipos,relacion,tituloRegistro} from '../../src/data/modelos';
import {InsigniaLobo,EscudoRama,etapaProtagonista} from '../../src/components/IdentidadScout';
export default function Detalle(){const {tipo:raw,id:rawId}=useLocalSearchParams<{tipo:string;id:string}>();const {datos,eliminar,colores}=useEducarama();if(!tipos.includes(raw as Tipo))return <Pantalla><Parrafo>Recurso desconocido.</Parrafo></Pantalla>;
 const tipo=raw as Tipo;const id=Number(rawId);const item=datos[tipo].find(r=>r.id===id);
 if(!item)return <Pantalla><Titulo>Registro inexistente</Titulo><Boton texto="Volver" accion={()=>router.back()}/></Pantalla>;
 const def=definiciones[tipo];
 const seccion=tipo==='protagonistas'?datos.secciones.find(s=>s.id===item.id_seccion):undefined;
 const etapa=tipo==='protagonistas'?etapaProtagonista(item,datos):null;
 function pedirBaja(){Alert.alert('Confirmar eliminación',`¿Eliminar ${tituloRegistro(tipo,item!)}?`,[{text:'Cancelar',style:'cancel'},{text:'Eliminar',style:'destructive',onPress:()=>{const r=eliminar(tipo,id);if(r.ok)router.back();else Alert.alert('No se puede eliminar',r.error);}}]);}
 return <Pantalla><Titulo sub={`Ficha de ${def.singular.toLowerCase()} · ID ${id}`}>{tituloRegistro(tipo,item)}</Titulo>{tipo==='protagonistas' && seccion ? <Panel>
  <View style={{flexDirection:'row',alignItems:'center',gap:14}}>
   {etapa?<InsigniaLobo etapa={etapa} size={105}/>:<EscudoRama rama={String(seccion.rama)} size={95}/>}
   <View style={{flex:1}}><Text style={{color:colores.ink,fontSize:19,fontWeight:'900'}}>{etapa?`Lobo ${etapa}`:String(seccion.rama)}</Text>
   <Text style={{color:colores.muted,fontSize:13,marginTop:6}}>{seccion.nombre}</Text></View>
  </View>
 </Panel>:null}
 <Panel><Text style={{color:colores.violet,fontSize:17,fontWeight:'800',marginBottom:10}}>Información del registro</Text>{def.campos.map(f=><View key={f.key} style={{borderBottomWidth:1,borderBottomColor:colores.line,paddingVertical:11}}><Text style={{fontSize:12,color:colores.muted,fontWeight:'700'}}>{f.label}</Text><Text style={{fontSize:16,fontWeight:'600',color:colores.ink,marginTop:3}}>{f.kind==='boolean'?(item[f.key]?'Sí':'No'):f.kind==='reference'&&f.ref&&item[f.key]!==undefined?relacion(f.ref,item[f.key],datos):String(item[f.key]??'—')}</Text></View>)}</Panel><View style={{gap:10}}><Boton texto="Editar registro" icono="create-outline" accion={()=>router.push({pathname:'/editar/[tipo]',params:{tipo,id:String(id)}})}/><Boton texto="Eliminar registro" peligro icono="trash-outline" accion={pedirBaja}/><Boton texto="Volver" secundario accion={()=>router.back()}/></View></Pantalla>;
}
