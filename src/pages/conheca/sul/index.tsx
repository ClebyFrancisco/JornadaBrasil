import React from "react"
import Layout from "../../../components/layout";
import CapaRegioes from "../../../components/Regioes/CapaRegioes";


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

const Sul  = () =>{
    return(
        <Layout title="Jornada Brasil - Sul">
            <CapaRegioes imagem={Banner.src} height="250" />
            <InfoRegioes 
            imagem={Perfil.src} 
            titulo="Conheça os encantos do Sul do Brasil" 
            text="
            Essa região apresenta elementos culturais dos índios (primeiros ocupantes do território), espanhóis e portugueses (colonizadores), negros (escravos). Posteriormente, os imigrantes alemães, italianos, açorianos, eslavos, japoneses, entre outros, contribuíram para a diversidade cultural do Sul do Brasil.
            Aqui nos aproximamos um pouco mais da europa sem perder a nossa brasilidade.
            "
            />

            <CapaRegioes imagem={Regiao1.src} height="350" />  
            <TitleSection titulo="Sobre a Região"  /> 
            <ArticleRegioes 
                text="Arquitetura tipicamente europeia, além da arquitetura, os imigrantes do velho continente contribuíram na cultura, sendo os Alemães, Holandeses, Espanhóis, Italianos, dentre outros, os grandes responsáveis por isso. Florestas de pinheiros que vemos nos filmes, clima frio com geadas e com uma ótima infraestrutura, esse o Sul.
                "
                imagem={Regiao2.src}   
            />  
            <CapaRegioes imagem={Culinaria.src} height="350" /> 
            <TitleSection titulo="Culinária"  /> 
            <ArticleRegioes 
                text="Você vai encontrar muita carne por aqui. A Região Sul possui uma culinária repleta de pratos quentes para harmonizar com o clima frio e que, como em outras regiões do Brasil, agrega referências de muitas culturas. Tanto os povos indígenas quanto os colonizadores europeus e os escravos africanos marcaram fortemente os hábitos alimentares dos estados do Sul do País, e é por isso que Paraná, Santa Catarina e Rio Grande do Sul têm pratos tão característicos.
                "
                imagem={Culinaria2.src}   
            /> 
            <CapaRegioes imagem={Cultura.src} height="350" /> 
            <TitleSection titulo="Cultura"  /> 
            <ArticleRegioes 
                text="O Sul do Brasil dissemina sua cultura remetendo ao nativismo, ao regionalismo e ao folclore. Há festas típicas de lá que vem de suas influencias europeias, algumas fortemente tradicionais e mantendo suas raízes, outras que se adaptaram ao longo dos anos e criaram seu próprio jeitinho Brasileiro.
                "
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
export default Sul;