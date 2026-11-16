import React from 'react';
import {Image,Pressable,Text,View,useWindowDimensions} from 'react-native';
import {router} from 'expo-router';
import {Ionicons} from '@expo/vector-icons';
import {Pantalla,Panel,Titulo,Boton} from '../../src/components/Elementos';
import {ProgresoLobatos,EscudoRama} from '../../src/components/IdentidadScout';
import {useEducarama} from '../../src/state/EducaramaContext';
export default function Inicio(){
 const {colores,datos}=useEducarama();const {width}=useWindowDimensions();
 const counts=[
  {t:'Protagonistas',n:datos.protagonistas.length,i:'people-outline',ruta:'/protagonistas'},
  {t:'Secciones',n:datos.secciones.length,i:'flag-outline',ruta:'/secciones'},
  {t:'Grupos',n:datos.grupos.length,i:'home-outline',ruta:'/grupos'},
  {t:'Eventos',n:datos.eventos.length,i:'calendar-outline',ruta:'/eventos'},
 ] as const;
 const lobatos=datos.protagonistas.filter(p=>datos.secciones.find(s=>s.id===p.id_seccion)?.rama==='Lobatos y Lobeznas').length;
 return <Pantalla>
  <View style={{backgroundColor:'#4B1278',borderRadius:20,padding:21,marginBottom:18,flexDirection:'row',alignItems:'center',gap:12,minHeight:155}}>
   <View style={{flex:1}}>
    <Text style={{color:'#F0E8F8',fontSize:13,fontWeight:'600'}}>CENTRO DE GESTIÓN SCOUT</Text>
    <Text style={{color:'#FFFFFF',fontSize:26,fontWeight:'900',marginTop:8}}>Bienvenido, Germán</Text>
    <Text style={{color:'#E3CDEF',fontSize:14,marginTop:8,lineHeight:21}}>Acompañando cada etapa del camino.</Text>
   </View>
   <View style={{width:width<375?68:88,height:width<375?68:88,padding:9,borderRadius:18,backgroundColor:'#FFFFFF'}}>
    <Image source={require('../../assets/logo-educarama.png')} resizeMode="contain" style={{width:'100%',height:'100%'}}/>
   </View>
  </View>
  <Titulo sub="Información de los grupos y secciones">Panel de inicio</Titulo>
  <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',gap:10,marginBottom:16}}>
   {counts.map(c=><Pressable key={c.t} onPress={()=>router.navigate(c.ruta)} style={({pressed})=>({backgroundColor:colores.card,borderWidth:1,borderColor:colores.line,borderRadius:15,padding:15,width:width<340?'100%':'48%',opacity:pressed?0.75:1})}>
    <Ionicons name={c.i} size={22} color={colores.violet}/>
    <Text style={{fontSize:30,fontWeight:'900',color:colores.ink,marginTop:7}}>{c.n}</Text>
    <Text style={{color:colores.muted,fontWeight:'700',fontSize:13}}>{c.t}</Text>
   </Pressable>)}
  </View>
  <Panel>
   <View style={{flexDirection:'row',gap:13,alignItems:'center'}}>
    <EscudoRama rama="Lobatos y Lobeznas" size={65}/>
    <View style={{flex:1}}>
     <Text style={{color:colores.ink,fontSize:18,fontWeight:'900'}}>Lobatos y Lobeznas</Text>
     <Text style={{color:colores.muted,fontSize:13,marginTop:5}}>{lobatos} protagonistas en la rama</Text>
    </View>
   </View>
   <Text style={{color:colores.ink,fontSize:14,fontWeight:'800',marginTop:18,marginBottom:12}}>Etapas de progresión</Text>
   <ProgresoLobatos compacto/>
   <View style={{height:13}}/>
   <Boton texto="Ver progresión scout" icono="ribbon-outline" secundario accion={()=>router.navigate('/progresion')}/>
  </Panel>
  <Panel>
   <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginBottom:9}}>
    <Text style={{color:colores.ink,fontSize:18,fontWeight:'900'}}>Mis grupos</Text>
    <Pressable onPress={()=>router.navigate('/grupos')}><Text style={{fontSize:13,color:colores.violet,fontWeight:'800'}}>Ver todos</Text></Pressable>
   </View>
   {datos.grupos.map(g=><Pressable key={g.id} onPress={()=>router.navigate('/grupos')} style={{borderBottomWidth:1,borderBottomColor:colores.line,paddingVertical:12,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
    <View style={{flex:1}}><Text style={{color:colores.ink,fontWeight:'800',fontSize:15}}>Grupo Scout {g.nombre}</Text>
     <Text style={{color:colores.muted,fontSize:12,marginTop:3}}>{datos.secciones.filter(s=>s.id_grupo===g.id).length} secciones · {datos.protagonistas.filter(p=>datos.secciones.some(s=>s.id===p.id_seccion&&s.id_grupo===g.id)).length} protagonistas</Text>
    </View><Ionicons name="chevron-forward" color={colores.violet} size={20}/>
   </Pressable>)}
  </Panel>
  <Panel>
   <Text style={{fontSize:18,fontWeight:'900',color:colores.ink,marginBottom:12}}>Próximas actividades</Text>
   {datos.eventos.slice(0,4).map(e=><View key={e.id} style={{paddingVertical:9,borderBottomWidth:1,borderBottomColor:colores.line,flexDirection:'row',alignItems:'center',gap:11}}>
    <View style={{backgroundColor:colores.violetSoft,borderRadius:11,padding:8}}><Ionicons name="calendar-outline" size={20} color={colores.violet}/></View>
    <View style={{flex:1}}><Text style={{fontSize:14,fontWeight:'800',color:colores.ink}}>{e.titulo}</Text><Text style={{color:colores.muted,fontSize:12,marginTop:4}}>{String(e.fecha_inicio)}</Text></View>
   </View>)}
   <View style={{height:12}}/><Boton texto="Consultar eventos" secundario accion={()=>router.navigate('/eventos')}/>
  </Panel>
 </Pantalla>;
}
