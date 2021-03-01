import React from 'react'
import './assets/scss/main.scss'
import Result from './components/shared/Result'
import Numbers from './components/layout/Numbers'
import MathOperations from './components/layout//MathOperations'
import Functions from './components/layout/Functions'

const clickOperation = (operation) => {
  console.log('Operation', operation)
}

const clickEqual = (equal) => {
  console.log('Equal', equal)
}

const onContentClear = () => {
  console.log('Clear')
}

const onDelete = () => {
  console.log('Delete')
}

const App = () => {
  return (
    <div className="calculator">
      <Result value={'0'} />
      <Numbers />
      <Functions onContentClear={onContentClear} onDelete={onDelete} />
      <MathOperations clickOperation={clickOperation} clickEqual={clickEqual} />
    </div>
  )
}

export default App
