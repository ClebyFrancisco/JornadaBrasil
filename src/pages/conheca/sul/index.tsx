import React from "react"
import Layout from "../../../components/layout";
import CapaRegioes from "../../../components/Regioes/CapaRegioes";
import styles from "../../../styles/Regiao.module.scss";
import axios from "axios";


import Banner from "../../../../public/images/Sul/banner.jpg";
import Perfil from "../../../../public/images/Sul/perfil.jpg";
import Regiao1 from "../../../../public/images/Sul/regiao1.jpg";
import Regiao2 from "../../../../public/images/Sul/regiao2.jpg";
import Culinaria from "../../../../public/images/Sul/culinaria.jpg";
import Culinaria2 from "../../../../public/images/Sul/culinaria2.jpg";
import Cultura from "../../../../public/images/Sul/cultura.jpg";
import Cultura2 from "../../../../public/images/Sul/cultura2.jpg";


import Parana from "../../../../public/images/estados/parana.png";
import RioGrandeDoSul from "../../../../public/images/estados/riograndedosul.png";
import SantaCatarina from "../../../../public/images/estados/santacatarina.png";




import InfoRegioes from "../../../components/Regioes/InfoRegioes";
import TitleSection from "../../../components/Regioes/TitleSection";
import ArticleRegioes from "../../../components/Regioes/ArticleRegioes";
import Article from "../../../components/Article";
import ContainerEstado from "../../../components/Regioes/Estados/ContainerEstado";
import Estados from "../../../components/Regioes/Estados";

const Sul  = ({dados}:{dados:any}) =>{
    return(
        <Layout title="Jornada Brasil - Sul">
            <CapaRegioes imagem={Banner.src} height="250" />
            <InfoRegioes 
            imagem={Perfil.src} 
            titulo="Conheça os encantos do Sul do Brasil" 
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
                 <Estados imagem={Parana.src} title="Paraná"/>
                 <Estados imagem={RioGrandeDoSul.src} title="Rio Grande do Sul"/>
                 <Estados imagem={SantaCatarina.src} title="Santa Catarina "/>
               
             </ContainerEstado>
            
        </Layout>
  )
}

Sul.getInitialProps = async function ({dados}:{dados:any}) {
    const response = await axios.get(
        'https://jornadabrasil.herokuapp.com/regiao/Sul'
    )

    return { dados: response.data }
}

export default Sul;