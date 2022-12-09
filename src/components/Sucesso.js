import styled from "styled-components"
export default function Sucesso() {

    return (
        <StyledSucesso>
            <h2>Pedido feito com sucesso!</h2>
            <div>
                <h3>Filme e sessão</h3>
                <p>Enola Homes</p>
                <p> 24/10/2021 15:00</p>
            </div>
            <div>
                <h3>Ingressos</h3>
                <p>Assento 15</p>
                <p>Assento 16</p>
            </div>
            <div>
                <h3>Comprador</h3>
                <p>Nome: João da Silva Sauro</p>
                <p>CPF: 123.456.789-10</p>
            </div>
            <button>
                Voltar pra Home
            </button>
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