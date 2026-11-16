import React from 'react';
import {useLocalSearchParams} from 'expo-router';
import {Listado} from '../../src/components/Listado';
import {tipos,Tipo} from '../../src/data/modelos';
import {Pantalla,Parrafo} from '../../src/components/Elementos';
export default function Catalogo(){const {tipo}=useLocalSearchParams<{tipo:string}>();return tipos.includes(tipo as Tipo)?<Listado tipo={tipo as Tipo}/>:<Pantalla><Parrafo>Sección inexistente.</Parrafo></Pantalla>}
