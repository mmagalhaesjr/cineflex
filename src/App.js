import React, { useState } from "react";
import styled from "styled-components";
import Assento from "./components/Assento";
import Sessao from "./components/Sessao";
import Filmes from "./components/Filmes";
import Sucesso from "./components/Sucesso";
import GlobalStyle from "./GlobalStyle"

import { BrowserRouter, Routes, Route } from "react-router-dom";




export default function App() {

    const [ids, setIds] = useState([])
    const [name, setName] = useState("")
    const [cpf, setCPF] = useState("")
    const [nomeFilme, setNomeFilme] = useState("")
    const [dataFilme, setDataFilme]= useState("")
    const [horaFilme, setHoraFilme]= useState("")
    const [numeroAssento, setNumeroAssento]= useState("")
  
  return (
    <>
      <GlobalStyle />
      <StyledApp>
      <div className="header">
            <h1>CINEFLEX</h1>
          </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Filmes />} />
            <Route path="/sessoes/:idFilme" element={<Sessao />} /> 
            <Route path="/assentos/:idSessao" element={<Assento 
            ids={ids}
            setIds={setIds}
            name={name}
            setName={setName}
            cpf={cpf}
            setCPF={setCPF}
            numeroAssento={numeroAssento}
            setNumeroAssento={setNumeroAssento}
            nomeFilme={nomeFilme}
            setNomeFilme={setNomeFilme}
            dataFime={dataFilme}
            setDataFilme={setDataFilme}
            horafilme={horaFilme}
            setHoraFilme={setHoraFilme}
            />} />


            <Route path="/sucesso" element={<Sucesso
            ids={ids}
            setIds={setIds}
            name={name}
            setName={setName}
            cpf={cpf}
            setCPF={setCPF}
            nomeFilme={nomeFilme}
            setNomeFilme={setNomeFilme}
            dataFilme={dataFilme}
            setDataFilme={setDataFilme}
            horaFilme={horaFilme}
            setHoraFilme={setHoraFilme}
            numeroAssento={numeroAssento}
            />} />
          </Routes>
        </BrowserRouter>
      </StyledApp>
    </>

  );
}

const StyledApp = styled.div`
font-family: 'Roboto', sans-serif;;
  
min-width:375px;
  height:100%;
  margin:auto ;
  padding: 0;
  border: none;

  .header{
    color:#E8833A;
    background-color:#C3CFD9 ;
    width:100%;
    height: 67px;
    display:flex;
    justify-content: center;
    align-items:center;
    font-size: 34px;
    text-align: center;
  }
`;
