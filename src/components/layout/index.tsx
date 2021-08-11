import React, { FC } from "react";
import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Footer";


const Layout: React.FC<{title:string}>  = ({ children, title}) =>{
  return (
    <>
     <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="UTF-8" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossOrigin="anonymous" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossOrigin="anonymous"></script>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
      <link href="https://fonts.googleapis.com/css2?family=Contrail+One&display=swap" rel="stylesheet" />

      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous" />
    </Head>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */} 
    </>
  )
}
export default Layout;



















/*function Layout({ children, title }){
    <>
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Idealizada por Fábio Luis Vicente Tancredo, a Cesta Solidária é um projeto que busca oferecer alimentação natural, variada e de qualidade aos mantenedores (compradores das cestas) por um valor acessível."
      />
      <meta charSet="UTF-8" />
      <meta
        name="keywords"
        content="Vegano, Vegetal, Cesta Saudável, Saudável, Cesta Orgânica, Orgânico"
      />
      <meta name="author" content="Prajit Deva" />
    </Head>
    <div>
      <Header />
      {children}
    
    </div>
  </>

export default Layout;*/