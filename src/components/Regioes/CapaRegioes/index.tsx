import React from 'react';
import styles from './styles.module.scss'

const CapaRegioes =  ({ imagem }:{imagem:string}) =>{
    return(
        <div className={styles.CapaRegioes} style={{
            backgroundImage: `linear-gradient(#00000051, #00000066), url(${imagem})`,
          }}>
        </div>
    )
}
export default CapaRegioes;