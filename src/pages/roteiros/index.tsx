import Article from "../../components/Article";
import Header from "../../components/Header/Header";
import Layout from "../../components/layout";
import imagem4 from '../../../public/images/article/imagem4.png'
import TituloRoteiros from "../../components/Roteiros/Titulo";

const Roteiros  = () =>{
    return(
        <Layout title="Jornada Brasil - Roteiros">
           <Article imagem={imagem4.src} title={"Roteiros"}/>
           <TituloRoteiros title="Em Alta" />
           
            
        </Layout>
    )

}
export default Roteiros;