import React from "react";
import { useState } from "react";
import CountryButton from "./CountryButton";

const Country = ({country, onClick, onVisit}) => {

    //const [visited,setVisited] = useState(false);


    return(
        <div className={country.visited ? "countryVisited" : "countryBox"} >
            <h2 >{country.name.common}</h2>
            <img src={country.flags.png} alt="Flag" className="flag"/>
            <p>Capital City: {country.capital}</p>
            <p>Continent: {country.region}</p>
            <p>Population: {country.population}</p>
            <CountryButton onClick={onClick}/>
            <input type="checkbox" onVisit={()=>{onVisit(country.ccn3)}}></input>
           
        </div>
    )
    
}
export default Country;