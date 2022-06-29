
import { Product } from "../Product";
import { ListMain } from "./styles";

import { useContext } from "react";
import { ListContext } from "../../providers/products";


export function ProductList({setVerif}){

    const {list} = useContext(ListContext)
 
    return(
        <ListMain>
            {list.map((product,i)=> <Product setVerif={setVerif} key={i} product={product} />)}
        </ListMain>
    )
}