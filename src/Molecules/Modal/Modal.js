import './styleModal.css'
import closeButton from './closeButton.png'
export default function Modal({ numberOne, operation, numberTwo, result, openFalse }) {
    return (
        <div className='Modal'>
            <button onClick={openFalse}>
                <img
                    src={closeButton}
                    height='30px'
                />
            </button>
            <p>Resultado:</p>
            <p>{`${numberOne} ${operation} ${numberTwo} = ${result}`}</p>
        </div>
    )
}