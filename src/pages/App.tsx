import React from "react";
import Head from 'next/head';
/* import Header from "../ui/components/Header/Header"; */
import { Container } from "@material-ui/core";
import Header from "../ui/components/Header/Header";
import '../ui/styles/global.css'

function App() {
  return (
    <>
      <Head>
        <title>Jornada Brasil</title>
      </Head>
      <Header />
      <Container>
        <h1> Olá, tá funcionando!</h1>
      </Container>
    </>
  );
}

export default App;
