import Layout from "../../../components/layout";
import CapaRegioes from "../../../components/Regioes/CapaRegioes";
import BannerSul from "../../../../public/images/Sul/banner.jpg";


const Sul  = () =>{
    return(
        <Layout title="Jornada Brasil - Sul">
            <CapaRegioes imagem={BannerSul.src} />
            <h1> Conheça o sul do Brasil</h1>
        </Layout>
  )
    
}
export default Sul;