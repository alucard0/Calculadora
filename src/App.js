import React from 'react'
import './assets/scss/main.scss'
import Result from './components/shared/Result'
import Numbers from './components/layout/Numbers'
import MathOperations from './components/layout//MathOperations'

const App = () => {
  return (
    <div className="calculator">
      <Result value={'0'} />
      <Numbers />

      <div className="calculator__functions">
        <button>clear</button>
        <button>r</button>
      </div>
      <MathOperations />
    </div>
  )
}

export default App
