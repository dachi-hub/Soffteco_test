import { useForm } from "react-hook-form";
import {gql, useQuery} from '@apollo/client';
import {useState} from "react";


const LIST_COUNTRIES = gql`
  query{
    countries {
      name
      currency
      continent{
      code
      }
    }
  }
`;

export const Form=()=>{
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const [obj, setObj] = useState("");

    const {data, loading, error} = useQuery(LIST_COUNTRIES);

    if (loading || error) {
        return <p>{error ? error.message : 'Loading...'}</p>;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("currency")} />
            <select {...register("Country")}>
                {data.countries.map(country=>
                    <option value={country.name}>{country.name}</option>
                )}
            </select>
            <input type="submit" />
            <p></p>
        </form>
    );
}