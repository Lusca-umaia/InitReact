import Button from "../../Atoms/Button/Button"
import './styleGroupButtons.css'

export default function GroupButtons({ sum, subtract, multiplication, division }) {
    return (
        <div className="groupButtons">
            <Button text="Soma" operation={sum} />
            <Button text="Subtração" operation={subtract} />
            <Button text="Multiplicação" operation={multiplication} />
            <Button text="Divisão" operation={division} />
        </div>
    )
}