import React from "react"
import PropTypes from 'prop-types'

const Result = (props) => {
  const {value} = props
  return(
    <div className="calculator__result">
      <span>{value}</span>
    </div>
  )
}

Result.propTypes = {
  value: PropTypes.string.isRequired
}

Result.defaultProps = {
  value: "0"
}

export default Result
