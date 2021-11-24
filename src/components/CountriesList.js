import Country from "./Country";

const CountriesList = ({countries}) => {

    const countryComponents = countries.map((country) => 
            <Country country={country} key={country.id} />
    )

    return(
        <div className="country-list">
            <h2>All Countries to choose from:</h2>
            <div className="country-list-container">
                {countryComponents}
            </div>
        </div>
    )
    }
    export default CountriesList;