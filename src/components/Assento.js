import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { VERDE, AMARELO, CINZA } from "../constants/color"


export default function Assento({ids,setIds,name, setName, cpf,setCPF,dataFilme,setDataFilme,horaFilme,setHoraFilme,nomeFilme,setNomeFilme, numeroAssento, setNumeroAssento}) {
    const { idSessao } = useParams()
    const [assento, setAssento] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`
        const promise = axios.get(URL)
        promise.then(res => setAssento(res.data))
        promise.catch(err => console.log(err.response.data))
    }, [])

    if (assento.length === 0) {
        return <p>CAREGANDO...</p>
    }



    console.log(ids)

    return (
        <StyledSelecaoAcento>
            <h2>Selecione o(s) assento(s)</h2>
            <section >
                <div>
                    {assento.seats.map(seat => ( 
                        <StyledBolinha data-test="seat"
                        onClick={()=>  seat.isAvailable && !(ids.includes(seat.id)) ? (setIds([...ids, seat.id]), setNumeroAssento([...numeroAssento, seat.name])) : undefined} 
                        className="bolinha" key={seat.id} 
                        selecionado={ids.includes(seat.id)} 
                        disponivel={seat.isAvailable}>
                            {seat.name}
                        </StyledBolinha>
                    ))}</div>
                <div className="legendas">
                    <div className="legenda">
                        <StyledBolinha className="bolinha verde"> </StyledBolinha>
                        <p>Selecionado</p>
                    </div>
                    <div className="legenda">
                        <StyledBolinha className="bolinha cinza"> </StyledBolinha>
                        <p>Disponível</p>
                    </div>
                    <div className="legenda">
                        <StyledBolinha className="bolinha amarelo"> </StyledBolinha>
                        <p>Indisponível</p>
                    </div>
                </div>


            </section>
        
            
            <form onSubmit={reservarAssento} >
                <label>
                    <p>Nome do comprador:</p>
                    <input 
                        data-test="client-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required />
                </label>
                <label>
                    <p>CPF do comprador:</p>
                    <input
                        data-test="client-cpf"
                        type="text"
                        value={cpf}
                        onChange={(e) => setCPF(e.target.value)}
                        required />
                </label>
                
                <button data-test="book-seat-btn">Reservar assento(s)</button>
                
            </form>
  

            <StyledFooter data-test="footer">
                <img src={assento.movie.posterURL} alt="" />
                <p>{assento.movie.title}<br/>{assento.day.weekday} - {assento.day.date}   </p>
            </StyledFooter>

        </StyledSelecaoAcento>
    )

    function reservarAssento(e) {
        e.preventDefault()
        
        const reserva = { ids: ids, name: name, cpf: cpf}

        if(ids.length !== 0){
            console.log(assento.day.date)
            setHoraFilme(assento.name)
            setNomeFilme(assento.movie.title)
            setDataFilme(assento.day.date)
            const requisicao = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", reserva)
            requisicao.then(res => navigate("/sucesso"))
            requisicao.catch(err => console.log(err.response.data))
        }
    }
}



const StyledSelecaoAcento = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: fit-content;

h2{
    color: #293845;
    font-size: 24px;
    text-align: center;
    line-height: 80px;
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
    margin-top: 30px;
    margin-bottom: 40px;
    border: none;
    background-color:#E8833A;
    color: #ffffff;
    font-size: 18px;
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

form{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    height: 295px;
    input{
        height: 50px;
        width: 270px;
        margin-bottom: 10px;
        margin-top: 5px;
    }
}

`
const StyledFooter = styled.footer`

    display: flex;
    font-size: 26px;
    width: 100%;
    height: 117px;
    align-items: center;
    justify-content: center;
    background-color: #9EADBA;
    margin-bottom: 0;
    img{
        width: 48px;
        height: 72px;
        border: #ffffff 6px solid;
        margin-right: 10px;
        margin-left: 20px;
    }
`


const StyledBolinha = styled.div`

    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color:  ${props => props.disponivel ? CINZA : AMARELO};
    background-color: ${props => props.selecionado && VERDE};
    border: solid 1px #808F9D;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    margin-right: 5px;
    
`