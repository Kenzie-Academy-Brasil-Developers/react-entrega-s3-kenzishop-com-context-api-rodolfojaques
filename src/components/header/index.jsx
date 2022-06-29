import { HeaderApp } from "./styles";

import Cart from "../../assets/cart.jpg"
import imgIn from "../../assets/in.jpg"

import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../providers/cart";

export function Header({verif,setVerif,home}){

    const { cart } = useContext(CartContext)

    const history = useHistory()

    return(
        <HeaderApp>
            <h1 onClick={()=> {
                !cart[0]? setVerif(false): <></>
                history.push('/')
                }}>Kenzie Shop</h1>

            <div className="div-header">
                {home                
                ?
                <div onClick={()=>history.push("/cart")} className="div-buttonCart">
                    <img src={Cart} alt="" />
                    {verif
                    ?
                    <b><p style={{color:"red"}}>Carrinho</p></b>
                    :
                    <p style={{color:"black"}}>Carrinho</p>}
                </div>
                :
                <div onClick={()=>{
                    !cart[0]? setVerif(false): <></>
                    history.push("/")}} className="div-buttonCart">
                    <img src={Cart} alt="" />
                    <b><p style={{color:"black"}}>Voltar</p></b>
                </div>                
                }
                <div className="div-buttonEnter">
                    <img src={imgIn} alt="" />
                    <p>Entrar</p>
                </div>
            </div>
        </HeaderApp>
    )
}