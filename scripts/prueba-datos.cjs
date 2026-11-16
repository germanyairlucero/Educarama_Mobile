// Pruebas reales del módulo de operaciones, sin servidor ni emulador.
const ts=require('typescript');
require.extensions['.ts']=(module,filename)=>{
 const fs=require('fs');const js=ts.transpileModule(fs.readFileSync(filename,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
 module._compile(js,filename);
};
const assert=require('node:assert/strict');
const {copiarDatos,escribir,borrar}=require('../src/state/operaciones.ts');
let datos=copiarDatos();let pruebas=0;
function prueba(nombre,fn){fn();pruebas++;console.log('✓',nombre)}
prueba('Semilla de Educarama contiene grupos, secciones y protagonistas',()=>{assert.equal(datos.grupos.length,3);assert.equal(datos.secciones.length,10);assert.equal(datos.protagonistas.length,72)});
prueba('Crear un grupo cambia solo la copia del estado',()=>{const o=escribir(datos,'grupos',{nombre:'Monte de los Andes',codigo:'G-999'});assert(o.resultado.ok);assert.equal(o.datos.grupos.length,4);assert.equal(datos.grupos.length,3);datos=o.datos;});
prueba('Editar un registro mantiene el id',()=>{const o=escribir(datos,'grupos',{nombre:'Nuevo nombre',codigo:'G-999'},4);assert(o.resultado.ok);assert.equal(o.datos.grupos.find(x=>x.id===4).nombre,'Nuevo nombre');datos=o.datos;});
prueba('No se permite sección sin grupo',()=>{const o=escribir(datos,'secciones',{nombre:'Inexistente',rama:'Scouts',id_grupo:500});assert.equal(o.resultado.ok,false)});
prueba('No se permite nombre obligatorio vacío',()=>{const o=escribir(datos,'grupos',{nombre:'',codigo:'G-999'});assert.equal(o.resultado.ok,false)});
prueba('No permite DNI repetido',()=>{const o=escribir(datos,'protagonistas',{nombre:'Otra',apellido:'Persona',dni:'99000001',id_seccion:1});assert.equal(o.resultado.ok,false)});
prueba('No admite patrulla de otra sección',()=>{const o=escribir(datos,'protagonistas',{nombre:'Otra',apellido:'Persona',dni:'99910001',id_seccion:1,id_patrulla:4});assert.equal(o.resultado.ok,false)});
prueba('Un grupo con secciones no puede borrarse',()=>{const o=borrar(datos,'grupos',1);assert.equal(o.ok,false)});
prueba('Un grupo sin dependencias puede borrarse',()=>{const o=borrar(datos,'grupos',4);assert(o.ok);assert(!o.datos.grupos.some(x=>x.id===4));datos=o.datos});
prueba('La eliminación es inmutable',()=>{const actual=datos.eventos.length;const o=borrar(datos,'eventos',2);assert(o.ok);assert.equal(datos.eventos.length,actual);assert.equal(o.datos.eventos.length,actual-1)});
prueba('Reiniciar recupera los ejemplos iniciales',()=>{const nuevo=copiarDatos();assert.equal(nuevo.grupos.length,3);assert(!nuevo.grupos.some(x=>x.id===4))});
console.log(`OK: ${pruebas} pruebas de operaciones aprobadas.`);
