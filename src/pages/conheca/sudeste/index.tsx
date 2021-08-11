import Layout from "../../../components/layout";
import CapaRegioes from "../../../components/Regioes/CapaRegioes";
import BannerSudeste from "../../../../public/images/Sudeste/banner.jpg";


const Sudeste  = () =>{
    return(
        <Layout title="Jornada Brasil - Sudeste">
            <CapaRegioes imagem={BannerSudeste.src} height="250"/>
            <h1> Conheça o sudeste do Brasil</h1>
        </Layout>
  )
    
}
export default Sudeste;