import {DropMenu} from "../DropMenu/DropMenu";
import {Countries} from "../Countries/Countries";
import {createContext, useState} from "react";

export const Context=createContext()

export const ContextComp=()=>{
    const [context,setContext]=useState()

    return(
        <Context.Provider value={[context,setContext]}>
            <div className={'container'}>
                <DropMenu/>
                <Countries/>
            </div>
        </Context.Provider>
    )
}