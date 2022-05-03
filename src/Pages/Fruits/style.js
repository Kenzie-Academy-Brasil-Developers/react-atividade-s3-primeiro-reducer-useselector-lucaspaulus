import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    max-width: 800px;
    display: flex;
    justify-content: space-around;


    @media only screen and (max-width: 580px){
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
    }
    
`

export const FruitCard = styled.div`

    background-color: black;
    padding: 25px 40px;
    border-radius: 4px;
    width: 100%;
    max-width: 100px;
    margin-bottom: 15px;

    svg{
        width: 100%;
        max-width: 100px;
         
    }


`