import react from "react";

const PersonAdd = ({ submit, name, nameChange, num, numChange }) => {
    return (
        <form onSubmit={submit}>
            <div>
                name:
                <input
                    value={name}
                    onChange={nameChange} />
            </div>
            <div>number:
                <input
                    value={num}
                    onChange={numChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )

}

export default PersonAdd