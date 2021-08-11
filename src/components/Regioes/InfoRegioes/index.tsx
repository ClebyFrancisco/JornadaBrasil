import React from 'react';
import styles from './styles.module.scss'

const ImageInfoRegioes =  ({ imagem }:{imagem:string}) =>{
    return(
        <div className={styles.ImageInfoRegioes} style={{
            backgroundImage: `linear-gradient(#00000051, #00000066), url(${imagem})`,
          }}>
        </div>
    )
}
const TextInfoRegioes = ({  titulo, text }:{ titulo:string, text:string,}) =>{
        return(
            <div className={styles.TextInfoRegioes}>
                <h2>{titulo}</h2>
                <p>{text}</p>
            </div>
        )
    };
const InfoRegioes = ({ imagem, titulo, text }:{imagem:string, titulo:string, text:string,}) =>{
    return(
        <div className={styles.InfoRegioes}>
            <ImageInfoRegioes imagem={imagem} />
            <TextInfoRegioes titulo={titulo} text={text} />


        </div>
    )
    };
export default InfoRegioes;