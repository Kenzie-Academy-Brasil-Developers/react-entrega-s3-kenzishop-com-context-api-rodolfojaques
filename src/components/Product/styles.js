import styled from "styled-components";

export const ItemLista = styled.li`
box-sizing: border-box;

min-width: 250px;
max-width: 290px;
padding: .5rem;
border-radius: 5px;

display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
text-align: start;
gap: 1rem;

box-shadow: 0 0 .1rem 0;

    &:hover{
        box-shadow: 0 0 .3rem 0; 
    }

    img{
        width: 100%;
        height: 220px;
    }

    hr{
        color: #878787;
        width: 90%;
    }

    h4{
        
        color: #A0A0A5;
    }

    h3{
        
        color: #828287;
    }

    button{
        
        width: 70%;
        height: 40px;

        border-style: none;
        border-radius: 5px;
        background-color: slateblue;
        color: beige;

        font-weight: bold;
        cursor: pointer;

        &:hover{
            border: solid beige;
        }

        &:active{
            opacity: .6;
        }
    }

`;