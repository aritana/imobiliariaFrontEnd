import React from "react";
import casa from "../../assets/casa.jpg";
import Header from "../../components/Header";
import Grid from "@material-ui/core/Grid";
import { RiCommunityFill } from "react-icons/ri";
import HeaderListProperties from "../../components/Header/ListProperties";

const Home = (props: { history: string[] }) => {
  const nome = JSON.parse(localStorage.getItem("@userData") || "").name;
  const stringNome = nome === "" ? "" : `, ${nome}`;
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={3}
    >
      <Header
        Component={HeaderListProperties}
        componentProps={{ history: props.history }}
      />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
        className="form-content"
      >
        <Grid item>
          <img src={casa} alt="casa"></img>
        </Grid>
        <Grid item className="form-description">
          <RiCommunityFill size={150} className="icon"></RiCommunityFill>
          <h2>{`Olá, bem vindo(a)${stringNome}!`}</h2>
          <p>{`Anuncie ou encontre seu imóvel aqui`}</p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
