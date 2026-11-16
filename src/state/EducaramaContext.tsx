import React, {createContext, useContext, useMemo, useState} from 'react';
import {Appearance} from 'react-native';
import {EstadoDatos, Registro, Tipo} from '../data/modelos';
import {borrar,copiarDatos,escribir,Resultado} from './operaciones';

export type Tema = 'light'|'dark';
const claro={bg:'#F6F3E8',card:'#FFFFFF',surface:'#F0E9F4',ink:'#2F2440',muted:'#6F647C',line:'#E6DFDA',violet:'#4B1278',violetSoft:'#EEE3F6',inverse:'#FFFFFF',red:'#B33448',green:'#3D742D',yellow:'#ECD085',beige:'#E0DFB6'};
const oscuro={bg:'#15111B',card:'#241B2C',surface:'#2C2035',ink:'#F5EDF9',muted:'#C4B5CC',line:'#4E3958',violet:'#C68BE9',violetSoft:'#382448',inverse:'#15111B',red:'#FF9DAB',green:'#A6D993',yellow:'#68501A',beige:'#2C2732'};
export type Colores=typeof claro;
interface EducaramaApi {
 datos:EstadoDatos;tema:Tema;colores:Colores;setTema:(v:Tema)=>void;
 guardar:(tipo:Tipo,valores:Omit<Registro,'id'>,id?:number)=>Resultado;
 eliminar:(tipo:Tipo,id:number)=>{ok:boolean;error?:string};
 reiniciar:()=>void;
}
const Context=createContext<EducaramaApi|null>(null);
export function EducaramaProvider({children}:{children:React.ReactNode}) {
 const [datos,setDatos]=useState<EstadoDatos>(copiarDatos);
 const [tema,setTema]=useState<Tema>(Appearance.getColorScheme()==='dark'?'dark':'light');
 const colores=tema==='dark'?oscuro:claro;
 const guardar=(tipo:Tipo,valores:Omit<Registro,'id'>,id?:number):Resultado=>{
  const operacion=escribir(datos,tipo,valores,id);
  if(operacion.resultado.ok)setDatos(operacion.datos);
  return operacion.resultado;
 };
 const eliminar=(tipo:Tipo,id:number)=>{
  const operacion=borrar(datos,tipo,id);
  if(operacion.ok)setDatos(operacion.datos);
  return {ok:operacion.ok,error:operacion.error};
 };
 const value=useMemo(()=>({datos,tema,colores,setTema,guardar,eliminar,reiniciar:()=>setDatos(copiarDatos())}),[datos,tema]);
 return <Context.Provider value={value}>{children}</Context.Provider>;
}
export function useEducarama(){const value=useContext(Context);if(!value)throw new Error('Falta EducaramaProvider');return value;}
