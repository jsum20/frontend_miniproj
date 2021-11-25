import { useState, useEffect } from "react";
import CountriesList from "../components/CountriesList";

const CountriesContainer = () => {

    const [currentCountry, setCurrentCountry] = useState(0);
    const [countries, setCountries] = useState(null);

    const loadCountryData = () =>  {
        fetch(`https://restcountries.com/v3.1/all`)
            .then(response => response.json())
            .then(data => setCountries(data));
    }

    useEffect(loadCountryData, [currentCountry]);

    const incrementCountryCounter = () => {
        setCurrentCountry(currentCountry + 1);

    }

    const [visitedCountry, setVisitedCountry] = useState([]);

    // const updateVisitedCountry = (name) => {
    //     console.log("country visited " + name);
    //     const countryVisited = countries.find(country => country.name.common === name);
    //     countryVisited.visited = true;
    //     //setVisitedCountry([...visitedCountry])
    // }

    const onVisit = (ccn3) => {
        const visitedCountry = countries.find(country => country.ccn3 === ccn3);
         visitedCountry.visited = true;
         setVisitedCountry(visitedCountry);


    }


    return(
        countries ?
        <>  
            <h1>How many countries have you visited? </h1>
            <p className="counter">{currentCountry}</p>
            <hr />
            <CountriesList countries={countries} onClick={incrementCountryCounter} 
                     onVisit={onVisit}/>
        </>
        :
        <p>Loading Country...</p>
    )

}

export default CountriesContainer;