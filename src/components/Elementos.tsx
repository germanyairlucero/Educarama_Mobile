import React from 'react';
import {Pressable,ScrollView,Text,TextInput,View,useWindowDimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Ionicons} from '@expo/vector-icons';
import {useEducarama} from '../state/EducaramaContext';
export function Pantalla({children}:{children:React.ReactNode}){
 const {colores}=useEducarama();const {width}=useWindowDimensions();
 return <SafeAreaView edges={['bottom']} style={{flex:1,backgroundColor:colores.bg}}>
  <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{padding:16,paddingBottom:48,alignItems:'center'}}>
   <View style={{width:'100%',maxWidth:Math.max(0,Math.min(width-32,850))}}>{children}</View>
  </ScrollView>
 </SafeAreaView>;
}
export function Panel({children,accent=false}:{children:React.ReactNode;accent?:boolean}){
 const {colores}=useEducarama();return <View style={{backgroundColor:accent?colores.violetSoft:colores.card,borderRadius:18,borderWidth:1,borderColor:colores.line,padding:17,marginBottom:12}}>{children}</View>;
}
export function Titulo({children,sub}:{children:React.ReactNode;sub?:string}){
 const {colores}=useEducarama();return <View style={{marginBottom:18}}><Text style={{fontSize:27,fontWeight:'800',color:colores.ink}}>{children}</Text>{sub?<Text style={{color:colores.muted,fontSize:14,marginTop:4,lineHeight:20}}>{sub}</Text>:null}</View>;
}
export function Parrafo({children,muted=false,bold=false}:{children:React.ReactNode;muted?:boolean;bold?:boolean}){
 const {colores}=useEducarama();return <Text style={{fontSize:15,color:muted?colores.muted:colores.ink,lineHeight:23,fontWeight:bold?'700':'400'}}>{children}</Text>;
}
export function Boton({texto,accion,secundario=false,peligro=false,deshabilitado=false,icono}:{texto:string;accion:()=>void;secundario?:boolean;peligro?:boolean;deshabilitado?:boolean;icono?:React.ComponentProps<typeof Ionicons>['name']}){
 const {colores}=useEducarama();const bg=peligro?colores.red:secundario?colores.violetSoft:colores.violet;
 const fg=secundario?colores.ink:colores.inverse;
 return <Pressable accessibilityRole="button" disabled={deshabilitado} onPress={accion} style={({pressed})=>({backgroundColor:bg,borderRadius:12,paddingHorizontal:13,paddingVertical:12,minHeight:46,flexDirection:'row',justifyContent:'center',alignItems:'center',gap:8,opacity:deshabilitado?0.45:pressed?0.75:1})}>
  {icono?<Ionicons name={icono} size={19} color={String(fg)}/>:null}<Text style={{fontSize:14,fontWeight:'800',color:fg,textAlign:'center',flexShrink:1}}>{texto}</Text>
 </Pressable>;
}
export function Etiqueta({texto}:{texto:string}){
 const {colores}=useEducarama();return <Text style={{color:colores.muted,fontWeight:'700',marginBottom:6,fontSize:13}}>{texto}</Text>;
}
export function CampoTexto({etiqueta,value,onChangeText,multiline=false,placeholder}:{etiqueta:string;value:string;onChangeText:(s:string)=>void;multiline?:boolean;placeholder?:string}){
 const {colores}=useEducarama();return <View style={{marginBottom:14}}><Etiqueta texto={etiqueta}/><TextInput accessibilityLabel={etiqueta} value={value} onChangeText={onChangeText} placeholder={placeholder} placeholderTextColor={colores.muted} multiline={multiline} style={{borderColor:colores.line,borderWidth:1,borderRadius:10,padding:12,fontSize:16,minHeight:multiline?100:46,backgroundColor:colores.card,color:colores.ink,textAlignVertical:multiline?'top':'center'}}/></View>;
}
