import styled from "styled-components";

export const SectionCart = styled.section`
*{
    box-sizing: border-box;
    list-style: none;
    padding: 0%;
    margin: 0%;

}


display: flex;
flex-direction: column-reverse;
justify-content: center;
align-items: center;
gap: 2rem;

    .div-total{
        margin-top: 20px;
        padding: 1rem;
        border-radius: 5px;
        border: solid .5px #828287;
        color: #828287;
        
        display: flex;
        flex-direction: column;
        gap: 1rem;

        button{

            cursor: pointer;

            border-style: none;
            border-radius: 5px;
            height: 2rem;
            

            color: beige;
            background-color: slateblue;

            &:active{
                opacity: .6;
            }
        }
    }

    .total{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        font-size: small;
        color: #A0A0A5;
    }

    img{
        max-width: 60px;
        max-height: 60px;
    }

    ul{
        width: 95%;
        margin-left: 0%;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        li{
            position: relative;
            box-shadow: #828287 0 0 .2rem 0;
            border-radius: 5px;

            width: 100%;
            height: 90px;
            padding: .5rem;

            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: .5rem;

            text-align: start;

            h4{
                font-size: 10px;
                width: 50%;

                color: #A0A0A5;
            }

            h3{
                font-size: 8px;

                color: #828287;
            }

            span{
                position: absolute;
                top: 3px;
                right: 8px;

                color: sienna;
                cursor: pointer;
            }
        }
    }
    @media(min-width: 905px){
        height: 80vh;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        
        padding: 0 5rem;



        ul{
            padding: 1rem;
            margin-top: 90px;
            height: 85vh;
            overflow-y: auto;

            align-items: center;
            justify-content: flex-start;
        }

        li{
            max-width: 85%;
            min-height: 130px;

            img{
                min-height: 120px;
                min-width: 120px;
            }
            
        }

        .div-total{
            min-width: 220px;
            gap: 2rem;
        }
    }
`;