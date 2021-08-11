import Layout from "../../../components/layout";
import CapaRegioes from "../../../components/Regioes/CapaRegioes";
import BannerNorte from "../../../../public/images/Norte/banner.jpg"


const Norte  = () =>{
    return(
        <Layout title="Jornada Brasil - Norte">
            <CapaRegioes imagem={BannerNorte.src} />
            <h1> Conheça o Norte do Brasil</h1>
        </Layout>
  )
    
}
export default Norte;