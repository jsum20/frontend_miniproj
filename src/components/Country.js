import React from "react";
import { useState } from "react";
import CountryButton from "./CountryButton";

const Country = ({country, onClick}) => {

    const [visited,setVisited] = useState(false);

    const updateVisited = () => {
        setVisited(visited);
    }

    return(
        <div className={country.visited ? "countryVisited" : "countryBox"} >
            <h2 >{country.name.common}</h2>
            <img src={country.flags.png} alt="Flag" className="flag"/>
            <p>Capital City: {country.capital}</p>
            <p>Continent: {country.region}</p>
            <p>Population: {country.population}</p>
            <CountryButton onClick={onClick}/>
        </div>
    )
    
}
export default Country;