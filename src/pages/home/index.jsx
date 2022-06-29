import { Header } from "../../components/header";
import { ProductList } from "../../components/ProductList";

export function Home({verif,setVerif, home}){

    return(
        <>
        <Header 
        verif={verif}
        setVerif={setVerif}
        home={home}
        />
        <ProductList setVerif={setVerif}/>        
        </>

    )
}