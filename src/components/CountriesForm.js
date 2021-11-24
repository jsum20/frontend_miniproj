import { useState } from "react";

const CountriesForm = ({onCountrySubmission}) => {

    const [newCountry, setCountry] = useState("");

    const handleCountryChange = (event) => {
        setCountry(event.target.value)
    }

    const handleFormSubmission = (event) => {
        event.preventDefault();

        const newCountry = {
            name: newCountry,
        }

        onCountrySubmission(newCountry);

    }


    return (
        <>
        <form onSubmit={handleFormSubmission}>
            <div className="formElement">
                <label htmlFor="country">Which country have you visited: </label>
                <input type="text" id="newCountry" value={newCountry} onChange={handleCountryChange}/>
            </div>
           <div className="formElement">
              <input type="submit" value="Add Country"/>
           </div>

        </form>

        </>
    )
}

export default CountriesForm;