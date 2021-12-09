import React from "react"

const Total = ({ parts }) => {

    let total = parts.reduce((s, n) => s + n.exercises, 0)
  
    return (
      <p>
        <b>total of {total} exercises </b>
      </p>
    )
  
  }

  export default Total