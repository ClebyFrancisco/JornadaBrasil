import Layout from "../../../components/layout";
import CapaRegioes from "../../../components/Regioes/CapaRegioes";

import BannerNorte from "../../../../public/images/Norte/banner.jpg";
import PerfilNorte from "../../../../public/images/Norte/perfil.jpg";

import InfoRegioes from "../../../components/Regioes/InfoRegioes";


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
            
        </Layout>
  )
    
}
export default Norte;