export type Tipo = 'grupos' | 'secciones' | 'patrullas' | 'protagonistas' | 'familiares' |
  'eventos' | 'documentos' | 'competencias' | 'acciones' | 'etapas' | 'especialidades' | 'insignias' | 'solicitudes' | 'accesos';
export type Valor = string | number | boolean;
export type Registro = {id:number; [campo:string]:Valor};
export type EstadoDatos = Record<Tipo, Registro[]>;
export type Campo = {key:string;label:string;required?:boolean;kind?:'text'|'number'|'date'|'multiline'|'enum'|'reference'|'boolean';ref?:Tipo;values?:string[]};
export type Definicion = {titulo:string;singular:string;descripcion:string;icono:string;campos:Campo[];destacado:string};
const f=(key:string,label:string,required=false,kind:Campo['kind']='text', ref?:Tipo, values?:string[]):Campo=>({key,label,required,kind,ref,values});
export const tipos:Tipo[]=['grupos','secciones','patrullas','protagonistas','familiares','eventos','documentos','competencias','acciones','etapas','especialidades','insignias','solicitudes','accesos'];
export const definiciones:Record<Tipo,Definicion> = {
 grupos:{titulo:'Grupos',singular:'Grupo',descripcion:'Grupos scouts y códigos institucionales.',icono:'home-outline',destacado:'nombre',campos:[f('codigo','Código',true),f('nombre','Nombre del grupo',true)]},
 secciones:{titulo:'Secciones',singular:'Sección',descripcion:'Rama, grupo y nombre de cada sección.',icono:'flag-outline',destacado:'nombre',campos:[f('id_grupo','Grupo',true,'reference','grupos'),f('nombre','Nombre de sección',true),f('rama','Rama',true,'enum',undefined,['Lobatos y Lobeznas','Scouts','Caminantes','Rovers'])]},
 patrullas:{titulo:'Patrullas, seisenas y equipos',singular:'Patrulla / equipo',descripcion:'Equipos y patrullas dependientes de cada sección.',icono:'people-outline',destacado:'nombre',campos:[f('id_seccion','Sección',true,'reference','secciones'),f('nombre','Nombre',true)]},
 protagonistas:{titulo:'Protagonistas',singular:'Protagonista',descripcion:'Ficha de protagonistas, sección y patrulla.',icono:'person-outline',destacado:'nombre',campos:[f('nombre','Nombre',true),f('apellido','Apellido',true),f('dni','DNI',true,'number'),f('fecha_nacimiento','Fecha de nacimiento',false,'date'),f('id_seccion','Sección',true,'reference','secciones'),f('id_patrulla','Patrulla / equipo',false,'reference','patrullas'),f('promesa','Promesa realizada',false,'boolean'),f('anio_ingreso','Año de ingreso',false,'number'),f('id_etapa','Etapa de progresión',false,'reference','etapas')]},
 familiares:{titulo:'Familiares',singular:'Familiar',descripcion:'Relaciones y contactos de protagonistas.',icono:'people-circle-outline',destacado:'nombre',campos:[f('id_protagonista','Protagonista',true,'reference','protagonistas'),f('nombre','Nombre',true),f('apellido','Apellido',true),f('dni','DNI',false,'number'),f('vinculo','Vínculo',true,'enum',undefined,['Madre','Padre','Tutor/a','Otro']),f('telefono','Teléfono'),f('email','Correo'),f('emergencia','Contacto de emergencia',false,'boolean')]},
 eventos:{titulo:'Eventos',singular:'Evento',descripcion:'Fechas, descripción y prioridad de actividades.',icono:'calendar-outline',destacado:'titulo',campos:[f('id_grupo','Grupo',true,'reference','grupos'),f('titulo','Título del evento',true),f('descripcion','Descripción',false,'multiline'),f('fecha_inicio','Fecha AAAA-MM-DD',true,'date'),f('prioridad','Prioridad',false,'enum',undefined,['baja','media','alta']),f('alcance','Alcance',false,'enum',undefined,['grupo','secciones']),f('activo','Evento activo',false,'boolean')]},
 documentos:{titulo:'Documentos',singular:'Documento',descripcion:'Gestión y seguimiento de documentos de protagonistas.',icono:'document-text-outline',destacado:'descripcion',campos:[f('id_protagonista','Protagonista',true,'reference','protagonistas'),f('tipo_documento','Tipo de documento',true),f('descripcion','Descripción',true),f('nombre_archivo','Nombre de archivo')]},
 competencias:{titulo:'Competencias',singular:'Competencia',descripcion:'Catálogo de competencias de progresión.',icono:'ribbon-outline',destacado:'nombre',campos:[f('nombre','Nombre',true),f('rama','Rama',true,'enum',undefined,['Lobatos y Lobeznas','Scouts','Caminantes','Rovers']),f('descripcion','Descripción',false,'multiline')]},
 acciones:{titulo:'Acciones',singular:'Acción',descripcion:'Acciones vinculadas a competencias.',icono:'checkmark-circle-outline',destacado:'nombre',campos:[f('id_competencia','Competencia',true,'reference','competencias'),f('nombre','Acción',true),f('completada','Completada',false,'boolean')]},
 etapas:{titulo:'Etapas',singular:'Etapa',descripcion:'Etapas de progresión de cada rama.',icono:'trail-sign-outline',destacado:'nombre',campos:[f('nombre','Nombre',true),f('rama','Rama',true,'enum',undefined,['Lobatos y Lobeznas','Scouts','Caminantes','Rovers'])]},
 especialidades:{titulo:'Especialidades',singular:'Especialidad',descripcion:'Especialidades de progresión.',icono:'medal-outline',destacado:'nombre',campos:[f('nombre','Nombre',true),f('descripcion','Descripción',false,'multiline')]},
 insignias:{titulo:'Insignias',singular:'Insignia',descripcion:'Insignias otorgadas o disponibles.',icono:'star-outline',destacado:'nombre',campos:[f('nombre','Nombre',true),f('descripcion','Descripción',false,'multiline')]},
 solicitudes:{titulo:'Solicitudes de alta',singular:'Solicitud',descripcion:'Solicitudes de incorporación de nuevos grupos.',icono:'clipboard-outline',destacado:'nombre',campos:[f('nombre','Nombre del grupo',true),f('codigo','Código',true),f('estado','Estado',true,'enum',undefined,['Pendiente','Aprobada','Rechazada']),f('comentario','Motivo u observación',false,'multiline')]},
 accesos:{titulo:'Accesos y roles',singular:'Acceso',descripcion:'Usuarios, grupos y roles asignados.',icono:'key-outline',destacado:'usuario',campos:[f('usuario','Correo del usuario',true),f('id_grupo','Grupo',true,'reference','grupos'),f('rol','Rol',true,'enum',undefined,['Jefe de grupo','Educador','Colaborador','Administrador'])]},
};
export function tituloRegistro(tipo:Tipo,item:Registro):string {
 const clave=definiciones[tipo].destacado;
 const etiqueta=String(item[clave]??'Sin nombre');
 return tipo==='protagonistas'||tipo==='familiares'?`${etiqueta} ${item.apellido??''}`.trim():etiqueta;
}
export function relacion(tipo:Tipo,valor:Valor,datos:EstadoDatos):string {
 const encontrado=datos[tipo].find(x=>String(x.id)===String(valor));
 return encontrado ? tituloRegistro(tipo,encontrado) : `Registro #${valor}`;
}
export function verificarRegistro(tipo:Tipo,nuevo:Registro,datos:EstadoDatos,edicion?:number):string|null {
 const def=definiciones[tipo];
 for (const f of def.campos) {
  const valor=nuevo[f.key];
  if(f.required && (valor===undefined||String(valor).trim()==='')) return `Completá el campo «${f.label}».`;
  if(f.kind==='reference' && f.ref && valor!==undefined && String(valor)!=='') {
   if(!datos[f.ref].some(x=>String(x.id)===String(valor))) return `El campo «${f.label}» no coincide con un registro existente.`;
  }
 }
 if(tipo==='protagonistas') {
  if(datos.protagonistas.some(p=>p.id!==edicion && String(p.dni)===String(nuevo.dni))) return 'Ya existe un protagonista con ese DNI.';
  if(nuevo.id_etapa) {
   const etapa=datos.etapas.find(e=>String(e.id)===String(nuevo.id_etapa));
   const seccion=datos.secciones.find(s=>String(s.id)===String(nuevo.id_seccion));
   if(etapa && seccion && etapa.rama!==seccion.rama) return 'La etapa de progresión no corresponde a la rama de la sección.';
  }
  if(nuevo.id_patrulla) {
   const patrulla=datos.patrullas.find(p=>String(p.id)===String(nuevo.id_patrulla));
   if(patrulla && String(patrulla.id_seccion)!==String(nuevo.id_seccion)) return 'La patrulla debe pertenecer a la sección seleccionada.';
  }
 }
 return null;
}
