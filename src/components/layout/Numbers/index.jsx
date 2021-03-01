import React from 'react'
import Button from '../../shared/Button'

const buildNumbers =()=>{
  const numbers = []
  for(let index=9 ; index >= 0 ; index--){
    numbers.push(<Button text={index} key={index}/>)
  }
  return numbers
}

const Numbers = () => {
  return (
    <div className="calculator__numbers">
      {buildNumbers()}
    </div>
  )
}

export default Numbers