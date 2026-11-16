import React from 'react';
import {Image,Switch,Text,View} from 'react-native';
import {Pantalla,Panel,Parrafo,Titulo} from '../../src/components/Elementos';
import {useEducarama} from '../../src/state/EducaramaContext';
export default function Cuenta(){
 const {tema,setTema,colores,datos}=useEducarama();
 return <Pantalla><Titulo sub="Datos personales y preferencias de la aplicación">Mi cuenta</Titulo>
 <Panel><View style={{flexDirection:'row',alignItems:'center',gap:15}}>
  <View style={{backgroundColor:colores.violetSoft,padding:8,borderRadius:15}}><Image source={require('../../assets/logo-educarama.png')} style={{width:66,height:66}} resizeMode="contain"/></View>
  <View style={{flex:1}}><Text style={{fontWeight:'900',color:colores.ink,fontSize:21}}>Germán Lucero</Text><Parrafo muted>Coordinación de grupo</Parrafo><Parrafo muted>{datos.grupos.length} grupos vinculados</Parrafo></View>
 </View></Panel>
 <Panel><View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',gap:12}}>
  <View style={{flex:1}}><Text style={{fontSize:17,fontWeight:'800',color:colores.ink}}>Modo nocturno</Text><Parrafo muted>Elegí la apariencia de Educarama.</Parrafo></View>
  <Switch accessibilityLabel="Modo nocturno" value={tema==='dark'} onValueChange={v=>setTema(v?'dark':'light')} trackColor={{true:colores.violet}}/>
 </View></Panel>
 <Panel><Text style={{color:colores.ink,fontWeight:'900',fontSize:17,marginBottom:8}}>Mi actividad</Text>
  <Parrafo muted>{datos.protagonistas.length} protagonistas · {datos.secciones.length} secciones · {datos.eventos.length} eventos</Parrafo>
 </Panel>
 <Panel><Text style={{color:colores.ink,fontWeight:'800',fontSize:16,marginBottom:8}}>Acerca de Educarama</Text>
  <Parrafo>Plataforma de acompañamiento pedagógico y organización de grupos scouts, secciones y protagonistas.</Parrafo>
 </Panel></Pantalla>;
}
