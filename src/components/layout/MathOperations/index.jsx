import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../shared/Button'

const renderButtons = (clickOperation, clickEqual) => {
  const symbols = ['+', '-', '*', '/', '=']
  return symbols.map((symbol) => {
    if (symbol === '=') {
      return <Button text={symbol} clickHandler={clickEqual} key={symbol} />
    } else {
      return <Button text={symbol} clickHandler={clickOperation} key={symbol} />
    }
  })
}
const MathOperations = ({ clickOperation, clickEqual }) => (
  <section className="calculator__math-operations">
    {renderButtons(clickOperation, clickEqual)}
  </section>
)

MathOperations.propTypes = {
  clickOperation: PropTypes.func.isRequired,
  clickEqual: PropTypes.func.isRequired,
}
MathOperations.defaultProps = {
  clickOperation: () => {},
  clickEqual: () => {},
}

export default MathOperations
