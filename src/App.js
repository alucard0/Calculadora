/* eslint no-eval: 0 */
import React, { useState } from 'react'
import './assets/scss/main.scss'
import Result from './components/shared/Result'
import Numbers from './components/layout/Numbers'
import MathOperations from './components/layout//MathOperations'
import Functions from './components/layout/Functions'

const App = () => {
  const [stack, setStack] = useState('')

  const clickNumber = (number) => {
    setStack(`${stack}${number}`)
  }

  const lastCharacterIsNumber = () => {
    const lastCharacter = stack.charAt(stack.length - 1)
    return /[0-9]/.test(lastCharacter)
  }

  const clickOperation = (operation) => {
    if (lastCharacterIsNumber()) {
      setStack(`${stack}${operation}`)
    }
  }

  const clickEqual = () => {
    if (lastCharacterIsNumber()) {
      const result = eval(stack)
      setStack(`${result}`)
    } else {
      onDelete()
    }
  }

  const onContentClear = () => {
    setStack('')
  }

  const onDelete = () => {
    if (stack.length > 0) {
      const newStack = stack.substring(0, stack.length - 1)
      setStack(newStack)
    }
  }

  return (
    <div className="calculator">
      <Result value={stack} />
      <Numbers clickNumber={clickNumber} />
      <Functions onContentClear={onContentClear} onDelete={onDelete} />
      <MathOperations clickOperation={clickOperation} clickEqual={clickEqual} />
    </div>
  )
}

export default App
