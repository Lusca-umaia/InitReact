import './styleCalculator.css'

import GroupButtons from "../Molecules/GroupButtons/GroupButtons";
import GroupInputs from "../Molecules/GroupInputs/GroupInputs";
import Modal from "../Molecules/Modal/Modal";
import History from '../Molecules/History/rendHistory'

import { useState } from "react";

export default function Calculator() {

    function sum() {
        let armaz = []
        setOperation('+')
        setOpen(true)
        armaz.push(parseInt(numberOne) + parseInt(numberTwo))
        setHistory(history.concat(armaz))
        setResult(parseInt(numberOne) + parseInt(numberTwo))
    }

    function subtract() {
        let armaz = []
        setOperation('-')
        setOpen(true)
        armaz.push(parseInt(numberOne) - parseInt(numberTwo))
        setHistory(history.concat(armaz))
        setResult(parseInt(numberOne) - parseInt(numberTwo))
    }

    function multiplication() {
        let armaz = []
        setOperation('X')
        setOpen(true)
        armaz.push(parseInt(numberOne) * parseInt(numberTwo))
        setHistory(history.concat(armaz))
        setResult(parseInt(numberOne) * parseInt(numberTwo))
    }

    function division() {
        let armaz = []
        setOperation('/')
        setOpen(true)
        armaz.push(parseInt(numberOne) / parseInt(numberTwo))
        setHistory(history.concat(armaz))
        setResult(parseInt(numberOne) / parseInt(numberTwo))
    }

    const [numberOne, setNumberOne] = useState(0)
    const [numberTwo, setNumberTwo] = useState(0)
    const [operation, setOperation] = useState()
    const [open, setOpen] = useState(false)
    const [result, setResult] = useState()
    const [history, setHistory] = useState([])

    return (
        <section className="sectionCalculator">
            <h1>Calculadora</h1>
            {open ?
                <Modal
                    numberOne={numberOne}
                    numberTwo={numberTwo}
                    operation={operation}
                    result={result}
                    openFalse={() => setOpen(false)}
                /> : null}
            <GroupInputs setValueOne={(e) => setNumberOne(e.target.value)} setvalueTwo={(e) => setNumberTwo(e.target.value)} />
            <GroupButtons
                numberOne={numberOne}
                numberTwo={numberTwo}
                sum={() => sum()}
                subtract={() => subtract()}
                multiplication={() => multiplication()}
                division={() => division()}
            />
            <History history={history} />
        </section>
    )
}

