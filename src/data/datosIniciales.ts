import {EstadoDatos} from './modelos';
/** Registros iniciales locales. La aplicación trabaja sobre copias en memoria. */
export const datosIniciales: EstadoDatos = {
  "grupos": [
    {
      "id": 1,
      "codigo": "G-101",
      "nombre": "Los Aromos"
    },
    {
      "id": 2,
      "codigo": "G-102",
      "nombre": "Cerro Azul"
    },
    {
      "id": 3,
      "codigo": "G-103",
      "nombre": "San Martín"
    }
  ],
  "secciones": [
    {
      "id": 1,
      "nombre": "Luna Llena",
      "id_grupo": 1,
      "rama": "Lobatos y Lobeznas"
    },
    {
      "id": 2,
      "nombre": "Aconcagua",
      "id_grupo": 1,
      "rama": "Scouts"
    },
    {
      "id": 3,
      "nombre": "Horizonte",
      "id_grupo": 1,
      "rama": "Caminantes"
    },
    {
      "id": 4,
      "nombre": "Sendero",
      "id_grupo": 1,
      "rama": "Rovers"
    },
    {
      "id": 5,
      "nombre": "Arco Iris",
      "id_grupo": 2,
      "rama": "Lobatos y Lobeznas"
    },
    {
      "id": 6,
      "nombre": "Quebracho",
      "id_grupo": 2,
      "rama": "Scouts"
    },
    {
      "id": 7,
      "nombre": "Huella Andina",
      "id_grupo": 2,
      "rama": "Caminantes"
    },
    {
      "id": 8,
      "nombre": "Tierra Nueva",
      "id_grupo": 3,
      "rama": "Lobatos y Lobeznas"
    },
    {
      "id": 9,
      "nombre": "Los Cóndores",
      "id_grupo": 3,
      "rama": "Scouts"
    },
    {
      "id": 10,
      "nombre": "Nueva Ruta",
      "id_grupo": 3,
      "rama": "Rovers"
    }
  ],
  "patrullas": [
    {
      "id": 1,
      "nombre": "Seisena Gris",
      "id_seccion": 1
    },
    {
      "id": 2,
      "nombre": "Seisena Blanca",
      "id_seccion": 1
    },
    {
      "id": 3,
      "nombre": "Patrulla Halcón",
      "id_seccion": 2
    },
    {
      "id": 4,
      "nombre": "Patrulla Puma",
      "id_seccion": 2
    },
    {
      "id": 5,
      "nombre": "Equipo Norte",
      "id_seccion": 3
    },
    {
      "id": 6,
      "nombre": "Patrulla Zorro",
      "id_seccion": 6
    },
    {
      "id": 7,
      "nombre": "Seisena Amarilla",
      "id_seccion": 5
    },
    {
      "id": 8,
      "nombre": "Seisena Roja",
      "id_seccion": 5
    },
    {
      "id": 9,
      "nombre": "Seisena Azul",
      "id_seccion": 8
    },
    {
      "id": 10,
      "nombre": "Seisena Verde",
      "id_seccion": 8
    },
    {
      "id": 11,
      "nombre": "Patrulla Cóndor",
      "id_seccion": 9
    },
    {
      "id": 12,
      "nombre": "Patrulla Lince",
      "id_seccion": 9
    },
    {
      "id": 13,
      "nombre": "Equipo Horizonte",
      "id_seccion": 7
    }
  ],
  "protagonistas": [
    {
      "id": 1,
      "nombre": "Aitana",
      "apellido": "Aguirre",
      "dni": "99000001",
      "fecha_nacimiento": "2017-01-04",
      "id_seccion": 1,
      "promesa": false,
      "anio_ingreso": 2023,
      "id_etapa": 1,
      "id_patrulla": 1
    },
    {
      "id": 2,
      "nombre": "Dante",
      "apellido": "Fernández",
      "dni": "99000002",
      "fecha_nacimiento": "2018-02-05",
      "id_seccion": 5,
      "promesa": true,
      "anio_ingreso": 2024,
      "id_etapa": 1,
      "id_patrulla": 7
    },
    {
      "id": 3,
      "nombre": "Lara",
      "apellido": "Navarro",
      "dni": "99000003",
      "fecha_nacimiento": "2019-03-06",
      "id_seccion": 8,
      "promesa": true,
      "anio_ingreso": 2025,
      "id_etapa": 1,
      "id_patrulla": 9
    },
    {
      "id": 4,
      "nombre": "Mateo",
      "apellido": "Torres",
      "dni": "99000004",
      "fecha_nacimiento": "2016-04-07",
      "id_seccion": 2,
      "promesa": false,
      "anio_ingreso": 2026,
      "id_etapa": 6,
      "id_patrulla": 3
    },
    {
      "id": 5,
      "nombre": "Alma",
      "apellido": "Castillo",
      "dni": "99000005",
      "fecha_nacimiento": "2013-05-08",
      "id_seccion": 6,
      "promesa": true,
      "anio_ingreso": 2023,
      "id_etapa": 6,
      "id_patrulla": 6
    },
    {
      "id": 6,
      "nombre": "Alejo",
      "apellido": "Martínez",
      "dni": "99000006",
      "fecha_nacimiento": "2014-06-09",
      "id_seccion": 9,
      "promesa": true,
      "anio_ingreso": 2024,
      "id_etapa": 6,
      "id_patrulla": 11
    },
    {
      "id": 7,
      "nombre": "Lucía",
      "apellido": "Romero",
      "dni": "99000007",
      "fecha_nacimiento": "2011-07-10",
      "id_seccion": 3,
      "promesa": false,
      "anio_ingreso": 2025,
      "id_etapa": 9,
      "id_patrulla": 5
    },
    {
      "id": 8,
      "nombre": "Juan",
      "apellido": "Bravo",
      "dni": "99000008",
      "fecha_nacimiento": "2012-08-11",
      "id_seccion": 7,
      "promesa": true,
      "anio_ingreso": 2026,
      "id_etapa": 9,
      "id_patrulla": 13
    },
    {
      "id": 9,
      "nombre": "Antonella",
      "apellido": "González",
      "dni": "99000009",
      "fecha_nacimiento": "2008-09-12",
      "id_seccion": 4,
      "promesa": true,
      "anio_ingreso": 2023,
      "id_etapa": 11
    },
    {
      "id": 10,
      "nombre": "Thiago",
      "apellido": "Quiroga",
      "dni": "99000010",
      "fecha_nacimiento": "2006-01-13",
      "id_seccion": 10,
      "promesa": false,
      "anio_ingreso": 2024,
      "id_etapa": 11
    },
    {
      "id": 11,
      "nombre": "Martina",
      "apellido": "Villalba",
      "dni": "99000011",
      "fecha_nacimiento": "2019-02-14",
      "id_seccion": 1,
      "promesa": true,
      "anio_ingreso": 2025,
      "id_etapa": 2,
      "id_patrulla": 2
    },
    {
      "id": 12,
      "nombre": "Franco",
      "apellido": "Domínguez",
      "dni": "99000012",
      "fecha_nacimiento": "2020-03-15",
      "id_seccion": 5,
      "promesa": true,
      "anio_ingreso": 2026,
      "id_etapa": 2,
      "id_patrulla": 8
    },
    {
      "id": 13,
      "nombre": "Catalina",
      "apellido": "Morales",
      "dni": "99000013",
      "fecha_nacimiento": "2017-04-16",
      "id_seccion": 8,
      "promesa": false,
      "anio_ingreso": 2023,
      "id_etapa": 2,
      "id_patrulla": 10
    },
    {
      "id": 14,
      "nombre": "Nicolás",
      "apellido": "Suárez",
      "dni": "99000014",
      "fecha_nacimiento": "2014-05-17",
      "id_seccion": 2,
      "promesa": true,
      "anio_ingreso": 2024,
      "id_etapa": 5,
      "id_patrulla": 4
    },
    {
      "id": 15,
      "nombre": "Milagros",
      "apellido": "Carrizo",
      "dni": "99000015",
      "fecha_nacimiento": "2015-06-18",
      "id_seccion": 6,
      "promesa": true,
      "anio_ingreso": 2025,
      "id_etapa": 5,
      "id_patrulla": 6
    },
    {
      "id": 16,
      "nombre": "Benjamín",
      "apellido": "López",
      "dni": "99000016",
      "fecha_nacimiento": "2016-07-19",
      "id_seccion": 9,
      "promesa": false,
      "anio_ingreso": 2026,
      "id_etapa": 6,
      "id_patrulla": 12
    },
    {
      "id": 17,
      "nombre": "Delfina",
      "apellido": "Rodríguez",
      "dni": "99000017",
      "fecha_nacimiento": "2009-08-20",
      "id_seccion": 3,
      "promesa": true,
      "anio_ingreso": 2023,
      "id_etapa": 10,
      "id_patrulla": 5
    },
    {
      "id": 18,
      "nombre": "Lorenzo",
      "apellido": "Benítez",
      "dni": "99000018",
      "fecha_nacimiento": "2010-09-21",
      "id_seccion": 7,
      "promesa": true,
      "anio_ingreso": 2024,
      "id_etapa": 10,
      "id_patrulla": 13
    },
    {
      "id": 19,
      "nombre": "Renata",
      "apellido": "Gómez",
      "dni": "99000019",
      "fecha_nacimiento": "2006-01-22",
      "id_seccion": 4,
      "promesa": false,
      "anio_ingreso": 2025,
      "id_etapa": 11
    },
    {
      "id": 20,
      "nombre": "Valentín",
      "apellido": "Pereyra",
      "dni": "99000020",
      "fecha_nacimiento": "2007-02-23",
      "id_seccion": 10,
      "promesa": true,
      "anio_ingreso": 2026,
      "id_etapa": 11
    },
    {
      "id": 21,
      "nombre": "Emma",
      "apellido": "Vega",
      "dni": "99000021",
      "fecha_nacimiento": "2017-03-04",
      "id_seccion": 1,
      "promesa": true,
      "anio_ingreso": 2023,
      "id_etapa": 4,
      "id_patrulla": 1
    },
    {
      "id": 22,
      "nombre": "Ignacio",
      "apellido": "Díaz",
      "dni": "99000022",
      "fecha_nacimiento": "2018-04-05",
      "id_seccion": 5,
      "promesa": false,
      "anio_ingreso": 2024,
      "id_etapa": 1,
      "id_patrulla": 7
    },
    {
      "id": 23,
      "nombre": "Valentina",
      "apellido": "Molina",
      "dni": "99000023",
      "fecha_nacimiento": "2019-05-06",
      "id_seccion": 8,
      "promesa": true,
      "anio_ingreso": 2025,
      "id_etapa": 1,
      "id_patrulla": 9
    },
    {
      "id": 24,
      "nombre": "Santiago",
      "apellido": "Silva",
      "dni": "99000024",
      "fecha_nacimiento": "2016-06-07",
      "id_seccion": 2,
      "promesa": true,
      "anio_ingreso": 2026,
      "id_etapa": 8,
      "id_patrulla": 3
    },
    {
      "id": 25,
      "nombre": "Guadalupe",
      "apellido": "Campos",
      "dni": "99000025",
      "fecha_nacimiento": "2013-07-08",
      "id_seccion": 6,
      "promesa": false,
      "anio_ingreso": 2023,
      "id_etapa": 5,
      "id_patrulla": 6
    },
    {
      "id": 26,
      "nombre": "Dante",
      "apellido": "Ledesma",
      "dni": "99000026",
      "fecha_nacimiento": "2014-08-09",
      "id_seccion": 9,
      "promesa": true,
      "anio_ingreso": 2024,
      "id_etapa": 5,
      "id_patrulla": 11
    },
    {
      "id": 27,
      "nombre": "Aitana",
      "apellido": "Ríos",
      "dni": "99000027",
      "fecha_nacimiento": "2011-09-10",
      "id_seccion": 3,
      "promesa": true,
      "anio_ingreso": 2025,
      "id_etapa": 9,
      "id_patrulla": 5
    },
    {
      "id": 28,
      "nombre": "Mateo",
      "apellido": "Álvarez",
      "dni": "99000028",
      "fecha_nacimiento": "2012-01-11",
      "id_seccion": 7,
      "promesa": false,
      "anio_ingreso": 2026,
      "id_etapa": 10,
      "id_patrulla": 13
    },
    {
      "id": 29,
      "nombre": "Lara",
      "apellido": "Giménez",
      "dni": "99000029",
      "fecha_nacimiento": "2007-02-12",
      "id_seccion": 4,
      "promesa": true,
      "anio_ingreso": 2023,
      "id_etapa": 11
    },
    {
      "id": 30,
      "nombre": "Alejo",
      "apellido": "Paz",
      "dni": "99000030",
      "fecha_nacimiento": "2008-03-13",
      "id_seccion": 10,
      "promesa": true,
      "anio_ingreso": 2024,
      "id_etapa": 11
    },
    {
      "id": 31,
      "nombre": "Alma",
      "apellido": "Vargas",
      "dni": "99000031",
      "fecha_nacimiento": "2019-04-14",
      "id_seccion": 1,
      "promesa": false,
      "anio_ingreso": 2025,
      "id_etapa": 2,
      "id_patrulla": 2
    },
    {
      "id": 32,
      "nombre": "Juan",
      "apellido": "Córdoba",
      "dni": "99000032",
      "fecha_nacimiento": "2020-05-15",
      "id_seccion": 5,
      "promesa": true,
      "anio_ingreso": 2026,
      "id_etapa": 2,
      "id_patrulla": 8
    },
    {
      "id": 33,
      "nombre": "Lucía",
      "apellido": "Medina",
      "dni": "99000033",
      "fecha_nacimiento": "2017-06-16",
      "id_seccion": 8,
      "promesa": true,
      "anio_ingreso": 2023,
      "id_etapa": 2,
      "id_patrulla": 10
    },
    {
      "id": 34,
      "nombre": "Thiago",
      "apellido": "Sánchez",
      "dni": "99000034",
      "fecha_nacimiento": "2014-07-17",
      "id_seccion": 2,
      "promesa": false,
      "anio_ingreso": 2024,
      "id_etapa": 8,
      "id_patrulla": 4
    },
    {
      "id": 35,
      "nombre": "Antonella",
      "apellido": "Cabrera",
      "dni": "99000035",
      "fecha_nacimiento": "2015-08-18",
      "id_seccion": 6,
      "promesa": true,
      "anio_ingreso": 2025,
      "id_etapa": 8,
      "id_patrulla": 6
    },
    {
      "id": 36,
      "nombre": "Franco",
      "apellido": "Herrera",
      "dni": "99000036",
      "fecha_nacimiento": "2016-09-19",
      "id_seccion": 9,
      "promesa": true,
      "anio_ingreso": 2026,
      "id_etapa": 8,
      "id_patrulla": 12
    },
    {
      "id": 37,
      "nombre": "Martina",
      "apellido": "Ramírez",
      "dni": "99000037",
      "fecha_nacimiento": "2009-01-20",
      "id_seccion": 3,
      "promesa": false,
      "anio_ingreso": 2023,
      "id_etapa": 9,
      "id_patrulla": 5
    },
    {
      "id": 38,
      "nombre": "Nicolás",
      "apellido": "Aguirre",
      "dni": "99000038",
      "fecha_nacimiento": "2010-02-21",
      "id_seccion": 7,
      "promesa": true,
      "anio_ingreso": 2024,
      "id_etapa": 9,
      "id_patrulla": 13
    },
    {
      "id": 39,
      "nombre": "Catalina",
      "apellido": "Fernández",
      "dni": "99000039",
      "fecha_nacimiento": "2008-03-22",
      "id_seccion": 4,
      "promesa": true,
      "anio_ingreso": 2025,
      "id_etapa": 11
    },
    {
      "id": 40,
      "nombre": "Benjamín",
      "apellido": "Navarro",
      "dni": "99000040",
      "fecha_nacimiento": "2006-04-23",
      "id_seccion": 10,
      "promesa": false,
      "anio_ingreso": 2026,
      "id_etapa": 11
    },
    {
      "id": 41,
      "nombre": "Milagros",
      "apellido": "Torres",
      "dni": "99000041",
      "fecha_nacimiento": "2017-05-04",
      "id_seccion": 1,
      "promesa": true,
      "anio_ingreso": 2023,
      "id_etapa": 4,
      "id_patrulla": 1
    },
    {
      "id": 42,
      "nombre": "Lorenzo",
      "apellido": "Castillo",
      "dni": "99000042",
      "fecha_nacimiento": "2018-06-05",
      "id_seccion": 5,
      "promesa": true,
      "anio_ingreso": 2024,
      "id_etapa": 4,
      "id_patrulla": 7
    },
    {
      "id": 43,
      "nombre": "Delfina",
      "apellido": "Martínez",
      "dni": "99000043",
      "fecha_nacimiento": "2019-07-06",
      "id_seccion": 8,
      "promesa": false,
      "anio_ingreso": 2025,
      "id_etapa": 1,
      "id_patrulla": 9
    },
    {
      "id": 44,
      "nombre": "Valentín",
      "apellido": "Romero",
      "dni": "99000044",
      "fecha_nacimiento": "2016-08-07",
      "id_seccion": 2,
      "promesa": true,
      "anio_ingreso": 2026,
      "id_etapa": 7,
      "id_patrulla": 3
    },
    {
      "id": 45,
      "nombre": "Renata",
      "apellido": "Bravo",
      "dni": "99000045",
      "fecha_nacimiento": "2013-09-08",
      "id_seccion": 6,
      "promesa": true,
      "anio_ingreso": 2023,
      "id_etapa": 7,
      "id_patrulla": 6
    },
    {
      "id": 46,
      "nombre": "Ignacio",
      "apellido": "González",
      "dni": "99000046",
      "fecha_nacimiento": "2014-01-09",
      "id_seccion": 9,
      "promesa": false,
      "anio_ingreso": 2024,
      "id_etapa": 8,
      "id_patrulla": 11
    },
    {
      "id": 47,
      "nombre": "Emma",
      "apellido": "Quiroga",
      "dni": "99000047",
      "fecha_nacimiento": "2011-02-10",
      "id_seccion": 3,
      "promesa": true,
      "anio_ingreso": 2025,
      "id_etapa": 10,
      "id_patrulla": 5
    },
    {
      "id": 48,
      "nombre": "Santiago",
      "apellido": "Villalba",
      "dni": "99000048",
      "fecha_nacimiento": "2012-03-11",
      "id_seccion": 7,
      "promesa": true,
      "anio_ingreso": 2026,
      "id_etapa": 10,
      "id_patrulla": 13
    },
    {
      "id": 49,
      "nombre": "Valentina",
      "apellido": "Domínguez",
      "dni": "99000049",
      "fecha_nacimiento": "2006-04-12",
      "id_seccion": 4,
      "promesa": false,
      "anio_ingreso": 2023,
      "id_etapa": 11
    },
    {
      "id": 50,
      "nombre": "Dante",
      "apellido": "Morales",
      "dni": "99000050",
      "fecha_nacimiento": "2007-05-13",
      "id_seccion": 10,
      "promesa": true,
      "anio_ingreso": 2024,
      "id_etapa": 11
    },
    {
      "id": 51,
      "nombre": "Guadalupe",
      "apellido": "Suárez",
      "dni": "99000051",
      "fecha_nacimiento": "2019-06-14",
      "id_seccion": 1,
      "promesa": true,
      "anio_ingreso": 2025,
      "id_etapa": 1,
      "id_patrulla": 2
    },
    {
      "id": 52,
      "nombre": "Mateo",
      "apellido": "Carrizo",
      "dni": "99000052",
      "fecha_nacimiento": "2020-07-15",
      "id_seccion": 5,
      "promesa": false,
      "anio_ingreso": 2026,
      "id_etapa": 2,
      "id_patrulla": 8
    },
    {
      "id": 53,
      "nombre": "Aitana",
      "apellido": "López",
      "dni": "99000053",
      "fecha_nacimiento": "2017-08-16",
      "id_seccion": 8,
      "promesa": true,
      "anio_ingreso": 2023,
      "id_etapa": 2,
      "id_patrulla": 10
    },
    {
      "id": 54,
      "nombre": "Alejo",
      "apellido": "Rodríguez",
      "dni": "99000054",
      "fecha_nacimiento": "2014-09-17",
      "id_seccion": 2,
      "promesa": true,
      "anio_ingreso": 2024,
      "id_etapa": 6,
      "id_patrulla": 4
    },
    {
      "id": 55,
      "nombre": "Lara",
      "apellido": "Benítez",
      "dni": "99000055",
      "fecha_nacimiento": "2015-01-18",
      "id_seccion": 6,
      "promesa": false,
      "anio_ingreso": 2025,
      "id_etapa": 7,
      "id_patrulla": 6
    },
    {
      "id": 56,
      "nombre": "Juan",
      "apellido": "Gómez",
      "dni": "99000056",
      "fecha_nacimiento": "2016-02-19",
      "id_seccion": 9,
      "promesa": true,
      "anio_ingreso": 2026,
      "id_etapa": 7,
      "id_patrulla": 12
    },
    {
      "id": 57,
      "nombre": "Alma",
      "apellido": "Pereyra",
      "dni": "99000057",
      "fecha_nacimiento": "2009-03-20",
      "id_seccion": 3,
      "promesa": true,
      "anio_ingreso": 2023,
      "id_etapa": 9,
      "id_patrulla": 5
    },
    {
      "id": 58,
      "nombre": "Thiago",
      "apellido": "Vega",
      "dni": "99000058",
      "fecha_nacimiento": "2010-04-21",
      "id_seccion": 7,
      "promesa": false,
      "anio_ingreso": 2024,
      "id_etapa": 10,
      "id_patrulla": 13
    },
    {
      "id": 59,
      "nombre": "Lucía",
      "apellido": "Díaz",
      "dni": "99000059",
      "fecha_nacimiento": "2007-05-22",
      "id_seccion": 4,
      "promesa": true,
      "anio_ingreso": 2025,
      "id_etapa": 11
    },
    {
      "id": 60,
      "nombre": "Franco",
      "apellido": "Molina",
      "dni": "99000060",
      "fecha_nacimiento": "2008-06-23",
      "id_seccion": 10,
      "promesa": true,
      "anio_ingreso": 2026,
      "id_etapa": 11
    },
    {
      "id": 61,
      "nombre": "Antonella",
      "apellido": "Silva",
      "dni": "99000061",
      "fecha_nacimiento": "2017-07-04",
      "id_seccion": 1,
      "promesa": false,
      "anio_ingreso": 2023,
      "id_etapa": 4,
      "id_patrulla": 1
    },
    {
      "id": 62,
      "nombre": "Nicolás",
      "apellido": "Campos",
      "dni": "99000062",
      "fecha_nacimiento": "2018-08-05",
      "id_seccion": 5,
      "promesa": true,
      "anio_ingreso": 2024,
      "id_etapa": 4,
      "id_patrulla": 7
    },
    {
      "id": 63,
      "nombre": "Martina",
      "apellido": "Ledesma",
      "dni": "99000063",
      "fecha_nacimiento": "2019-09-06",
      "id_seccion": 8,
      "promesa": true,
      "anio_ingreso": 2025,
      "id_etapa": 4,
      "id_patrulla": 9
    },
    {
      "id": 64,
      "nombre": "Benjamín",
      "apellido": "Ríos",
      "dni": "99000064",
      "fecha_nacimiento": "2016-01-07",
      "id_seccion": 2,
      "promesa": false,
      "anio_ingreso": 2026,
      "id_etapa": 6,
      "id_patrulla": 3
    },
    {
      "id": 65,
      "nombre": "Catalina",
      "apellido": "Álvarez",
      "dni": "99000065",
      "fecha_nacimiento": "2013-02-08",
      "id_seccion": 6,
      "promesa": true,
      "anio_ingreso": 2023,
      "id_etapa": 6,
      "id_patrulla": 6
    },
    {
      "id": 66,
      "nombre": "Lorenzo",
      "apellido": "Giménez",
      "dni": "99000066",
      "fecha_nacimiento": "2014-03-09",
      "id_seccion": 9,
      "promesa": true,
      "anio_ingreso": 2024,
      "id_etapa": 6,
      "id_patrulla": 11
    },
    {
      "id": 67,
      "nombre": "Milagros",
      "apellido": "Paz",
      "dni": "99000067",
      "fecha_nacimiento": "2011-04-10",
      "id_seccion": 3,
      "promesa": false,
      "anio_ingreso": 2025,
      "id_etapa": 9,
      "id_patrulla": 5
    },
    {
      "id": 68,
      "nombre": "Valentín",
      "apellido": "Vargas",
      "dni": "99000068",
      "fecha_nacimiento": "2012-05-11",
      "id_seccion": 7,
      "promesa": true,
      "anio_ingreso": 2026,
      "id_etapa": 9,
      "id_patrulla": 13
    },
    {
      "id": 69,
      "nombre": "Delfina",
      "apellido": "Córdoba",
      "dni": "99000069",
      "fecha_nacimiento": "2008-06-12",
      "id_seccion": 4,
      "promesa": true,
      "anio_ingreso": 2023,
      "id_etapa": 11
    },
    {
      "id": 70,
      "nombre": "Ignacio",
      "apellido": "Medina",
      "dni": "99000070",
      "fecha_nacimiento": "2006-07-13",
      "id_seccion": 10,
      "promesa": false,
      "anio_ingreso": 2024,
      "id_etapa": 11
    },
    {
      "id": 71,
      "nombre": "Renata",
      "apellido": "Sánchez",
      "dni": "99000071",
      "fecha_nacimiento": "2019-08-14",
      "id_seccion": 1,
      "promesa": true,
      "anio_ingreso": 2025,
      "id_etapa": 1,
      "id_patrulla": 2
    },
    {
      "id": 72,
      "nombre": "Santiago",
      "apellido": "Cabrera",
      "dni": "99000072",
      "fecha_nacimiento": "2020-09-15",
      "id_seccion": 5,
      "promesa": true,
      "anio_ingreso": 2026,
      "id_etapa": 1,
      "id_patrulla": 8
    }
  ],
  "familiares": [
    {
      "id": 1,
      "id_protagonista": 1,
      "nombre": "Benjamín",
      "apellido": "Aguirre",
      "vinculo": "Padre",
      "telefono": "1100001000",
      "email": "contacto1@example.test",
      "emergencia": false
    },
    {
      "id": 2,
      "id_protagonista": 2,
      "nombre": "Bianca",
      "apellido": "Fernández",
      "vinculo": "Madre",
      "telefono": "1100001001",
      "email": "contacto2@example.test",
      "emergencia": true
    },
    {
      "id": 3,
      "id_protagonista": 3,
      "nombre": "Dante",
      "apellido": "Navarro",
      "vinculo": "Padre",
      "telefono": "1100001002",
      "email": "contacto3@example.test",
      "emergencia": true
    },
    {
      "id": 4,
      "id_protagonista": 4,
      "nombre": "Clara",
      "apellido": "Torres",
      "vinculo": "Madre",
      "telefono": "1100001003",
      "email": "contacto4@example.test",
      "emergencia": false
    },
    {
      "id": 5,
      "id_protagonista": 5,
      "nombre": "Franco",
      "apellido": "Castillo",
      "vinculo": "Padre",
      "telefono": "1100001004",
      "email": "contacto5@example.test",
      "emergencia": true
    },
    {
      "id": 6,
      "id_protagonista": 6,
      "nombre": "Emilia",
      "apellido": "Martínez",
      "vinculo": "Madre",
      "telefono": "1100001005",
      "email": "contacto6@example.test",
      "emergencia": true
    },
    {
      "id": 7,
      "id_protagonista": 7,
      "nombre": "Ignacio",
      "apellido": "Romero",
      "vinculo": "Padre",
      "telefono": "1100001006",
      "email": "contacto7@example.test",
      "emergencia": false
    },
    {
      "id": 8,
      "id_protagonista": 8,
      "nombre": "Florencia",
      "apellido": "Bravo",
      "vinculo": "Madre",
      "telefono": "1100001007",
      "email": "contacto8@example.test",
      "emergencia": true
    },
    {
      "id": 9,
      "id_protagonista": 9,
      "nombre": "Juan",
      "apellido": "González",
      "vinculo": "Padre",
      "telefono": "1100001008",
      "email": "contacto9@example.test",
      "emergencia": true
    },
    {
      "id": 10,
      "id_protagonista": 10,
      "nombre": "Julieta",
      "apellido": "Quiroga",
      "vinculo": "Madre",
      "telefono": "1100001009",
      "email": "contacto10@example.test",
      "emergencia": false
    },
    {
      "id": 11,
      "id_protagonista": 11,
      "nombre": "Lorenzo",
      "apellido": "Villalba",
      "vinculo": "Padre",
      "telefono": "1100001010",
      "email": "contacto11@example.test",
      "emergencia": true
    },
    {
      "id": 12,
      "id_protagonista": 12,
      "nombre": "Lola",
      "apellido": "Domínguez",
      "vinculo": "Madre",
      "telefono": "1100001011",
      "email": "contacto12@example.test",
      "emergencia": true
    },
    {
      "id": 13,
      "id_protagonista": 13,
      "nombre": "Mateo",
      "apellido": "Morales",
      "vinculo": "Padre",
      "telefono": "1100001012",
      "email": "contacto13@example.test",
      "emergencia": false
    },
    {
      "id": 14,
      "id_protagonista": 14,
      "nombre": "Malena",
      "apellido": "Suárez",
      "vinculo": "Madre",
      "telefono": "1100001013",
      "email": "contacto14@example.test",
      "emergencia": true
    },
    {
      "id": 15,
      "id_protagonista": 15,
      "nombre": "Nicolás",
      "apellido": "Carrizo",
      "vinculo": "Padre",
      "telefono": "1100001014",
      "email": "contacto15@example.test",
      "emergencia": true
    },
    {
      "id": 16,
      "id_protagonista": 16,
      "nombre": "Mía",
      "apellido": "López",
      "vinculo": "Madre",
      "telefono": "1100001015",
      "email": "contacto16@example.test",
      "emergencia": false
    },
    {
      "id": 17,
      "id_protagonista": 17,
      "nombre": "Santiago",
      "apellido": "Rodríguez",
      "vinculo": "Padre",
      "telefono": "1100001016",
      "email": "contacto17@example.test",
      "emergencia": true
    },
    {
      "id": 18,
      "id_protagonista": 18,
      "nombre": "Olivia",
      "apellido": "Benítez",
      "vinculo": "Madre",
      "telefono": "1100001017",
      "email": "contacto18@example.test",
      "emergencia": true
    },
    {
      "id": 19,
      "id_protagonista": 19,
      "nombre": "Thiago",
      "apellido": "Gómez",
      "vinculo": "Padre",
      "telefono": "1100001018",
      "email": "contacto19@example.test",
      "emergencia": false
    },
    {
      "id": 20,
      "id_protagonista": 20,
      "nombre": "Sofía",
      "apellido": "Pereyra",
      "vinculo": "Madre",
      "telefono": "1100001019",
      "email": "contacto20@example.test",
      "emergencia": true
    },
    {
      "id": 21,
      "id_protagonista": 21,
      "nombre": "Valentín",
      "apellido": "Vega",
      "vinculo": "Padre",
      "telefono": "1100001020",
      "email": "contacto21@example.test",
      "emergencia": true
    },
    {
      "id": 22,
      "id_protagonista": 22,
      "nombre": "Victoria",
      "apellido": "Díaz",
      "vinculo": "Madre",
      "telefono": "1100001021",
      "email": "contacto22@example.test",
      "emergencia": false
    },
    {
      "id": 23,
      "id_protagonista": 23,
      "nombre": "Alejo",
      "apellido": "Molina",
      "vinculo": "Padre",
      "telefono": "1100001022",
      "email": "contacto23@example.test",
      "emergencia": true
    },
    {
      "id": 24,
      "id_protagonista": 24,
      "nombre": "Agustina",
      "apellido": "Silva",
      "vinculo": "Madre",
      "telefono": "1100001023",
      "email": "contacto24@example.test",
      "emergencia": true
    },
    {
      "id": 25,
      "id_protagonista": 25,
      "nombre": "Benjamín",
      "apellido": "Campos",
      "vinculo": "Padre",
      "telefono": "1100001024",
      "email": "contacto25@example.test",
      "emergencia": false
    },
    {
      "id": 26,
      "id_protagonista": 26,
      "nombre": "Amparo",
      "apellido": "Ledesma",
      "vinculo": "Madre",
      "telefono": "1100001025",
      "email": "contacto26@example.test",
      "emergencia": true
    },
    {
      "id": 27,
      "id_protagonista": 27,
      "nombre": "Dante",
      "apellido": "Ríos",
      "vinculo": "Padre",
      "telefono": "1100001026",
      "email": "contacto27@example.test",
      "emergencia": true
    },
    {
      "id": 28,
      "id_protagonista": 28,
      "nombre": "Bianca",
      "apellido": "Álvarez",
      "vinculo": "Madre",
      "telefono": "1100001027",
      "email": "contacto28@example.test",
      "emergencia": false
    },
    {
      "id": 29,
      "id_protagonista": 29,
      "nombre": "Franco",
      "apellido": "Giménez",
      "vinculo": "Padre",
      "telefono": "1100001028",
      "email": "contacto29@example.test",
      "emergencia": true
    },
    {
      "id": 30,
      "id_protagonista": 30,
      "nombre": "Clara",
      "apellido": "Paz",
      "vinculo": "Madre",
      "telefono": "1100001029",
      "email": "contacto30@example.test",
      "emergencia": true
    },
    {
      "id": 31,
      "id_protagonista": 31,
      "nombre": "Ignacio",
      "apellido": "Vargas",
      "vinculo": "Padre",
      "telefono": "1100001030",
      "email": "contacto31@example.test",
      "emergencia": false
    },
    {
      "id": 32,
      "id_protagonista": 32,
      "nombre": "Emilia",
      "apellido": "Córdoba",
      "vinculo": "Madre",
      "telefono": "1100001031",
      "email": "contacto32@example.test",
      "emergencia": true
    },
    {
      "id": 33,
      "id_protagonista": 33,
      "nombre": "Juan",
      "apellido": "Medina",
      "vinculo": "Padre",
      "telefono": "1100001032",
      "email": "contacto33@example.test",
      "emergencia": true
    },
    {
      "id": 34,
      "id_protagonista": 34,
      "nombre": "Florencia",
      "apellido": "Sánchez",
      "vinculo": "Madre",
      "telefono": "1100001033",
      "email": "contacto34@example.test",
      "emergencia": false
    },
    {
      "id": 35,
      "id_protagonista": 35,
      "nombre": "Lorenzo",
      "apellido": "Cabrera",
      "vinculo": "Padre",
      "telefono": "1100001034",
      "email": "contacto35@example.test",
      "emergencia": true
    },
    {
      "id": 36,
      "id_protagonista": 36,
      "nombre": "Julieta",
      "apellido": "Herrera",
      "vinculo": "Madre",
      "telefono": "1100001035",
      "email": "contacto36@example.test",
      "emergencia": true
    },
    {
      "id": 37,
      "id_protagonista": 37,
      "nombre": "Mateo",
      "apellido": "Ramírez",
      "vinculo": "Padre",
      "telefono": "1100001036",
      "email": "contacto37@example.test",
      "emergencia": false
    },
    {
      "id": 38,
      "id_protagonista": 38,
      "nombre": "Lola",
      "apellido": "Aguirre",
      "vinculo": "Madre",
      "telefono": "1100001037",
      "email": "contacto38@example.test",
      "emergencia": true
    }
  ],
  "eventos": [
    {
      "id": 1,
      "id_grupo": 1,
      "titulo": "Campamento de primavera",
      "descripcion": "Actividad de fin de semana",
      "fecha_inicio": "2026-11-20",
      "prioridad": "alta",
      "alcance": "grupo",
      "activo": true
    },
    {
      "id": 2,
      "id_grupo": 2,
      "titulo": "Fogón de grupo",
      "descripcion": "Encuentro de cierre",
      "fecha_inicio": "2026-11-28",
      "prioridad": "media",
      "alcance": "grupo",
      "activo": true
    },
    {
      "id": 3,
      "id_grupo": 3,
      "titulo": "Jornada solidaria",
      "descripcion": "Acción comunitaria",
      "fecha_inicio": "2026-12-05",
      "prioridad": "media",
      "alcance": "grupo",
      "activo": true
    },
    {
      "id": 4,
      "id_grupo": 1,
      "titulo": "Salida de unidad",
      "descripcion": "Actividad por secciones",
      "fecha_inicio": "2026-12-10",
      "prioridad": "media",
      "alcance": "grupo",
      "activo": true
    },
    {
      "id": 5,
      "id_grupo": 2,
      "titulo": "Consejo de educadores",
      "descripcion": "Planificación de actividades",
      "fecha_inicio": "2026-12-12",
      "prioridad": "baja",
      "alcance": "grupo",
      "activo": true
    },
    {
      "id": 6,
      "id_grupo": 3,
      "titulo": "Campamento de verano",
      "descripcion": "Encuentro de varias ramas",
      "fecha_inicio": "2026-12-19",
      "prioridad": "alta",
      "alcance": "grupo",
      "activo": true
    },
    {
      "id": 7,
      "id_grupo": 1,
      "titulo": "Taller de primeros auxilios",
      "descripcion": "Formación práctica",
      "fecha_inicio": "2026-12-22",
      "prioridad": "media",
      "alcance": "grupo",
      "activo": true
    }
  ],
  "documentos": [
    {
      "id": 1,
      "id_protagonista": 1,
      "tipo_documento": "Autorización",
      "descripcion": "Registro de autorización",
      "nombre_archivo": "documento_1.pdf"
    },
    {
      "id": 2,
      "id_protagonista": 2,
      "tipo_documento": "Ficha de salud",
      "descripcion": "Datos de contacto y salud",
      "nombre_archivo": "documento_2.pdf"
    },
    {
      "id": 3,
      "id_protagonista": 3,
      "tipo_documento": "Autorización",
      "descripcion": "Registro de autorización",
      "nombre_archivo": "documento_3.pdf"
    },
    {
      "id": 4,
      "id_protagonista": 4,
      "tipo_documento": "Ficha de salud",
      "descripcion": "Datos de contacto y salud",
      "nombre_archivo": "documento_4.pdf"
    },
    {
      "id": 5,
      "id_protagonista": 5,
      "tipo_documento": "Autorización",
      "descripcion": "Registro de autorización",
      "nombre_archivo": "documento_5.pdf"
    },
    {
      "id": 6,
      "id_protagonista": 6,
      "tipo_documento": "Ficha de salud",
      "descripcion": "Datos de contacto y salud",
      "nombre_archivo": "documento_6.pdf"
    },
    {
      "id": 7,
      "id_protagonista": 7,
      "tipo_documento": "Autorización",
      "descripcion": "Registro de autorización",
      "nombre_archivo": "documento_7.pdf"
    },
    {
      "id": 8,
      "id_protagonista": 8,
      "tipo_documento": "Ficha de salud",
      "descripcion": "Datos de contacto y salud",
      "nombre_archivo": "documento_8.pdf"
    },
    {
      "id": 9,
      "id_protagonista": 9,
      "tipo_documento": "Autorización",
      "descripcion": "Registro de autorización",
      "nombre_archivo": "documento_9.pdf"
    },
    {
      "id": 10,
      "id_protagonista": 10,
      "tipo_documento": "Ficha de salud",
      "descripcion": "Datos de contacto y salud",
      "nombre_archivo": "documento_10.pdf"
    },
    {
      "id": 11,
      "id_protagonista": 11,
      "tipo_documento": "Autorización",
      "descripcion": "Registro de autorización",
      "nombre_archivo": "documento_11.pdf"
    },
    {
      "id": 12,
      "id_protagonista": 12,
      "tipo_documento": "Ficha de salud",
      "descripcion": "Datos de contacto y salud",
      "nombre_archivo": "documento_12.pdf"
    },
    {
      "id": 13,
      "id_protagonista": 13,
      "tipo_documento": "Autorización",
      "descripcion": "Registro de autorización",
      "nombre_archivo": "documento_13.pdf"
    },
    {
      "id": 14,
      "id_protagonista": 14,
      "tipo_documento": "Ficha de salud",
      "descripcion": "Datos de contacto y salud",
      "nombre_archivo": "documento_14.pdf"
    }
  ],
  "competencias": [
    {
      "id": 1,
      "nombre": "Vida al aire libre",
      "rama": "Scouts",
      "descripcion": "Desarrolla habilidades de campamento"
    },
    {
      "id": 2,
      "nombre": "Trabajo en equipo",
      "rama": "Caminantes",
      "descripcion": "Construcción de proyectos compartidos"
    },
    {
      "id": 3,
      "nombre": "Convivencia y cooperación",
      "rama": "Lobatos y Lobeznas",
      "descripcion": "Participación y convivencia"
    },
    {
      "id": 4,
      "nombre": "Servicio comunitario",
      "rama": "Rovers",
      "descripcion": "Participación comunitaria"
    }
  ],
  "acciones": [
    {
      "id": 1,
      "id_competencia": 1,
      "nombre": "Armar un campamento seguro",
      "completada": false
    },
    {
      "id": 2,
      "id_competencia": 2,
      "nombre": "Organizar un trabajo colectivo",
      "completada": true
    },
    {
      "id": 3,
      "id_competencia": 3,
      "nombre": "Colaborar en tareas de la seisena",
      "completada": true
    },
    {
      "id": 4,
      "id_competencia": 4,
      "nombre": "Participar en una jornada solidaria",
      "completada": false
    }
  ],
  "etapas": [
    {
      "id": 1,
      "nombre": "Lobo Pata Tierna",
      "rama": "Lobatos y Lobeznas"
    },
    {
      "id": 2,
      "nombre": "Lobo Saltador",
      "rama": "Lobatos y Lobeznas"
    },
    {
      "id": 3,
      "nombre": "Lobo Rastreador",
      "rama": "Lobatos y Lobeznas"
    },
    {
      "id": 4,
      "nombre": "Lobo Cazador",
      "rama": "Lobatos y Lobeznas"
    },
    {
      "id": 5,
      "nombre": "Pistas",
      "rama": "Scouts"
    },
    {
      "id": 6,
      "nombre": "Senda",
      "rama": "Scouts"
    },
    {
      "id": 7,
      "nombre": "Rumbo",
      "rama": "Scouts"
    },
    {
      "id": 8,
      "nombre": "Travesía",
      "rama": "Scouts"
    },
    {
      "id": 9,
      "nombre": "Agua",
      "rama": "Caminantes"
    },
    {
      "id": 10,
      "nombre": "Tierra",
      "rama": "Caminantes"
    },
    {
      "id": 11,
      "nombre": "Encuentro",
      "rama": "Rovers"
    }
  ],
  "especialidades": [
    {
      "id": 1,
      "nombre": "Primeros auxilios",
      "descripcion": "Atención inicial y prevención"
    },
    {
      "id": 2,
      "nombre": "Orientación",
      "descripcion": "Lectura de mapas y rutas"
    },
    {
      "id": 3,
      "nombre": "Vida al aire libre",
      "descripcion": "Campamentos y cuidado del entorno"
    },
    {
      "id": 4,
      "nombre": "Arte y expresión",
      "descripcion": "Comunicación artística"
    }
  ],
  "insignias": [
    {
      "id": 1,
      "nombre": "Lobo Pata Tierna",
      "descripcion": "Etapa de progresión: Lobo Pata Tierna"
    },
    {
      "id": 2,
      "nombre": "Lobo Saltador",
      "descripcion": "Etapa de progresión: Lobo Saltador"
    },
    {
      "id": 3,
      "nombre": "Lobo Rastreador",
      "descripcion": "Etapa de progresión: Lobo Rastreador"
    },
    {
      "id": 4,
      "nombre": "Lobo Cazador",
      "descripcion": "Etapa de progresión: Lobo Cazador"
    }
  ],
  "solicitudes": [
    {
      "id": 1,
      "nombre": "Grupo Monte Nuevo",
      "codigo": "G-104",
      "estado": "Pendiente",
      "comentario": "Solicitud en evaluación"
    },
    {
      "id": 2,
      "nombre": "Grupo Las Acacias",
      "codigo": "G-105",
      "estado": "Aprobada",
      "comentario": "Alta autorizada"
    }
  ],
  "accesos": [
    {
      "id": 1,
      "usuario": "coordinacion@educarama.local",
      "id_grupo": 1,
      "rol": "Jefe de grupo"
    },
    {
      "id": 2,
      "usuario": "educador@educarama.local",
      "id_grupo": 2,
      "rol": "Educador"
    },
    {
      "id": 3,
      "usuario": "grupo@educarama.local",
      "id_grupo": 3,
      "rol": "Colaborador"
    }
  ]
};
