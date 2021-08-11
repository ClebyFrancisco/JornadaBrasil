import React from 'react';
import styles from './styles.module.scss'

const CapaRegioes =  ({ imagem, height }:{imagem:string, height:string}) =>{
    return(
        <div className={styles.CapaRegioes} style={{
            backgroundImage: `linear-gradient(#00000051, #00000066), url(${imagem})`,
            height: `${height}px`,
          }}>
        </div>
    )
}
export default CapaRegioes;