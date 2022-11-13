import React from 'react'
import styles from './populares.module.scss'
import fotosPopulares from './fotosPopulares.json'

export default function Populares() {
  return (
    <aside className={styles.populares}>
        <h2 >Populares</h2>
        <ul className={styles.populares__imagens}>{fotosPopulares.map(foto =>{
            return (
                <li><img src={foto.path} alt="" /></li>
            )
        })}</ul>
        <button>Ver mais</button>
    </aside>
  )
}

