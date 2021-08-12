import React from "react"
import Layout from "../../../components/layout";
import CapaRegioes from "../../../components/Regioes/CapaRegioes";


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


const Nordeste  = () =>{
    return(
        <Layout title="Jornada Brasil - Nordeste">
            <CapaRegioes imagem={Banner.src} height="250" />
            <InfoRegioes 
            imagem={Perfil.src} 
            titulo="Conheça os encantos do Nordeste" 
            text="
            Cultura representa uma complexa teia.
             Nela estão incluídos conhecimentos,
              costumes, artes, crenças, cultos religiosos,
               literatura popular, danças e hábitos 
               de determinado grupo e isso o Nordeste 
               tem de sobra!"
            />

            <CapaRegioes imagem={Regiao1.src} height="350" />  
            <TitleSection titulo="Sobre a Região"  /> 
            <ArticleRegioes 
                text="Existe uma ideia a respeito do Nordeste que
                 se baseia em dois extremos: Litoral com praias 
                 exuberantes e interior secas severas. Acontece que 
                 mesmo sendo duas realidades presentes na região o 
                 Nordeste vai muito além disso. Há nuancias em sua 
                 vegetação, relevos, costumes e características.
                 Quanto mais se explora mais se entende que se tratam 
                 de micro regiões, cada uma com suas influências e 
                 importâncias."
                imagem={Regiao2.src}   
            />  
            <CapaRegioes imagem={Culinaria.src} height="350" /> 
            <TitleSection titulo="Culinária"  /> 
            <ArticleRegioes 
                text="A culinária nordestina foi desenvolvida sob a influência da comida portuguesa, africana e indígena.
                O consumo de raízes, o preparo de comidas bem temperadas e apimentadas, as comidas de milho e coco, o cuscuz, a pamonha e a canjica são heranças que foram adaptadas em cada estado.
                São exemplos de raízes: macaxeira, inhame, batata doce. Quanto às comidas bem temperadas podemos citar: acarajé, vatapá, bobó de camarão, moqueca de peixe, sururu."
                imagem={Culinaria2.src}   
            /> 
            <CapaRegioes imagem={Cultura.src} height="350" /> 
            <TitleSection titulo="Cultura"  /> 
            <ArticleRegioes 
                text="A cultura do Nordeste brasileiro desenvolveu hábitos próprios com relação ao mundo e às manifestações culturais, sendo as que mais se destacam na região: festas juninas, Reisado, poesia popular, artesanato, capoeira, frevo, culinária e religiões afro-brasileiras."
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
export default Nordeste;