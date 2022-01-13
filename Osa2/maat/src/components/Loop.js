import Country from "./Country";

const loop = ({ arr }) => {

    let array = []

    for (const property in arr) {
        array.push(`${arr[property]}`);
    }

    console.log(array);

    return (
        <ul>
            {array.map(c => <li key={c.toString()}>{c}</li>)}
        </ul>
        
    )
}


export default loop