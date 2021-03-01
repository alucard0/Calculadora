import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../shared/Button'

const MathOperations =({clickOperation, clickEqual}) => (
  <section className="calculator__math-operations">
    <Button text="+" clickHandler={clickOperation} />
    <Button text="-" clickHandler={clickOperation} />
    <Button text="*" clickHandler={clickOperation} />
    <Button text="/" clickHandler={clickOperation} />
    <Button text="=" clickHandler={clickEqual} />
  </section>
)

MathOperations.propTypes ={
  clickOperation: PropTypes.func.isRequired, 
  clickEqual: PropTypes.func.isRequired
}
 MathOperations.defaultProps ={
  clickOperation: ()=>{},
  clickEqual: ()=>{}
 }

 export default MathOperations