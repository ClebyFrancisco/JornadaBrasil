import React from "react"
import Layout from "../../../components/layout";
import CapaRegioes from "../../../components/Regioes/CapaRegioes";
import styles from "../../../styles/Regiao.module.scss";
import axios from "axios";


import Banner from "../../../../public/images/Nordeste/banner.jpg";
import Perfil from "../../../../public/images/Nordeste/perfil.jpg";
import Regiao1 from "../../../../public/images/Nordeste/regiao1.jpg";
import Regiao2 from "../../../../public/images/Nordeste/regiao2.jpg";
import Culinaria from "../../../../public/images/Nordeste/culinaria.jpg";
import Culinaria2 from "../../../../public/images/Nordeste/culinaria2.jpg";
import Cultura from "../../../../public/images/Nordeste/cultura.jpg";
import Cultura2 from "../../../../public/images/Nordeste/cultura2.jpg";


import Maranhao from "../../../../public/images/estados/maranhao.png";
import Piaui from "../../../../public/images/estados/piaui.png";
import Ceara from "../../../../public/images/estados/ceara.png";
import Rgn from "../../../../public/images/estados/riograndedonorte.png";
import Pernambuco from "../../../../public/images/estados/pernambuco.jpg";
import Paraiba from "../../../../public/images/estados/paraiba.png";
import Sergipe from "../../../../public/images/estados/sergipe.png";
import Alagoas from "../../../../public/images/estados/alagoas.png";
import Bahia from "../../../../public/images/estados/bahia.png";

import InfoRegioes from "../../../components/Regioes/InfoRegioes";
import TitleSection from "../../../components/Regioes/TitleSection";
import ArticleRegioes from "../../../components/Regioes/ArticleRegioes";
import Article from "../../../components/Article";
import ContainerEstado from "../../../components/Regioes/Estados/ContainerEstado";
import Estados from "../../../components/Regioes/Estados";


const Nordeste  = ({dados}:{dados:any}) =>{
    return(
        <Layout title="Jornada Brasil - Nordeste">
            <CapaRegioes imagem={Banner.src} height="250" />
            <InfoRegioes 
            imagem={Perfil.src} 
            titulo="Conheça os encantos do Nordeste" 
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
                 <Estados imagem={Alagoas.src} title="Alagoas"/>
                 <Estados imagem={Bahia.src} title="Bahia"/>
                 <Estados imagem={Ceara.src} title="Ceará"/>
                 <Estados imagem={Maranhao.src} title="Maranhão"/>
                 <Estados imagem={Paraiba.src} title="Paraíba"/>
                 <Estados imagem={Piaui.src} title="Piauí"/>
                 <Estados imagem={Sergipe.src} title="Sergipe"/>
                 <Estados imagem={Rgn.src} title="Rio Grande do Norte"/>
                 <Estados imagem={Pernambuco.src} title="Pernambuco"/>
             </ContainerEstado>
            
        </Layout>
  ) 
}

Nordeste.getInitialProps = async function ({dados}:{dados:any}) {
    const response = await axios.get(
        'https://jornadabrasil.herokuapp.com/regiao/Nordeste'
    )

    return { dados: response.data }
}

export default Nordeste;