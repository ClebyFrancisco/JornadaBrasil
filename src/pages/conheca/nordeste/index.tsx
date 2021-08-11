import Layout from "../../../components/layout";
import CapaRegioes from "../../../components/Regioes/CapaRegioes";
import BannerNordeste from "../../../../public/images/Nordeste/banner.jpg";


const Nordeste  = () =>{
    return(
        <Layout title="Jornada Brasil - Nordeste">
            <CapaRegioes imagem={BannerNordeste.src} />
            <h1> Conheça o Nordeste do Brasil</h1>
        </Layout>
  )
    
}
export default Nordeste;