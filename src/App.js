import React from "react";
import styled from "styled-components";
import Assento from "./components/Assento";
import Sessao from "./components/Sessao";
import Filmes from "./components/Filmes";
import Sucesso from "./components/Sucesso";
import GlobalStyle from "./GlobalStyle"


export default function App() {
  return (
    <>
    <GlobalStyle/>
      <StyledApp>
        <div className="header">
          <h1>CINEFLEX</h1>
        </div>
        <Filmes/>
        {/* <Sessao/> */}
        {/* <Assento/> */}
        {/* <Sucesso /> */}
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
