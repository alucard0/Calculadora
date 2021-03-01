import React from "react"

const Result = (props) => {
  const {value} = props
  return(
    <div className="calculator__result">
      <span>{value}</span>
    </div>
  )
}

export default Result
