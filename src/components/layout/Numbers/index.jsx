import React from 'react'
import Button from '../../shared/Button'

const clickNumber = (text) => {
  console.log('Button', text)
}

const buildNumbers = () => {
  const numbers = []
  for (let index = 1; index < 10; index++) {
    numbers.push(<Button text={`${index}`} key={index} clickHandler={clickNumber} />)
  }
  numbers.push(<Button text="0" clickHandler={clickNumber} key={0} />)
  return numbers
}

const Numbers = () => <div className="calculator__numbers">{buildNumbers()}</div>

export default Numbers
