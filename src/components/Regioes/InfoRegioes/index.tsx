import Image from 'next/image';
import React from 'react';
import styles from './styles.module.scss'

const ImageInfoRegioes =  ({ imagem }:{imagem:string}) =>{
  
    return(
        <div className={styles.ImageInfoRegioes}   style={{
            backgroundImage: `linear-gradient(#00000051, #00000066), url(${imagem})`,
          }} >
              {/* <Image className={styles.ImageInfoRegioes} src={imagem as any} alt={titulo} layout='fill' /> */}
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
const InfoRegioesMobile = ({  titulo, text, imagem }:{ titulo:string, text:string, imagem:string}) =>{
        return(
            <div className={styles.InfoRegioesMObile}>
                <h2>{titulo}</h2>
                <div className={styles.ImageInfoRegioesMobile}   style={{backgroundImage: `linear-gradient(#00000051, #00000066), url(${imagem})`,}} >
                </div>
                <p>{text}</p>
            </div>
        )
    };
const InfoRegioes = ({ imagem, titulo, text }:{imagem:string, titulo:string, text:string,}) =>{
    return(
        <>
        <div className={styles.InfoRegioes}>
            <ImageInfoRegioes imagem={imagem}/*  titulo={titulo} *//>
            <TextInfoRegioes titulo={titulo} text={text} />


        </div>
        <div className={styles.InfoRegioesMobile}>
            <InfoRegioesMobile titulo={titulo} imagem={imagem} text={text} />
            
        </div>
        </>
    )
    };
export default InfoRegioes;