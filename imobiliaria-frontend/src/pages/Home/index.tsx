import React from "react";
import logo from "../../assets/logotipo.png";
import Header from "../../components/Header";
import HeaderListProperties from "../../components/Header/ListProperties";

const PropertieCreate = (props: { history: string[] }) => {
  const nome = localStorage.getItem("email");
  return (
    <div className="container">
      <Header
        Component={HeaderListProperties}
        componentProps={{ history: props.history }}
      />
      <img src={logo} alt="developer" className="icon"></img>
      <h1>{`Olá, bem vindo(a), ${nome}!`}</h1>
      <h3>{`Anuncie ou encontre seu imóvel aqui`}</h3>
    </div>
  );
};

export default PropertieCreate;
