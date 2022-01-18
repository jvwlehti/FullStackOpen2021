import Loop from "./Loop"

const Country = ({ country }) => {
    
    return(
        <div>
            <h1>{country.name.common}</h1>
            <li>Capital: {country.capital}</li>
            <li>Population: {country.population}</li>
            <h2>languages</h2>
                <Loop key={country.languages.key} arr={country.languages} />
            <img src = {country.flags.png} alt=""/>
        </div>
    )
}

export default Country