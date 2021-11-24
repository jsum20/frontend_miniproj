import Country from "./Country";

const CountriesList = ({countries}) => {

    const countryComponents = countries.map(country => {
        return(
            <Country Country={country} key={country.id} />
        )
    })

    return(
        <div className="country-list">
            {countryComponents}
        </div>
    )
    }
    export default CountriesList;