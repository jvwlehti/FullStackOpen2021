import react from "react";
import App from "../App";
import Form from "./Form";

const Country = () =>{

    const countriesToShow = filterCountry(countries, search)

    let expr = countriesToShow.length()

    switch (expr) {
        case expr > 10 :
            return('Too many options, be more specific, please');
            break;
        case expr < 10 :
            msg = countriesToShow
            break;
        case expr = 1 :
            msg
    }

    return(
        <p>china</p>
    )
}

export default Country