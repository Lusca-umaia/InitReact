import './styleInput.css'
import message from '../../hoc/message'
function Input({ type, handleChange, MouseOver, MouseOut, status }) {
    return (
        <div className='contInput'>
            <input type={type} onChange={handleChange} onMouseOver={MouseOver} onMouseOut={MouseOut} />
            {status ?
                <h2 className='textSlang'>Opa, clique nos botões abaixo para executar as operações</h2>
                : null}
        </div>
    )
}

export default message(Input)