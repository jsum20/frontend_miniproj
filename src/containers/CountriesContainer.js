import { useState, useEffect } from "react";
import CountriesForm from "../components/CountriesForm";
import CountriesList from "../components/CountriesList";
import CountryButton from "../components/CountryButton";

const CountriesContainer = () => {

    const [currentCountry, setCurrentCountry] = useState(1);
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

    const updateVisitedCountry = (id) => {
        console.log("updating task " + id);
        const taskToUpdate = countries.find(country => country.id === id);
        setVisitedCountry([...visitedCountry])
    }


    return(
        countries ?
        <>  
            <CountriesForm />
            <p>How many countries have you visited? {currentCountry}</p>
            <hr />
            <CountriesList countries={countries} onClick={incrementCountryCounter} updateVisitedCountry={updateVisitedCountry}/>
        </>
        :
        <p>Loading Country...</p>
    )

}

export default CountriesContainer;