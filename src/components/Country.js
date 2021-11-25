import React from "react";

const Country = ({country, incrementCountryCounter}) => {


    return(
        <div className="countryBox">
            <h2>{country.name.common}</h2>
            <img src={country.flags.png} alt="Flag" className="flag"/>
            <p>Capital City: {country.capital}</p>
            <p>Continent: {country.region}</p>
            <p>Population: {country.population}</p>
            <button onClick={incrementCountryCounter} className="visitedButton">Visited?</button>
        </div>
    )
    
}
export default Country;