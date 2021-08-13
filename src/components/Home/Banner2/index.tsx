import Image from "next/image";
import React from "react";
import styles from "./styles.module.scss";
import imagem1 from '../../../../public/images/ImgBanner/Banner1.jpg';


const Banner2 = ()=>{
    return(
        <div className={styles.banner}>
            <Image className={styles.ImagemBanner} src={imagem1} alt="banner" layout="fill" /></div>
        

    )
}
export default Banner2;