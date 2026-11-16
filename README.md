# Educarama Mobile — Expo SDK 58

Aplicación móvil con navegación lateral, módulos de gestión y edición de registros en memoria.
Diseño tomado de los colores y recursos oficiales del repositorio Educarama v2.1.

## Ejecutar en VS Code (PowerShell)

Abrí esta carpeta, que contiene `package.json`, y ejecutá:

```powershell
node -v
npm.cmd install
npx.cmd expo install --fix
npx.cmd expo-doctor
npm.cmd run check
npm.cmd run test:datos
npx.cmd expo start --clear
```

El celular y la PC deben estar en la misma red para utilizar el QR de Expo.
No necesita XAMPP, MySQL ni variables `.env`.

## Datos y funcionamiento

La experiencia visual está preparada como un producto completo, pero esta variante **no se conecta a un servidor**. Los registros iniciales son ficticios, cargados desde `src/data/datosIniciales.ts`. Los CRUD se aplican al estado de React y se comparten entre pantallas. Se pierden al finalizar por completo la ejecución de la app, no se guardan en disco ni en una base de datos.

Los accesos y documentos son registros de interfaz; no implementan autorización de usuarios ni carga física de archivos. Nunca utilizar con datos personales reales.

## Recursos

Se incluyen las imágenes originales de Lobo Pata Tierna, Lobo Saltador, Lobo Rastreador y Lobo Cazador y los emblemas de las cuatro ramas scout, tomadas del proyecto Educarama Web v2.1. Son imágenes locales, no enlaces externos.

## Rutas

`app/(drawer)/` contiene el menú principal y las pantallas. `app/detalle/[tipo].tsx` y `app/editar/[tipo].tsx` contienen la consulta y edición. `src/state/EducaramaContext.tsx` gestiona datos y tema compartidos.
