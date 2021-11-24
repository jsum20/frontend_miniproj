import { useState, useEffect } from "react";
import CountriesForm from "../components/CountriesForm";
import CountriesList from "../components/CountriesList";


const CountriesContainer = () => {

    const [countries, setCountries] = useState(null);

    const loadCountryData = () =>  {
        fetch(`https://restcountries.com/v3.1/all`)
            .then(response => response.json())
            .then(data => setCountries(data));
    }

    useEffect(loadCountryData, []);
    
    return(
        countries ?
        <>
            <CountriesForm />
            <hr />
            <CountriesList countries={countries} />
        </>
        :
        <p>Loading Country...</p>
    )

}

export default CountriesContainer;