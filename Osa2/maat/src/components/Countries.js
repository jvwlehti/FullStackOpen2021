import Maa from "./List";
import Country from "./Country";

const Countries = ({ count, search }) => {

    const filterCountry = (arr, query) => {
        return arr.filter(el => el.name.common.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    }
    const countriesToShow = filterCountry(count, search)

    let expr = countriesToShow.length

    if (expr >= 10) {
        return (<p>Too many matches, specify another filter</p>)
    }

    if (expr < 10 && expr > 1){
        return (
            <div>
                {countriesToShow.map(cou =>
                    <Maa key={cou.tld} country={cou} />)}
            </div>
    
        )
    }

    return(
        countriesToShow.map(cou =>
            <Country key={cou.tld} country={cou} />)
    )

}

export default Countries