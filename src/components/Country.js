import React from "react";

const Country = ({country, incrementCountryCounter}) => {


    return(
        <div>
            <p>{country.name.common}, {country.flag}</p>
            <button onClick={incrementCountryCounter}>Visited</button>
        </div>
    )
    
}
export default Country;