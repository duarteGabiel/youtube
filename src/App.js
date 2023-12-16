import Header from "./components/header";
import Menu from "./components/menu";
import React, { useContext } from 'react'
import { MenuContext } from "./contexts/menuContexts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Library from "./pages/library";
import History from "./pages/history";
import Shorts from "./pages/shorts";
import { UserStorage } from "./contexts/userContexts";
import SingUp from "./pages/sing-up";
import Login from "./pages/login";
import YourVideos from "./pages/your-videos";
import SearchPage from "./pages/search";



function App() {
  const {openMenu} = useContext(MenuContext);

  return (
    <BrowserRouter>
      <UserStorage>
      <div className="App">
        <Header  />
        <div style={{ width: '100%', display: 'flex' }}>
          <Menu openMenu={openMenu} />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/shorts' element={<Shorts />} />
              <Route path='/library' element={<Library />} />
              <Route path='/history' element={<History />} />
              <Route path='/login' element={<Login />} />
              <Route path='/sing-up' element={<SingUp />} />
              <Route path='/your-videos' element={<YourVideos />} />
              <Route path='/search' element={<SearchPage />} />
            </Routes>
          </div>
      </div>
      </UserStorage>
    </BrowserRouter>
  );
}

// DESAFIOS 

// MUDAR A LETRA DO USUARIO PARA A INICIAL DE CADA USUARIO 'FEITO'
// DEIXAR A TELA DO LOGIN NO PADRAO  'FEITO'
// IMPLEMENTAR SOZINHO UM DROP DOWN A PARTIR DO ICONE DE USUARIO  'FEITO'
// CRIAR A TELA E INTEGRAÇÃO PARA CADASTRO DE USUARIO 'FEITO'(MOSTRAR UM ALERTA EM TELA SE FOI CADASTRADO COM SUCESSO)
// CRIAR A TELA E INTEGRAÇÃO PARA CADASTRO DE VIDEO 
// IMPLEMENTAÇÃO DE PESQUISA

export default App;
