import Country from "./Country";

const CountriesList = ({countries, onClick, update, onVisit})=> {

    const countryComponents = (countries.map((country) => 
            <Country country={country} key={country.name.common} onClick={onClick} onVisit={onVisit} />
         ))

         //.sort((a, b) => a.name.common.localeCompare(b.name.common))

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