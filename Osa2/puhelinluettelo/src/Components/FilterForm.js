import React from "react";

const Filter = ({ text, action }) => {
    return(
        <form>
        <div>
            filter shown with
            <input
                value={text}
                onChange={action} />
        </div>
    </form>
    )
}

export default Filter