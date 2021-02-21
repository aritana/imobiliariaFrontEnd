import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
} from "react-router-dom";

import Usuarios from "./components/Usuarios/Usuarios";
import AdicionarUsuario from "./components/AdicionarUsuario/AdicionarUsuario";
import DetalhesUsuario from "./components/DetalhesUsuario/DetalhesUsuario";
import Home from "./components/Home/Home";
import CadastrarImovel from "./components/CadastrarImovel/CadastrarImovel";
import AgendarVisita from "./components/AgendarVisita/AgendarVisita";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact>
                  Início
                </NavLink>
              </li>
              <li>
                <NavLink to="/adicionar">Cadastrar Usuário</NavLink>
              </li>
              <li>
                <NavLink to="/cadastrar-imovel">Cadastrar Imóvel</NavLink>
              </li>
              <li>
                <NavLink to="/usuarios">Pesquisar Locatário</NavLink>
              </li>
              <li>
                <NavLink to="/agendar">Agendar Visita</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/adicionar">
              <AdicionarUsuario />
            </Route>
            <Route path="/cadastrar-imovel">
              <CadastrarImovel />
            </Route>
            <Route path="/usuarios/:id">
              <DetalhesUsuario />
            </Route>
            <Route path="/usuarios">
              <Usuarios />
            </Route>
            <Route path="/agendar">
              <AgendarVisita />
            </Route>
            <Route path="*">
              <h1>404</h1>
              <p>Página não encontrada!</p>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
