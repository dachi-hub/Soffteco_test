import React, {useContext} from 'react';
import {gql, useQuery} from '@apollo/client';
import {Context} from "../Context/ContextComp";
import './Countries.scss'

const LIST_COUNTRIES = gql`
  query{
    countries {
      name
      continent{
      code
      }
    }
  }
`;

export const Countries=()=> {

    const [context,setContext]=useContext(Context)

    const {data, loading, error} = useQuery(LIST_COUNTRIES);

    if (loading || error) {
        return <p>{error ? error.message : 'Loading...'}</p>;
    }


    const filteredCountries=context ? data.countries.filter((e)=>
        e.continent.code===context
    ):[];

    return (
        <div>
            {filteredCountries.length!=0?filteredCountries.map(country => (
                <div key={country.code} value={country.code} className={'block_countries'}>
                    <p>
                        {country.name}
                    </p>
                </div>
            )):<p></p>}
        </div>
    );
}
