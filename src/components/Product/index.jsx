import { ItemLista } from "./styles";

import { useContext} from "react";
import { CartContext } from "../../providers/cart";

export function Product({product,setVerif}){   

    const { addCart } = useContext(CartContext)

    const getItem = (e)=> {

        e.preventDefault()

        const data = {
            img: e.target.parentNode.children[0].src,
            description: e.target.parentNode.children[2].textContent,
            price: Number((e.target.parentNode.children[3].textContent).slice(3)),
        }       

        addCart(data)

        setVerif(true)        
    }

    return(
        <ItemLista>
            <img src={product.img} alt="img product" />
            <hr />
            <h4>{product.description}</h4>
            <h3>R$ {(product.price).toFixed(2)}</h3>
            <button onClick={getItem}>Adicionar ao Carrinho</button>
        </ItemLista>
    )
}

