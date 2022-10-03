import {useContinents} from "../../graphql/useContinents";
import {useContext} from "react"
import {Context} from "../Context/ContextComp";


export const Continents=()=>{

    const [context,setContext]=useContext(Context)

    const handleOnChange=(e)=>{
        setContext(e.code)
        console.log(e)
    }

    const {data,error,loading}=useContinents();

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: </p>


    console.log(data)
    return data.continents.map((el) => (
        <div key={el.name}>
                    <div id={'continents'} style={{color: "white", padding: '10px', border: '1px solid white'}}
                    onClick={()=>handleOnChange(el)}
                    >
                        {el.name}
                    </div>
        </div>
    ));
}
