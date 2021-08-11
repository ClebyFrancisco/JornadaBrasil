import React from "react";
import styles from "./styles.module.scss";

const TitleSection = ({titulo}:{titulo:string}) =>{
    return(
        <div className={styles.TitleSection}>
            <h2>{titulo}</h2>
        </div>
    )
}
export default TitleSection;