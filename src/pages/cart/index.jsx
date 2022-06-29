import { SectionMain } from "../../components/Cart";
import { Header } from "../../components/header";

export function Cart({setVerif}){

    return(
        <main>
            <Header 
                setVerif={setVerif}/>
            <SectionMain />
        </main>
    )
}