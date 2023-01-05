import './App.css';
import { useState } from 'react'
import closeButton from './closeButton.png'
function App() {
  function sum() {
    setResult(parseInt(numberOne) + parseInt(numberTwo))
    setOperation('+')
    setOpen(true)
  }
  function sub() {
    setResult(parseInt(numberOne) - parseInt(numberTwo))
    setOperation('-')
    setOpen(true)
  }

  function division() {
    setResult(parseInt(numberOne) / parseInt(numberTwo))
    setOperation('/')
    setOpen(true)
  }

  function mult() {
    setResult(parseInt(numberOne) * parseInt(numberTwo))
    setOperation('X')
    setOpen(true)
  }

  const [numberOne, setnumberOne] = useState(0)
  const [numberTwo, setnumberTwo] = useState(0)
  const [open, setOpen] = useState(false)
  const [operation, setOperation] = useState()
  const [result, setResult] = useState()

  return (
    <section className="container">
      <h1>Calculator</h1>
      <div className='GroupInputs'>
        <input type='number' onChange={(e) => setnumberOne(e.target.value)} value={numberOne} />
        <input type='number' onChange={(e) => setnumberTwo(e.target.value)} value={numberTwo} />
      </div>
      <div className='GroupButtons'>
        <button onClick={sum}>Somar</button>
        <button onClick={sub}>Subtrair</button>
        <button onClick={division}>Dividir</button>
        <button onClick={mult}>Multiplicar</button>
      </div>
      {open ?
        <div className='Modal'>
          <button onClick={() => setOpen(false)}>
            <img
              src={closeButton}
              height='30px'
            />
          </button>
          <p>Resultado:</p>
          <p>{`${numberOne} ${operation} ${numberTwo} = ${result}`}</p>
        </div>
        : null}


    </section>
  );
}

export default App;