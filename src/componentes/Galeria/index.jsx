import React from 'react'
import Tags from '../tags'
import styles from './galeria.module.scss'
import fotos from './fotos.json'
import Cards from './Cards'
import { useState } from 'react'


export default function Galeria() {
  const [itens,setItens] = useState(fotos)
  
  const tags = [...new Set(fotos.map(foto => foto.tag))]

  const filtrarFotos = (tag)=> {
      const fotosFiltradas = fotos.filter(foto => foto.tag === tag)
      
      setItens(fotosFiltradas)
  }

  


  return (
    <div className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filtrarFotos={filtrarFotos} setItens={setItens}/>
      <Cards styles={styles} fotos={itens}/>
       
    </div>
  )
}
