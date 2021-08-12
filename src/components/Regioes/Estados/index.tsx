import React from "react";
import styles from "./styles.module.scss"

const Estados  = ({ imagem , title }:{imagem:string, title:string}) =>{
    return(
        <div className={styles.Estados} style={{
            backgroundImage: `linear-gradient(#00000051, #00000066), url(${imagem})`,
          }}>
              <h3>{title}</h3>
        </div>
    )


}
export default Estados;