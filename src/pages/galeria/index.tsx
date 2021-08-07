import React from "react";
import Layout from "../../components/layout";
import imagem4 from '../../../public/images/article/imagem4.png'
import Article from "../../components/Article";


const Sobre  = () =>{
    return(
        <Layout title="Jornada Brasil - Conheça +">
            <Article imagem={imagem4.src} title={"Galeria"}/> 
            
        </Layout>
  )
    
}
export default Sobre;