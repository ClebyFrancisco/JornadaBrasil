import React from "react";
import CapaRegioes from "../CapaRegioes";
import styles from "./styles.module.scss";

const ImageCard = ({imagem}:{ imagem:string}) =>{
    return(
        <div className={styles.cardImagem} style={{
            backgroundImage: `linear-gradient(#00000051, #00000066), url(${imagem})`,
          }}>
        </div>
    )


}

const ArticleRegioes = ({text, imagem}:{text:string, imagem:string}) =>{
    return(
        <div className={styles.ArticleRegioes}>
            <div className={styles.TextArticleRegioes}>
                <p>{text}</p>
            </div>
            <div className={styles.ImageArticleRegioes}>
            <ImageCard imagem={imagem} /> 
            </div>
        </div>
    )
}
export default ArticleRegioes;