import React from "react"
import Layout from "../../../components/layout";
import CapaRegioes from "../../../components/Regioes/CapaRegioes";
import styles from "../../../styles/Regiao.module.scss";
import api from '../../../services/api'
import axios from "axios";

import Banner from "../../../../public/images/CentroOeste/banner.jpg";
import Perfil from "../../../../public/images/CentroOeste/perfil.jpg";
import Regiao1 from "../../../../public/images/CentroOeste/regiao1.jpg";
import Regiao2 from "../../../../public/images/CentroOeste/regiao2.jpg";
import Culinaria from "../../../../public/images/CentroOeste/culinaria.jpg";
import Culinaria2 from "../../../../public/images/CentroOeste/culinaria2.jpg";
import Cultura from "../../../../public/images/CentroOeste/cultura.jpg";
import Cultura2 from "../../../../public/images/CentroOeste/cultura2.jpg";


import Goias from "../../../../public/images/estados/goias.png";
import MatoGrosso from "../../../../public/images/estados/matogrosso.png";
import MatoGrossodoSul from "../../../../public/images/estados/matogrossodosul.png";
import DistritoFederal from "../../../../public/images/estados/df.png";



import InfoRegioes from "../../../components/Regioes/InfoRegioes";
import TitleSection from "../../../components/Regioes/TitleSection";
import ArticleRegioes from "../../../components/Regioes/ArticleRegioes";
import Article from "../../../components/Article";
import ContainerEstado from "../../../components/Regioes/Estados/ContainerEstado";
import Estados from "../../../components/Regioes/Estados";

const CentroOeste  = ({dados}:{dados:any}) => {
    return(
        <Layout title="Jornada Brasil - Centro-Oeste">
            <CapaRegioes imagem={Banner.src} height="250" />
            <InfoRegioes 
            imagem={Perfil.src} 
            titulo="Conheça os encantos do Centro-Oeste" 
            text={dados.map((artigo:any) => (
                <p key={artigo.conheca}>{artigo.conheca}</p>
            ))}
            />
            <div className={styles.CapaRegioes}>
                <CapaRegioes imagem={Regiao1.src} height="350" /> 
            </div>
            <div className={styles.CapaRegioesMobile}>
                <CapaRegioes imagem={Regiao1.src} height="250" /> 
            </div>
            <TitleSection titulo="Sobre a Região"  /> 
            <ArticleRegioes 
                text={dados.map((artigo:any) => (
                    <p key={artigo.desc_regiao}>{artigo.desc_regiao}</p>
                ))}
                imagem={Regiao2.src}   
            />
            <div className={styles.CapaRegioes}>
                <CapaRegioes imagem={Culinaria.src} height="350" /> 
            </div>
            <div className={styles.CapaRegioesMobile}>
                <CapaRegioes imagem={Culinaria.src} height="250" /> 
            </div>  
            <TitleSection titulo="Culinária"  /> 
            <ArticleRegioes 
                text={dados.map((artigo:any) => (
                    <p key={artigo.culinaria}>{artigo.culinaria}</p>
                ))}
                imagem={Culinaria2.src}   
            /> 
            <div className={styles.CapaRegioes}>
                <CapaRegioes imagem={Cultura.src} height="350" /> 
            </div>
            <div className={styles.CapaRegioesMobile}>
                <CapaRegioes imagem={Cultura.src} height="250" /> 
            </div> 
            <TitleSection titulo="Cultura"  /> 
            <ArticleRegioes 
                text={dados.map((artigo:any) => (
                    <p key={artigo.cultura}>{artigo.cultura}</p>
                ))}
                imagem={Cultura2.src}   
            /> 
             <Article imagem={Regiao1.src} title={"Estados"}/>
             <ContainerEstado>
                 <Estados imagem={Goias.src} title="Goias"/>
                 <Estados imagem={MatoGrosso.src} title="Mato Grosso"/>
                 <Estados imagem={MatoGrossodoSul.src} title="Mato Grosso do Sul"/>
                 <Estados imagem={DistritoFederal.src} title="Distrito Federal"/>
               
             </ContainerEstado>
        </Layout>
  )
}

CentroOeste.getInitialProps = async function ({dados}:{dados:any}) {
    const response = await axios.get(
        'https://jornadabrasil.herokuapp.com/regiao/centro-oeste'
    )

    return { dados: response.data }
}

export default CentroOeste;