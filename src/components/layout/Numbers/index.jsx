import React from 'react'
import PropTypes  from 'prop-types'
import Button from '../../shared/Button'

const buildNumbers = ({clickNumber}) => {
  const numbers = []
  for (let index = 1; index < 10; index++) {
    numbers.push(<Button text={`${index}`} key={index} clickHandler={clickNumber} />)
  }
  numbers.push(<Button text="0" clickHandler={clickNumber} key={0} />)
  return numbers
}

const Numbers = (props) => <div className="calculator__numbers">{buildNumbers(props)}</div>

Numbers.propTypes ={
  clickNumber: PropTypes.func.isRequired
}
Numbers.defaultProps ={
  clickNumber: ()=>{}
 }


export default Numbers
