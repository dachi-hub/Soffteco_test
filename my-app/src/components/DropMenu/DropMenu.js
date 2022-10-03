import {Continents} from "../Continents/Continents";
import "./DropMenu.scss"

export const DropMenu=()=>{
    return(
        <nav>
            <ul>
                <li>
                    <p>Continents</p>
                    <ul>
                        <li>
                            <Continents/>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}