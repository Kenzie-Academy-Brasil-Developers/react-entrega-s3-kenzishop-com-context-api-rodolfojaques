import sapRed from '../assets/sapatoRed.png'
import nike from '../assets/nikeBlue.png'
import vans from '../assets/vans.png'

import { createContext, useState } from "react";

export const ListContext = createContext([])

export function ListProvider({children}){

    const [list] = useState([
        {
            img: sapRed,
            description: 'Sapato de camurça - ideal para que leva um style mais depojado no dia a dia',
            price: 220
        },
        {
            img: nike,
            description: 'Ideal para o seu Running diario e sports em geral',
            price: 350
        },
        {
            img: vans,
            description: 'O classico OldSchool da Vans, para que ama SK8 aliado a muito estilo',
            price: 250
        },
    ])

    return(
        <ListContext.Provider
        value={{ list }}>
            {children}
        </ListContext.Provider>
    )
}