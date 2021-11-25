import { useState, useEffect } from "react";
import CountriesForm from "../components/CountriesForm";
import CountriesList from "../components/CountriesList";
import CountryButton from "../components/CountryButton";

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

    //const [visitedCountry, setVisitedCountry] = useState([]);

    const updateVisitedCountry = (name) => {
        console.log("country visited " + name);
        const countryVisited = countries.find(country => country.name.common === name);
        countryVisited.visited = true;
        //setVisitedCountry([...visitedCountry])
    }



    return(
        countries ?
        <>  
            <h1>How many countries have you visited? </h1>
            <p className="counter">{currentCountry}</p>
            <hr />
            <CountriesList countries={countries} onClick={incrementCountryCounter} update={updateVisitedCountry}/>
        </>
        :
        <p>Loading Country...</p>
    )

}

export default CountriesContainer;