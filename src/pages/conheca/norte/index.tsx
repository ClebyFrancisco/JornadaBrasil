import Layout from "../../../components/layout";
import CapaRegioes from "../../../components/Regioes/CapaRegioes";
import styles from "../../../styles/Regiao.module.scss";
import axios from "axios";

import BannerNorte from "../../../../public/images/Norte/banner.jpg";
import PerfilNorte from "../../../../public/images/Norte/perfil.jpg";
import Regiao1Norte from "../../../../public/images/Norte/regiao.jpg";
import Regiao2Norte from "../../../../public/images/Norte/regiao2.jpg";
import CulinariaNorte from "../../../../public/images/Norte/culinaria.jpg";
import Culinaria2Norte from "../../../../public/images/Norte/culinaria2.jpg";
import CulturaNorte from "../../../../public/images/Norte/cultura.jpg";
import Cultura2Norte from "../../../../public/images/Norte/cultura2.jpg";


import Acre from "../../../../public/images/estados/acre.png";
import Amapa from "../../../../public/images/estados/amapa.png";
import Amazonas from "../../../../public/images/estados/amazonas.png";
import Para from "../../../../public/images/estados/para.png";
import Roraima from "../../../../public/images/estados/roraima.png";
import Rondonia from "../../../../public/images/estados/rondonia.png";
import Tocantins from "../../../../public/images/estados/tocantins.png";

import InfoRegioes from "../../../components/Regioes/InfoRegioes";
import TitleSection from "../../../components/Regioes/TitleSection";
import ArticleRegioes from "../../../components/Regioes/ArticleRegioes";
import Article from "../../../components/Article";
import ContainerEstado from "../../../components/Regioes/Estados/ContainerEstado";
import Estados from "../../../components/Regioes/Estados";


const Norte  = ({dados}:{dados:any}) =>{
    return(
        <Layout title="Jornada Brasil - Norte">
            <CapaRegioes imagem={BannerNorte.src} height="250" />
             <InfoRegioes 
            imagem={PerfilNorte.src} 
            titulo="Conheça os encantos do Norte" 
            text={dados.map((artigo:any) => (
                <p key={artigo.conheca}>{artigo.conheca}</p>
            ))}
            />
            
            <div className={styles.CapaRegioes}>
                <CapaRegioes imagem={Regiao1Norte.src} height="350" />
            </div>
            <div className={styles.CapaRegioesMobile}>
                <CapaRegioes imagem={Regiao1Norte.src} height="250" />
            </div>
              
            <TitleSection titulo="Sobre a Região"  /> 
            <ArticleRegioes 
                text={dados.map((artigo:any) => (
                    <p key={artigo.desc_regiao}>{artigo.desc_regiao}</p>
                ))}
                imagem={Regiao2Norte.src}   
            /> 
            <div className={styles.CapaRegioes}>
                <CapaRegioes imagem={CulinariaNorte.src} height="350" />
            </div>
            <div className={styles.CapaRegioesMobile}>
                <CapaRegioes imagem={CulinariaNorte.src} height="250" />
            </div>
            
            <TitleSection titulo="Culinária"  /> 
            <ArticleRegioes 
                text={dados.map((artigo:any) => (
                    <p key={artigo.culinaria}>{artigo.culinaria}</p>
                ))}
                imagem={Culinaria2Norte.src}   
            />
            <div className={styles.CapaRegioes}>
                <CapaRegioes imagem={CulturaNorte.src} height="350" />
            </div>
            <div className={styles.CapaRegioesMobile}>
                <CapaRegioes imagem={CulturaNorte.src} height="250" />
            </div>
            <TitleSection titulo="Cultura"  /> 
            <ArticleRegioes 
                text={dados.map((artigo:any) => (
                    <p key={artigo.cultura}>{artigo.cultura}</p>
                ))}
                imagem={Cultura2Norte.src}   
            /> 
             <Article imagem={Regiao1Norte.src} title={"Estados"}/>
             <ContainerEstado>
                 <Estados imagem={Acre.src} title="Acre"/>
                 <Estados imagem={Amapa.src} title="Amapa"/>
                 <Estados imagem={Amazonas.src} title="Amazonas" />
                 <Estados imagem={Para.src} title="Para" />
                 <Estados imagem={Roraima.src} title="Roraima"/>
                 <Estados imagem={Rondonia.src} title="Rondonia"/>
                 <Estados imagem={Tocantins.src} title="Tocantins"/>
                 
                 
             </ContainerEstado>
            
        </Layout>
  )
    
}

Norte.getInitialProps = async function ({dados}:{dados:any}) {
    const response = await axios.get(
        'https://jornadabrasil.herokuapp.com/regiao/Norte'
    )

    return { dados: response.data }
}

export default Norte;