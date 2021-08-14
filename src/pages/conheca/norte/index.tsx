import Layout from "../../../components/layout";
import CapaRegioes from "../../../components/Regioes/CapaRegioes";
import styles from "../../../styles/Regiao.module.scss";

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


const Norte  = () =>{
    return(
        <Layout title="Jornada Brasil - Norte">
            <CapaRegioes imagem={BannerNorte.src} height="250" />
             <InfoRegioes 
            imagem={PerfilNorte.src} 
            titulo="Conheça os encantos do Norte" 
            text="
            Por ser uma região pouco habitada e de ocupação mais tardia,
            o ecossistema da região Norte do Brasil encontra-se preservado, 
            o que propicia as atividades de ecoturismo.
            Como parte do recente planejamento 
            de desenvolvimento sustentável, a 
            exploração do turismo cresce a cada dia 
            com mais infra-estrutura para os turistas."
            />
            
            <div className={styles.CapaRegioes}>
                <CapaRegioes imagem={Regiao1Norte.src} height="350" />
            </div>
            <div className={styles.CapaRegioesMobile}>
                <CapaRegioes imagem={Regiao1Norte.src} height="250" />
            </div>
              
            <TitleSection titulo="Sobre a Região"  /> 
            <ArticleRegioes 
                text="A Região Norte tem uma cultura muito rica,
                 influenciada fortemente pelas tribos indígenas 
                 do Brasil, guarda muita história e é berço das 
                 maiores riquezas naturais do nosso país.
                É uma região pouco explorada, tanto por turistas 
                de fora como de dentro do Brasil. Tem se uma ideia 
                de que a região é “apenas floresta”, desconsiderando
                 a cultura e toda a infraestrutura construída a partir 
                 de uma vida em conjunto com o meio."
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
                text="Além das belas paisagens e passeios turísticos
                 recheados de história, uma viagem à região Norte
                  possibilita conhecer, também, a deliciosa culinária 
                  típica. Com grande influência em sua cultura pelos 
                  indígenas, os pratos são, em sua maioria, compostos 
                  por peixes, frutas e ervas para temperos, como por 
                  exemplo: Pato no tucupi, Gurijuba, Caruru, Tacacá..."
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
                text="Por ser uma região com uma população bastante 
                miscigenada, o Norte possui grande diversidade de 
                manifestações culturais, os seja, de costumes, crenças,
                 festas populares, culinária, danças, e etc.As festividades
                 do norte do Brasil são fortemente influenciadas pela cultura
                  indígena, assim como a religiosidade cristã."
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
export default Norte;