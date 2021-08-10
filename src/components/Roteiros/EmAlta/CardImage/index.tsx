import React from "react";
import styles from "./styles.module.scss";

const CardImage = ({ imagem , title, local }:{imagem:string, title:string, local:string}) =>{
    return(
        <div className={styles.emContainer} style={{
            backgroundImage: `linear-gradient(#00000051, #00000066), url(${imagem})`,
          }}>
            <h2>{title}</h2>
            <h3>{local}</h3>

        </div>
    )

}
export default CardImage;