import Item from "./Item";

export default function List() {
    return(
        <div>
            <h1>
                Lista
            </h1>
            <ul>
                <li>
                    <Item marca="Volks"/>
                </li>
                <li>
                    <Item marca="Wagen"/>
                </li>
            </ul>
        </div>
    )
}