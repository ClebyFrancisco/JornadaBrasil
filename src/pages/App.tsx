import React from "react";
import { Container } from "@material-ui/core";
import Header from "../ui/components/Header/Header";
import '../ui/styles/global.css'
import CarouselContainer from '../ui/components/BannerCarrousel/CarouselContainer';

function App() {
  return (
    <>
      <Header />
      <CarouselContainer />
      <Container>
        <h1> Olá, tá funcionando!</h1>
      </Container>
    </>
  );
}

export default App;
