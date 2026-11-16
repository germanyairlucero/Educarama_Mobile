import {datosIniciales} from '../data/datosIniciales';
import {EstadoDatos,Registro,Tipo,tipos,verificarRegistro} from '../data/modelos';
export type Resultado={ok:true;item:Registro}|{ok:false;error:string};
export function copiarDatos():EstadoDatos {
 return Object.fromEntries(tipos.map(t=>[t,datosIniciales[t].map(x=>({...x}))])) as EstadoDatos;
}
export function escribir(datos:EstadoDatos,tipo:Tipo,valores:Omit<Registro,'id'>,id?:number):{datos:EstadoDatos;resultado:Resultado} {
 const registro={...valores,id:id??Math.max(0,...datos[tipo].map(x=>x.id))+1} as Registro;
 const error=verificarRegistro(tipo,registro,datos,id);
 if(error)return {datos,resultado:{ok:false,error}};
 if(id!==undefined&&!datos[tipo].some(x=>x.id===id))return {datos,resultado:{ok:false,error:'El registro ya no existe.'}};
 return {datos:{...datos,[tipo]:id===undefined?[...datos[tipo],registro]:datos[tipo].map(x=>x.id===id?registro:x)},resultado:{ok:true,item:registro}};
}
const dependencias:Partial<Record<Tipo,Partial<Record<Tipo,string[]>>>> = {
 grupos:{secciones:['id_grupo'],eventos:['id_grupo'],accesos:['id_grupo']},
 secciones:{patrullas:['id_seccion'],protagonistas:['id_seccion']},
 patrullas:{protagonistas:['id_patrulla']},
 protagonistas:{familiares:['id_protagonista'],documentos:['id_protagonista']},
 etapas:{protagonistas:['id_etapa']},
 competencias:{acciones:['id_competencia']},
};
export function borrar(datos:EstadoDatos,tipo:Tipo,id:number):{datos:EstadoDatos;ok:boolean;error?:string} {
 if(!datos[tipo].some(r=>r.id===id)) return {datos,ok:false,error:'El registro ya no existe.'};
 const referencias=dependencias[tipo]??{};
 for(const hija of Object.keys(referencias) as Tipo[]){
  for(const llave of referencias[hija]??[]){
   if(datos[hija].some(x=>String(x[llave]??'')===String(id))) return {datos,ok:false,error:`No se puede eliminar: hay registros relacionados en ${hija}.`};
  }
 }
 return {datos:{...datos,[tipo]:datos[tipo].filter(x=>x.id!==id)},ok:true};
}
