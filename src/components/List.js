import Item from "./Item";

export default function List() {
    return(
        <>
            <h1>
                Lista
            </h1>
            <ul>
                <Item marca="Volks" lancamento={1975}/>
                <Item marca="Wagen" lancamento={1969}/>
                <Item lancamento={1986}/>
            </ul>
        </>
    )
}