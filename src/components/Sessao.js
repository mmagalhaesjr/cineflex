import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"

export default function Sessao() {
    const { idFilme } = useParams()
    const [sessao, setSessao] = useState([])

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`
        const promise = axios.get(URL)
        promise.then(res => setSessao(res.data))
        promise.catch(err => console.log(err.response.data))
    }, [])

    if (sessao.length === 0) {
        return <p>CAREGANDO...</p>
    }

    return (
        <StyledSelecaoHorario>
            <h2>Selecione o Horário</h2>
            <section>
                {sessao.days.map(select => (
                    <div key={select.id}>
                        <p>{select.weekday} - {select.date}</p>
                        {select.showtimes.map(horarios => (<button>{horarios.name}</button>))}
                    </div>
                ))}
            </section>

            <footer>
              <div>
                <img src={sessao.posterURL} alt="" />
                <p>{sessao.title} </p></div>
                
            </footer>
        </StyledSelecaoHorario>
    )
}

const StyledSelecaoHorario = styled.div`
h2{
    color: #293845;
    font-size: 24px;
    text-align: center;
    line-height: 100px;
  }
  p{
    font-size: 20px;
    line-height: 23px;
    margin-bottom: 15px;
  }
  div{
    height: 120px;
    justify-content:start;
    margin-left: 23px;
    margin-bottom: 20px
    color: #293845;
  }

  section{
    min-height: 780px;  
    width: 375px;
        display: flex;
        flex-direction: column;
        margin: auto;
  }
  button{
    width: 83px;
    height: 43px;
    border-radius: 3px;
    margin-right:8px;
    border: none;
    background-color:#E8833A;
    color: #ffffff;
  }

  footer{
    font-size: 26px;
    width: 100%;
    height: 117px;
    display: flex;
    justify-content: center;
    background-color: #9EADBA;

    div{
      display: flex;
    width: 375px;
    height: 117px;
    align-items: center;
    justify-content: left;
    background-color: #9EADBA;
    }
    img{
        width: 48px;
        height: 72px;
        border: #ffffff 6px solid;
        margin-right: 10px;
    }
  }
`