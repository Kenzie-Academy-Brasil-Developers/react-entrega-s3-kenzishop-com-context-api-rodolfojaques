import { useContext } from "react"
import { CartContext } from "../../providers/cart"

export function Total(){

    const { sumTotal } = useContext(CartContext)
    const total = sumTotal()

    return(
    <div className="div-total">
        <h4>Resumo do pedido</h4>
        <div className="total">
            <b><p>{total.count} produtos</p></b>
            <span>R$ {total.total.toFixed(2)}</span>
        </div>
        <button>FINALIZAR PEDIDO</button>
    </div>
    )
}

