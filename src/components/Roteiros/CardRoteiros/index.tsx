import React from "react";
import styles from "./styles.module.scss";

const CardImage = ({ imagem }:{imagem:string}) =>{
    return(
        <div className={styles.cardImagem} style={{
            backgroundImage: `linear-gradient(#00000051, #00000066), url(${imagem})`,
          }}>
        </div>
    )

}
const CardLocal = ({ local }:{local:string}) =>{
    return(
        <div className={styles.CardLocal}>
            <h2>{local}</h2>
        </div>
    )

}
const CardRoteiros = ({ imagem, local }:{imagem:string, local:string}) =>{
    return(
        <div className={styles.CardRoteiros}>
            <CardImage imagem={imagem} />
            <CardLocal local={local} />
        </div>
    )

}
export default CardRoteiros;


