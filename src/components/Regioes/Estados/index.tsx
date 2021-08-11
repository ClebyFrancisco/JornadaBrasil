import React from "react";
import styles from "./styles.module.scss"

const Estados  = ({imagem}:{ imagem:string}) =>{
    return(
        <div className={styles.Estados} style={{
            backgroundImage: `linear-gradient(#00000051, #00000066), url(${imagem})`,
          }}>
        </div>
    )


}
export default Estados;