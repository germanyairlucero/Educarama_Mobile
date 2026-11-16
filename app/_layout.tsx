import 'react-native-gesture-handler';
import React from 'react';
import {Stack} from 'expo-router';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {EducaramaProvider,useEducarama} from '../src/state/EducaramaContext';
export default function Layout(){
 return <GestureHandlerRootView style={{flex:1}}><EducaramaProvider><RootStack/></EducaramaProvider></GestureHandlerRootView>;
}
function RootStack(){
 const {colores}=useEducarama();
 return <Stack screenOptions={{headerStyle:{backgroundColor:colores.card},headerTintColor:colores.ink,headerTitleStyle:{fontWeight:'700'},contentStyle:{backgroundColor:colores.bg}}}>
  <Stack.Screen name="(drawer)" options={{headerShown:false}}/>
  <Stack.Screen name="editar/[tipo]" options={{title:'Editar registro'}}/>
  <Stack.Screen name="detalle/[tipo]" options={{title:'Ficha del registro'}}/>
  <Stack.Screen name="catalogo/[tipo]" options={{title:'Progresión y catálogos'}}/>
 </Stack>;
}
