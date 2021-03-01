import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../shared/Button'

const renderButtons = (clickNumber) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

  return numbers.map((number) => (
    <Button text={`${number}`} clickHandler={clickNumber} key={number} />
  ))
}

const Numbers = ({ clickNumber }) => (
  <div className="calculator__numbers">{renderButtons(clickNumber)}</div>
)

Numbers.propTypes = {
  clickNumber: PropTypes.func.isRequired,
}

Numbers.defaultProps = {
  clickNumber: () => {},
}

export default Numbers
