import React, { FC } from "react";
import Head from "next/head";
import Header from "../Header/Header";


const Layout: React.FC<{title:string,  crossorigin:string}>  = ({ children, title}) =>{
  return (
    <>
     <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="UTF-8" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
    </Head>
      <Header />
      <main>{children}</main>
      
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