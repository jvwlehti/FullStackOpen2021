import react from "react";

const Form = ({ text, action }) => {
    return (
        <form>
            <div>
                find countries
                <input
                    value={text}
                    onChange={action} />
            </div>
        </form>
    )
}

export default Form