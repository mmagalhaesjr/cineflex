import { Link } from "react-router-dom"
import styled from "styled-components"


export default function Sucesso({ids,setIds,name, setName, cpf,setCPF,dataFilme,setDataFilme,horaFilme,setHoraFilme,nomeFilme,setNomeFilme, numeroAssento}) {
console.log(numeroAssento)
    return (
        <StyledSucesso>
            <h2>Pedido feito com sucesso!</h2>
            <div data-test="movie-info">
                <h3>Filme e sessão</h3>
                <p>{nomeFilme}</p>
                <p> {dataFilme} {horaFilme}</p>
            </div>
            <div data-test="seats-info">
                <h3>Ingressos</h3>
                {numeroAssento.map(numero => <p>Assento {numero}</p> )}
            </div>
            <div data-test="client-info">
                <h3>Comprador</h3>
                <p>Nome: {name}</p>
                <p>CPF: {cpf}</p>
            </div>
            <Link to="/">
            <button data-test="go-home-btn">Voltar pra Home</button>
            </Link>
            
        </StyledSucesso>
    )
}


const StyledSucesso = styled.section`
    display: flex;
    flex-direction: column;
    justify-content:space-around;
    flex-wrap:wrap;
h2{
    color: #247A6B;
    margin: auto;
    margin-top: 20px;
    width: 160px;
    text-align: center; 
    font-size: 24px;
  }
  h3{
font-weight: 700;
font-size: 24px;
margin-bottom: 10px;
  }

  p{
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 0;
    margin-top: 3px;
  }
  div{
    margin-left: 29px;
    margin-bottom: 20px;
    margin-top: 30px;
  }

 
  button{
    width: 225px;
    height: 42px;
    border-radius: 3px;
    margin: auto;
    margin-top: 100px;
    border: none;
    background-color:#E8833A;
    color: #ffffff;
    font-size: 18px;
    
  }

  
  
`