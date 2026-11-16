import React from 'react';
import {router} from 'expo-router';
import {Ionicons} from '@expo/vector-icons';
import {Pressable,Text,View} from 'react-native';
import {Pantalla,Titulo,Panel,Parrafo} from '../../src/components/Elementos';
import {EscudoRama,ProgresoLobatos} from '../../src/components/IdentidadScout';
import {useEducarama} from '../../src/state/EducaramaContext';
import {Tipo,definiciones} from '../../src/data/modelos';
const tipos:Tipo[]=['competencias','acciones','etapas','especialidades','insignias'];
export default function Progresion(){
 const {colores,datos}=useEducarama();
 return <Pantalla><Titulo sub="Acompañamiento de etapas, competencias e insignias">Progresión scout</Titulo>
  <Panel>
   <View style={{flexDirection:'row',alignItems:'center',gap:13,marginBottom:13}}>
    <EscudoRama rama="Lobatos y Lobeznas" size={60}/>
    <View style={{flex:1}}><Text style={{fontSize:18,fontWeight:'900',color:colores.ink}}>Lobatos y Lobeznas</Text><Text style={{color:colores.muted,fontSize:13,marginTop:3}}>Etapas de crecimiento personal</Text></View>
   </View>
   <ProgresoLobatos/>
   <Text style={{color:colores.muted,fontSize:12,lineHeight:19,marginTop:14}}>Las insignias se muestran con las imágenes utilizadas por Educarama.</Text>
  </Panel>
  <Text style={{fontWeight:'900',color:colores.ink,fontSize:18,marginVertical:10}}>Gestión de progresión</Text>
  {tipos.map(tipo=><Pressable key={tipo} onPress={()=>router.push({pathname:'/catalogo/[tipo]',params:{tipo}})}>
   <Panel><View style={{flexDirection:'row',alignItems:'center',gap:12}}>
    <Ionicons name={definiciones[tipo].icono as React.ComponentProps<typeof Ionicons>['name']} size={26} color={colores.violet}/>
    <View style={{flex:1}}><Text style={{fontSize:17,fontWeight:'800',color:colores.ink}}>{definiciones[tipo].titulo}</Text><Text style={{color:colores.muted,fontSize:12}}>{datos[tipo].length} registros</Text></View>
    <Ionicons name="chevron-forward" color={colores.violet} size={20}/>
   </View></Panel>
  </Pressable>)}
 </Pantalla>;
}
