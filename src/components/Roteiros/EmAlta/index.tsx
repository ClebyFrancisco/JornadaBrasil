import React from "react";
import styles from "./styles.module.scss"
import CardImage from "./CardImage";
import ImagemRoteiros1 from "../../../../public/images/roteiros/ImagemRoteiros1.jpeg";
import ImagemRoteiros2 from "../../../../public/images/roteiros/ImagemRoteiros2.jpg";

const EmAlta = () =>{
    return(
        <div className={styles.EmAlta}>

            
              <CardImage 
                title="Pontal do Atalaia" 
                imagem={ImagemRoteiros1.src}
                local="Rio de Janeiro" />
           
            <CardImage 
                title="Serra de são Bento" 
                imagem={ImagemRoteiros2.src}
                local="Rio Grande do Norte" />
        </div>
    )
    
}
export default EmAlta;
