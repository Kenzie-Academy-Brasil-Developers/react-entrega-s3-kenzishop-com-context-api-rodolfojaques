import styled from "styled-components";

export const HeaderApp = styled.header`

box-sizing: border-box;
box-shadow: 0 0 .3rem 0;

width: 100%;
height: 60px;

display: flex;
justify-content: space-between;
align-items: center;

padding: 0 .8rem;

    h1{
        font-size: 18px;
        cursor: pointer;
    }

    .div-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: .5rem;

        font-size: 10px;

    }

    .div-buttonCart{        
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 .2rem;
        gap: .1rem;

        cursor: pointer;

        img{
            width: 18px;
            height: 18px;
        }

        &:hover{
            box-shadow: 0 0 .1rem 0;
        }

        &:active{
            opacity: .6;
        }
    }

    .div-buttonEnter{
        display: flex;
        gap: .3rem;
        justify-content: center;
        align-items: center;
        padding: 0 .2rem;
        gap: .1rem;

        cursor: pointer;

        img{
            width: 18px;
            height: 18px;
        }

        &:hover{
            box-shadow: 0 0 .1rem 0;
        }

        &:active{
            opacity: .6;
        }
    
    }
`;