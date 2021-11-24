import CountriesForm from "../components/CountriesForm";


const CountriesContainer = () => {

    const [list, countryName] = useState([]);

    return(
        <div>
            <CountriesForm />
        </div>
    )

}

export default CountriesContainer;