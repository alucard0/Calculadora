import React from 'react'
import Button from '../../shared/Button'

const clickHandler = (text) => {
  console.log('Button', text)
}

const buildNumbers = () => {
  const numbers = []
  for (let index = 1; index < 10; index++) {
    numbers.push(<Button text={`${index}`} key={index} clickHandler={clickHandler} />)
  }
  numbers.push(<Button text="0" clickHandler={clickHandler} key={0} />)
  return numbers
}

const Numbers = () => <div className="calculator__numbers">{buildNumbers()}</div>

export default Numbers
