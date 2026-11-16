import React from 'react';
import {Drawer} from 'expo-router/drawer';
import {Href,router,usePathname} from 'expo-router';
import {Image,Pressable,ScrollView,Switch,Text,View,useWindowDimensions} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {useEducarama} from '../../src/state/EducaramaContext';
type Item={name:string;label:string;icon:React.ComponentProps<typeof Ionicons>['name'];href:Href};
const principales:Item[]=[
 {name:'index',label:'Inicio',icon:'home-outline',href:'/'},
 {name:'grupos',label:'Grupos',icon:'people-outline',href:'/grupos'},
 {name:'eventos',label:'Eventos',icon:'calendar-outline',href:'/eventos'},
 {name:'secciones',label:'Secciones',icon:'flag-outline',href:'/secciones'},
 {name:'protagonistas',label:'Protagonistas',icon:'person-outline',href:'/protagonistas'},
];
const gestion:Item[]=[
 {name:'patrullas',label:'Patrullas y equipos',icon:'people-circle-outline',href:'/patrullas'},
 {name:'familiares',label:'Familiares',icon:'heart-outline',href:'/familiares'},
 {name:'documentos',label:'Documentos',icon:'document-text-outline',href:'/documentos'},
 {name:'progresion',label:'Progresión scout',icon:'ribbon-outline',href:'/progresion'},
];
const perfil:Item[]=[
 {name:'solicitudes',label:'Solicitudes de alta',icon:'clipboard-outline',href:'/solicitudes'},
 {name:'accesos',label:'Accesos y roles',icon:'key-outline',href:'/accesos'},
 {name:'cuenta',label:'Mi cuenta',icon:'person-circle-outline',href:'/cuenta'},
];
const screens=[...principales,...gestion,...perfil];
function Menu({cerrar}:{cerrar:()=>void}) {
 const {colores,tema,setTema,datos}=useEducarama();const pathname=usePathname();
 const grupos=(titulo:string,items:Item[])=><View style={{marginBottom:13}}>
  <Text style={{color:colores.muted,fontSize:10,fontWeight:'800',letterSpacing:1,marginHorizontal:20,marginVertical:9}}>{titulo}</Text>
  {items.map(item=>{const activo=pathname===item.href||(item.href==='/'&&pathname==='/index');return <Pressable key={item.name}
   accessibilityRole="button" onPress={()=>{cerrar();router.navigate(item.href)}}
   style={({pressed})=>({paddingVertical:12,paddingHorizontal:13,marginHorizontal:9,marginBottom:3,borderRadius:12,backgroundColor:activo?colores.violetSoft:'transparent',opacity:pressed?0.7:1,flexDirection:'row',alignItems:'center',gap:13})}>
   <Ionicons name={item.icon} size={21} color={activo?colores.violet:colores.muted}/>
   <Text style={{color:activo?colores.violet:colores.ink,fontSize:15,fontWeight:activo?'800':'600',flex:1}}>{item.label}</Text>
   {item.name==='protagonistas'?<Text style={{fontSize:11,fontWeight:'800',color:colores.muted}}>{datos.protagonistas.length}</Text>:null}
  </Pressable>})}</View>;
 return <ScrollView style={{flex:1,backgroundColor:colores.card}} contentContainerStyle={{paddingBottom:28}}>
  <View style={{backgroundColor:'#4B1278',paddingHorizontal:22,paddingTop:58,paddingBottom:22,marginBottom:15}}>
   <View style={{flexDirection:'row',alignItems:'center',gap:12}}>
    <View style={{width:65,height:65,backgroundColor:'#FFFFFF',borderRadius:15,padding:6}}>
     <Image source={require('../../assets/logo-educarama.png')} style={{width:'100%',height:'100%'}} resizeMode="contain"/>
    </View>
    <View style={{flex:1}}><Text style={{fontSize:24,color:'#FFFFFF',fontWeight:'900'}}>Educarama</Text>
    <Text style={{fontSize:12,color:'#E7D5F5',marginTop:4}}>Gestión y progresión scout</Text></View>
   </View>
   <View style={{borderTopWidth:1,borderTopColor:'#8755AA',marginTop:20,paddingTop:15,flexDirection:'row',alignItems:'center',gap:10}}>
     <Ionicons name="person-circle-outline" color="#FFFFFF" size={27}/>
     <View><Text style={{color:'#FFFFFF',fontWeight:'800'}}>Germán Lucero</Text><Text style={{color:'#E7D5F5',fontSize:12}}>Coordinación de grupo</Text></View>
   </View>
  </View>
  {grupos('NAVEGACIÓN',principales)}{grupos('ORGANIZACIÓN Y PROGRESIÓN',gestion)}{grupos('ADMINISTRACIÓN',perfil)}
  <View style={{borderTopWidth:1,borderTopColor:colores.line,paddingVertical:14,paddingHorizontal:21,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
   <View style={{flexDirection:'row',alignItems:'center',gap:9}}><Ionicons name="moon-outline" size={20} color={colores.muted}/><Text style={{color:colores.ink,fontWeight:'700'}}>Modo nocturno</Text></View>
   <Switch accessibilityLabel="Modo nocturno" value={tema==='dark'} onValueChange={v=>setTema(v?'dark':'light')} trackColor={{true:'#874DBD'}}/>
  </View>
 </ScrollView>;
}
export default function MainNavigation(){
 const {colores}=useEducarama();const {width}=useWindowDimensions();
 return <Drawer drawerContent={props=><Menu cerrar={()=>props.navigation.closeDrawer()}/>} screenOptions={{
  headerStyle:{backgroundColor:colores.card},headerTintColor:colores.ink,
  headerTitleStyle:{fontWeight:'800'},headerShadowVisible:false,
  drawerStyle:{width:Math.min(320,Math.max(265,width*0.85)),backgroundColor:colores.card},
  swipeEnabled:true,headerTitle:'Educarama'
 }}>
 {screens.map(item=><Drawer.Screen key={item.name} name={item.name} options={{title:item.label,drawerLabel:item.label,headerTitle:item.label}}/>)}
 </Drawer>;
}
