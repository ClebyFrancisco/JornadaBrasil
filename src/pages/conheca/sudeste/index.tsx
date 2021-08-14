import React from "react"
import Layout from "../../../components/layout";
import CapaRegioes from "../../../components/Regioes/CapaRegioes";
import styles from "../../../styles/Regiao.module.scss";
import axios from "axios";


import Banner from "../../../../public/images/Sudeste/banner.jpg";
import Perfil from "../../../../public/images/Sudeste/perfil.jpg";
import Regiao1 from "../../../../public/images/Sudeste/regiao1.jpg";
import Regiao2 from "../../../../public/images/Sudeste/regiao2.jpg";
import Culinaria from "../../../../public/images/Sudeste/culinaria.jpg";
import Culinaria2 from "../../../../public/images/Sudeste/culinaria2.jpg";
import Cultura from "../../../../public/images/Sudeste/cultura.jpeg";
import Cultura2 from "../../../../public/images/Sudeste/cultura2.jpg";


import SaoPaulo from "../../../../public/images/estados/saopaulo.png";
import RioDeJaneiro from "../../../../public/images/estados/riodejaneiro.png";
import EspiritoSanto from "../../../../public/images/estados/espiritosanto.png";
import MinasGerais from "../../../../public/images/estados/minasgerais.png";



import InfoRegioes from "../../../components/Regioes/InfoRegioes";
import TitleSection from "../../../components/Regioes/TitleSection";
import ArticleRegioes from "../../../components/Regioes/ArticleRegioes";
import Article from "../../../components/Article";
import ContainerEstado from "../../../components/Regioes/Estados/ContainerEstado";
import Estados from "../../../components/Regioes/Estados";

const Sudeste  = ({dados}:{dados:any}) =>{
    return(
        <Layout title="Jornada Brasil - Sudeste">
            <CapaRegioes imagem={Banner.src} height="250" />
            <InfoRegioes 
            imagem={Perfil.src} 
            titulo="Conheça os encantos do Sudeste" 
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
                 <Estados imagem={SaoPaulo.src} title="São Paulo"/>
                 <Estados imagem={RioDeJaneiro.src} title="Rio de Janeiro"/>
                 <Estados imagem={EspiritoSanto.src} title="Espírito Santo"/>
                 <Estados imagem={MinasGerais.src} title="Minas Gerais"/>
               
             </ContainerEstado>
            
        </Layout>
  )
    
}

Sudeste.getInitialProps = async function ({dados}:{dados:any}) {
    const response = await axios.get(
        'https://jornadabrasil.herokuapp.com/regiao/Sudeste'
    )

    return { dados: response.data }
}

export default Sudeste;