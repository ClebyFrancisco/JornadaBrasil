import React from "react";
import styles from "./style.module.scss";
import Article from "../../components/Article";
import Header from "../../components/Header/Header";
import Layout from "../../components/layout";
import imagem4 from '../../../public/images/article/imagem4.png'
import TituloRoteiros from "../../components/Roteiros/Titulo";
import EmAlta from "../../components/Roteiros/EmAlta";
import CardRoteiros from "../../components/Roteiros/CardRoteiros";


import imagemRoteiros1 from '../../../public/images/roteiros/imagemRoteiros1.jpeg';
import imagemRoteiros2 from '../../../public/images/roteiros/imagemRoteiros2.jpg';
import imagemRoteiros3 from '../../../public/images/roteiros/imagemRoteiros3.jpg';
import imagemRoteiros4 from '../../../public/images/roteiros/imagemRoteiros4.jpg';
import imagemRoteiros5 from '../../../public/images/roteiros/imagemRoteiros5.png';
import imagemRoteiros6 from '../../../public/images/roteiros/imagemRoteiros6.jpg';
import imagemRoteiros7 from '../../../public/images/roteiros/imagemRoteiros7.jpeg';


const Roteiros  = () =>{
    return(
        <Layout title="Jornada Brasil - Roteiros">
           <Article imagem={imagem4.src} title={"Roteiros"}/>
           <TituloRoteiros title="Em Alta" />
           <EmAlta />
           <TituloRoteiros title="Guias" />
           <div className={styles.sectionRoteiros}>
            <CardRoteiros imagem={imagemRoteiros1.src} local="Praias de Arraial do Cabo - RJ" />
            <CardRoteiros imagem={imagemRoteiros4.src} local="Ilha do Mel - PR" />
            <CardRoteiros imagem={imagemRoteiros3.src} local="Cachoeiras de Bonito - MS" />
           </div>
           <TituloRoteiros title="Temáticos" />
           <div className={styles.sectionRoteiros}>
            <CardRoteiros imagem={imagemRoteiros6.src} local="Reflexo da Amazônia - AM" />
            <CardRoteiros imagem={imagemRoteiros2.src} local="Serra de São Bento - RN" />
            <CardRoteiros imagem={imagemRoteiros1.src} local="Praias de Arraial do Cabo - RJ" />
           </div>
           <TituloRoteiros title="Pernambuco" />
           <div className={styles.sectionRoteiros}>
            <CardRoteiros imagem={imagemRoteiros1.src} local="Uma volta em Jaboatão" />
            <CardRoteiros imagem={imagemRoteiros1.src} local="Litoral Sul de PE" />
            <CardRoteiros imagem={imagemRoteiros5.src} local="Recife a Pe" />
           </div>
           
           
           
           
            
        </Layout>
    )

}
export default Roteiros;