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


    return(
        countries ?
        <>
            <CountryButton onClick={incrementCountryCounter} />
            <CountriesForm />
            <hr />
            <CountriesList countries={countries} />
            

        </>
        :
        <p>Loading Country...</p>
    )

}

export default CountriesContainer;