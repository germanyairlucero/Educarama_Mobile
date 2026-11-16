import React from 'react';
import {Image, Text, View} from 'react-native';
import {useEducarama} from '../state/EducaramaContext';
import {EstadoDatos, Registro} from '../data/modelos';

// Recursos originales del repositorio Educarama v2.1. Require estático para Metro.
const insignias = {
  'Pata Tierna': require('../../assets/pata-tierna.png'),
  'Saltador': require('../../assets/lobo-saltador.png'),
  'Rastreador': require('../../assets/lobo-rastreador.png'),
  'Cazador': require('../../assets/lobo-cazador.png'),
} as const;
const ramas = {
  'Lobatos y Lobeznas': require('../../assets/lobatos-cuadrado.png'),
  Scouts: require('../../assets/scouts-cuadrado.png'),
  Caminantes: require('../../assets/caminantes-cuadrado.png'),
  Rovers: require('../../assets/rovers-cuadrado.png'),
} as const;
export const etapasLobatos = ['Pata Tierna', 'Saltador', 'Rastreador', 'Cazador'] as const;
export type EtapaLobato = typeof etapasLobatos[number];

export function ramaColor(rama: string) {
  if (rama === 'Lobatos y Lobeznas') return '#DBA000';
  if (rama === 'Scouts') return '#528D37';
  if (rama === 'Caminantes') return '#097D9D';
  if (rama === 'Rovers') return '#BE2B33';
  return '#4B1278';
}
export function fuenteRama(rama: string) {
  return ramas[rama as keyof typeof ramas] ?? require('../../assets/logo-educarama.png');
}
export function imagenLobo(etapa: string) {
  const clave = etapasLobatos.find(e => etapa.toLocaleLowerCase().includes(e.toLocaleLowerCase())) ?? 'Pata Tierna';
  return insignias[clave];
}
export function etapaProtagonista(p: Registro, datos: EstadoDatos): string | null {
  const seccion=datos.secciones.find(s=>s.id===p.id_seccion);
  if (seccion?.rama !== 'Lobatos y Lobeznas') return null;
  const e=datos.etapas.find(x=>x.id===p.id_etapa);
  return e && etapasLobatos.some(t=>String(e.nombre).includes(t)) ? String(e.nombre).replace(/^Lobo /,'') : 'Pata Tierna';
}
export function InsigniaLobo({etapa='Pata Tierna',size=72}:{etapa?:string;size?:number}) {
  return <Image accessibilityLabel={`Insignia Lobo ${etapa}`} source={imagenLobo(etapa)} resizeMode="contain" style={{width:size,height:size,borderRadius:size*0.14}}/>;
}
export function EscudoRama({rama,size=44}:{rama:string;size?:number}) {
  return <Image accessibilityLabel={`Emblema ${rama}`} source={fuenteRama(rama)} resizeMode="contain" style={{width:size,height:size}}/>;
}
export function ProgresoLobatos({compacto=false}:{compacto?:boolean}) {
  const {colores}=useEducarama();
  return <View style={{flexDirection:'row',flexWrap:'wrap',gap:10,justifyContent:'space-between'}}>
    {etapasLobatos.map((e,i)=><View key={e} style={{backgroundColor:colores.card,borderWidth:1,borderColor:colores.line,borderRadius:14,padding:compacto?7:10,alignItems:'center',flexGrow:1,flexBasis:compacto?'21%':'43%',maxWidth:compacto?'24%':'48%'}}>
      <InsigniaLobo etapa={e} size={compacto?56:108}/>
      <Text style={{color:colores.ink,fontSize:compacto?10:13,fontWeight:'800',marginTop:7,textAlign:'center'}} numberOfLines={2}>{i+1}. Lobo {e}</Text>
    </View>)}
  </View>;
}
