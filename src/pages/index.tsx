import Head from 'next/head'
import Header from '../components/Header/Header'
import Banner from '../components/Home/Banner'
import Layout from '../components/layout'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <Layout title="Jornada Brasil - Home">
      <Banner1 />
      <h1> welcome Home</h1>
    </Layout>
  )
}
