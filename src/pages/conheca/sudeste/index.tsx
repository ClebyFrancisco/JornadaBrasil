import React from "react"
import Layout from "../../../components/layout";
import CapaRegioes from "../../../components/Regioes/CapaRegioes";
import styles from "../../../styles/Regiao.module.scss";


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

const Sudeste  = () =>{
    return(
        <Layout title="Jornada Brasil - Sudeste">
            <CapaRegioes imagem={Banner.src} height="250" />
            <InfoRegioes 
            imagem={Perfil.src} 
            titulo="Conheça os encantos do Sudeste" 
            text="
            O cartão postal do Brasil mas muito esteriotipado como apenas duas cidades. O sudeste expoe e esconde paisagens riquíssimas e uma grande mistura de culturas, visto que recebeu e recebe todo o tipo de imigrantes, abraçando e incorporando suas culturas.
            "
            />

            <div className={styles.CapaRegioes}>
                <CapaRegioes imagem={Regiao1.src} height="350" />
            </div>
            <div className={styles.CapaRegioesMobile}>
                <CapaRegioes imagem={Regiao1.src} height="250" />
            </div>
              
            <TitleSection titulo="Sobre a Região"  /> 
            <ArticleRegioes 
                text="Com a forte migração ocorrida para o Sudeste nos séculos passados, as manifestações culturais presentes nessa região possuem influência indígena, negra e europeia, além da influência asiática. Hisória cultural riquíssima e com muitas oportunidades de programação, desde a mais histórica a mais tecnológica e atual.
                "
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
                text="Sendo o berço da mundialmente conhecida: Feijoada, a região também oferece uma rica variedade de queijos, pizzas (dado o fato de uma de suas cidades ser a segunda no mundo em consumo de pizza), moquecas e todo tipo de pratos com peixe. A gastronomia da região sudeste é bastante rica. Além dos pratos acima, ainda encontramos: Angu, Bolinho de bacalhau, Bolo de fubá, Feijão tropeiro, Pirão, Virado à paulista, Tutu de feijão...
                "
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
                text="Sendo considerada a região brasileira mais desenvolvida econômica e industrialmente, já é possível imaginar o quão urbanizado é esse território.
                O congado de Minas, reveillon do Rio, carnaval de São Paulo, bandas de congo no Espírito Santo, são alguns dos marcos dessa região.
                "
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
export default Sudeste;