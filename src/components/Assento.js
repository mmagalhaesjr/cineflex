import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { VERDE, AMARELO, CINZA } from "../constants/color"

export default function Assento() {

    const [lugar, setLugar] = useState([])

    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v8/cineflex/showtimes/1/seats"
        const promise = axios.get(URL)
        promise.then(res => setLugar(res.data))
        promise.catch(err => console.log(err.response.data))
    }, [])

    if (lugar.length === 0) {
        return <p>CAREGANDO...</p>
    }

    return (
        <StyledSelecaoAcento>
            <h2>Selecione o(s) assento(s)</h2>
            <section >
                <div>
                    {lugar.seats.map(seat => (
                        <div className="bolinha" key={seat.id}>
                            {seat.name}
                        </div>
                    ))}</div>
                <div className="legendas">
                    <div className="legenda">
                        <div className="bolinha verde"> </div>
                        <p>Selecionado</p>
                    </div>
                    <div className="legenda">
                        <div className="bolinha cinza"> </div>
                        <p>Disponível</p>
                    </div>
                    <div className="legenda">
                        <div className="bolinha amarelo"> </div>
                        <p>Indisponível</p>
                    </div>
                </div>


            </section>

            <section className="inputs" >
                <label>Nome do comprador:</label>
                <input />
                <label>CPF do comprador:</label>
                <input />
            </section>
            <button>Reservar assento(s)</button>

        </StyledSelecaoAcento>
    )
}



const StyledSelecaoAcento = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h2{
    color: #293845;
    font-size: 24px;
    text-align: center;
    line-height: 100px;
}
section{
    width: 90%;
    margin: auto;
    justify-content: space-between;

    div{
        display: flex;
    flex-wrap: wrap;
    }
    
}
button{
    width: 225px;
    height: 42px;
    border-radius: 3px;
    margin-right:8px;
    margin-top: 80px;
    margin-bottom: 80px;
    border: none;
    background-color:#E8833A;
    color: #ffffff;
    font-size: 18px;
  }
.bolinha{
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: #C3CFD9;
    border: solid 1px #808F9D;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    margin-right: 5px;
    
}
.legendas{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 10px;
    div{
    flex-direction: column;
    align-items: center;
    
    }
}

.verde{background-color: ${VERDE}}
.amarelo{background-color: ${AMARELO}}
.cinza{background-color: ${CINZA}}

.inputs{
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    height: 200px;
    input{
        height: 50px;
    }
}
`