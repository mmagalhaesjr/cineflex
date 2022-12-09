import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"

export default function Filmes() {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies"
        const promise = axios.get(URL)
        promise.then(res => setFilmes(res.data))
        promise.catch(err => console.log(err.response.data))
    }, [])

    if (filmes.length === 0) {
        return <p>CAREGANDO...</p>
    }

    return (
        <StyledSelecaoFilmes>
            <h2>Selecione o filme</h2>
            {filmes.map(filme => (
                <cartaz key={filme.id}>
                    <img src={filme.posterURL} alt={filme.title} />
                </cartaz>
            ))}
        </StyledSelecaoFilmes>
    )
}

const StyledSelecaoFilmes = styled.div`
    display: flex;
    justify-content:space-around;
    flex-wrap:wrap;
   
   
    

cartaz{
    width:145px;
    height: 209px;
    background-color:#ffffff;
    border-radius:3px;
    display: flex;
    justify-content:center;
    align-items: center;
    margin:11px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    position: relative;
    top:80px;
}
h2{
    color: #293845;
    position: absolute;
    top:100px;
    font-size: 24px;
    
  }
img{
    width:129px;
    height: 193px;
}


`
