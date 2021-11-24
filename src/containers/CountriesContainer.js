import { useState, useEffect } from "react";
import CountriesForm from "../components/CountriesForm";
import CountriesList from "../components/CountriesList";


const CountriesContainer = () => {

    const [country, setCountry] = useState("");

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${country}`)
            .then(response => response.json())
            .then(data => setCountry(data));
    }, []);



    return(
        <div>
            <CountriesForm />
            <hr />
            <CountriesList country={country} />
        </div>
    )

}

export default CountriesContainer;