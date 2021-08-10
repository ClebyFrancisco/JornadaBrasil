import React from "react";
import styles from "./styles.module.scss";

const TituloRoteiros = ({title}:{title:string}) =>{
    return(
        <div className={styles.tituloDiv}>
        <h1 className={styles.titulo}>{title}</h1>

        </div>
    )
}
export default TituloRoteiros;