import Head from 'next/head'
import Article from '../components/Article'
import Header from '../components/Header/Header'
import Banner from '../components/Home/Banner'
import Layout from '../components/layout'
import styles from '../styles/Home.module.scss';
import imagem1 from '../../public/images/article/imagem1.jpg';
import imagem2 from '../../public/images/article/imagem2.png'
import Nav from '../components/Home/Nav';
import mapaBrasil from '../../public/images/mapaBrasil.png';

export default function Home() {
  return (
    <Layout title="Jornada Brasil - Home">
      <Banner />
      <Article imagem={imagem1.src} title={"QUAL O DESTINO DOS SEUS SONHOS?"}/>
      <Nav /> 
      <div className={styles.mapaBrasil}>
        
      </div>
      <Article imagem={imagem2.src} title={"conheça +"}/>
      
      <h1> welcome Home</h1>
    </Layout>
  )
}
