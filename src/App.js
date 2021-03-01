import React from 'react'
import './assets/scss/main.scss'
import Result from './components/shared/Result'
import Numbers from './components/layout/Numbers'

const App = () => {
  return (
    <div className="calculator">
      <Result value={'1'} />
      <Numbers />

      <div className="calculator__functions">
        <button>clear</button>
        <button>r</button>
      </div>
      <div className="calculator__math-operations">
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
        <button>=</button>
      </div>
    </div>
  )
}

export default App
