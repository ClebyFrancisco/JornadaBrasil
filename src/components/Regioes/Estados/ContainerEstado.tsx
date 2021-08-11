import React from "react";
import styles from "./styles.module.scss"

const ContainerEstado  = ({children}: {children: any}) =>{
    return(
        <div  className={styles.ContainerEstado}>
            {children}

        </div>
        
    )


}
export default ContainerEstado;