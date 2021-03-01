import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, type, clickHandler }) => 
  <button className={type} onClick={() => clickHandler(text)}>
    {text}
  </button>


Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
}

Button.defaultProps = {
  text: '',
  type: '',
  clickHandler: () => {},
}

export default Button
