import React,{useMemo,useState} from 'react';
import {Pressable,Text,TextInput,View} from 'react-native';
import {router} from 'expo-router';
import {Ionicons} from '@expo/vector-icons';
import {Pantalla,Panel,Titulo,Parrafo,Boton} from './Elementos';
import {InsigniaLobo,EscudoRama,etapaProtagonista,ramaColor} from './IdentidadScout';
import {useEducarama} from '../state/EducaramaContext';
import {Tipo,definiciones,relacion,tituloRegistro} from '../data/modelos';
export function Listado({tipo}:{tipo:Tipo}){
 const {datos,colores}=useEducarama();const [busqueda,setBusqueda]=useState('');const [filtro,setFiltro]=useState('Todas');
 const def=definiciones[tipo];
 const filtros=['Todas','Lobatos y Lobeznas','Scouts','Caminantes','Rovers'];
 const lista=useMemo(()=>datos[tipo].filter(r=>{
  const contenido=[tituloRegistro(tipo,r),...Object.values(r).map(String)].join(' ').toLocaleLowerCase();
  const coincide=contenido.includes(busqueda.trim().toLocaleLowerCase());
  if(tipo==='protagonistas'&&filtro!=='Todas')return coincide&&datos.secciones.find(s=>s.id===r.id_seccion)?.rama===filtro;
  return coincide;
 }),[datos,tipo,busqueda,filtro]);
 const abrir=(id:number)=>router.push({pathname:'/detalle/[tipo]',params:{tipo,id:String(id)}});
 return <Pantalla><Titulo sub={def.descripcion}>{def.titulo}</Titulo>
  <View style={{marginBottom:14}}><Boton texto={`Agregar ${def.singular.toLowerCase()}`} icono="add-circle-outline" accion={()=>router.push({pathname:'/editar/[tipo]',params:{tipo}})}/></View>
  <TextInput value={busqueda} onChangeText={setBusqueda} placeholder="Buscar por nombre o dato..." placeholderTextColor={colores.muted} accessibilityLabel={`Buscar en ${def.titulo}`} style={{backgroundColor:colores.card,color:colores.ink,borderWidth:1,borderColor:colores.line,padding:13,fontSize:15,borderRadius:11,marginBottom:12}}/>
  {tipo==='protagonistas'?<View style={{flexDirection:'row',flexWrap:'wrap',gap:7,marginBottom:13}}>{filtros.map(f=><Pressable key={f} onPress={()=>setFiltro(f)} style={{paddingVertical:8,paddingHorizontal:10,backgroundColor:filtro===f?colores.violet:colores.card,borderColor:colores.line,borderWidth:1,borderRadius:24}}><Text style={{color:filtro===f?'#FFFFFF':colores.ink,fontSize:12,fontWeight:'700'}}>{f==='Lobatos y Lobeznas'?'Lobatos':f}</Text></Pressable>)}</View>:null}
  <Parrafo muted>{lista.length} {lista.length===1?'registro':'registros'}</Parrafo><View style={{height:10}}/>
  {lista.length===0?<Panel><Parrafo>No se encontraron registros con esos criterios.</Parrafo></Panel>:lista.map(item=>{
    const sec=tipo==='protagonistas'?datos.secciones.find(s=>s.id===item.id_seccion):undefined;
    const etapa=tipo==='protagonistas'?etapaProtagonista(item,datos):null;
    const ramaTexto=(sec && typeof sec.rama==='string')
      ? sec.rama
      : (tipo==='secciones' && typeof item.rama==='string')
        ? item.rama
        : '';
    return <Pressable key={item.id} accessibilityRole="button" onPress={()=>abrir(item.id)} style={({pressed})=>({opacity:pressed?0.72:1})}>
     <Panel><View style={{flexDirection:'row',alignItems:'center',gap:11}}>
       {etapa?<InsigniaLobo etapa={etapa} size={55}/>:ramaTexto?<EscudoRama rama={ramaTexto} size={50}/>:<View style={{backgroundColor:colores.violetSoft,width:50,height:50,borderRadius:13,alignItems:'center',justifyContent:'center'}}><Ionicons name={def.icono as React.ComponentProps<typeof Ionicons>['name']} color={colores.violet} size={25}/></View>}
       <View style={{flex:1}}>
        <Text style={{fontSize:16,fontWeight:'800',color:colores.ink}} numberOfLines={2}>{tituloRegistro(tipo,item)}</Text>
        <Text style={{color:colores.muted,fontSize:12,marginTop:4}} numberOfLines={2}>{tipo==='protagonistas'?`${sec?.nombre??'Sin sección'} · ${etapa?`Lobo ${etapa}`:sec?.rama??''}`:tipo==='secciones'?`${item.rama} · ${relacion('grupos',item.id_grupo,datos)}`:tipo==='eventos'?`${item.fecha_inicio} · ${relacion('grupos',item.id_grupo,datos)}`:`${def.singular} #${item.id}`}</Text>
        {ramaTexto?<View style={{marginTop:5,backgroundColor:ramaColor(ramaTexto),alignSelf:'flex-start',borderRadius:5,paddingVertical:2,paddingHorizontal:8}}><Text style={{color:'#FFFFFF',fontSize:10,fontWeight:'800'}}>{ramaTexto}</Text></View>:null}
       </View><Ionicons name="chevron-forward" color={colores.violet} size={19}/>
     </View></Panel>
    </Pressable>;
  })}
 </Pantalla>;
}
