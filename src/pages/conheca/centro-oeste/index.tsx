import Layout from "../../../components/layout";
import CapaRegioes from "../../../components/Regioes/CapaRegioes";
import BannerCentroOeste from "../../../../public/images/CentroOeste/banner.jpg";


const CentroOeste  = () =>{
    return(
        <Layout title="Jornada Brasil - Centro-Oeste">
            <CapaRegioes imagem={BannerCentroOeste.src} />
            <h1> Conheça o Centro-Oeste do Brasil</h1>
        </Layout>
  )
    
}
export default CentroOeste;