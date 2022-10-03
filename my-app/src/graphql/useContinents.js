import {gql, useQuery} from "@apollo/client";

export const CONTINENTS_DESCRIPTION=gql`
  query{
  continents{
    name
    code
  }
}
`


export const useContinents=(code)=>{
    const {data, error, loading}=useQuery(CONTINENTS_DESCRIPTION,{
        variables:{
            code
        }
    })
    return{
        data,
        error,
        loading
    }
}
