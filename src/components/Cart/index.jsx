import { useContext } from "react";
import { CartContext } from "../../providers/cart";
import { Total } from "../Total";

import { SectionCart } from "./styles";

export function SectionMain(){

    const { cart,deleteFromCart } = useContext(CartContext)

    const deleteClick = (e) => {

        e.preventDefault()

        deleteFromCart(e.target.parentNode.parentNode.id)
    }

    return(
        <SectionCart>
            <ul>
                {cart?.map((item,i)=> 
                <li id={item.id} key={i}>
                    <img src={item.img} alt="" />
                    <h4>{item.description}</h4>
                    <h3>R$ {item.price.toFixed(2)}</h3>
                    <span onClick={deleteClick}><b>x</b></span>
                </li>)}
            </ul>
            <Total />
        </SectionCart>
    )
}