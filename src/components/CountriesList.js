import Country from "./Country";

const CountriesList = ({countries, onClick})=> {

    const countryComponents = countries.map((country) => 
            <Country country={country} key={country.id} onClick={onClick} />
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