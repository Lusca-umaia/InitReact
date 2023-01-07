import Input from "../../Atoms/Input/Input";
import './styleGroupInputs.css'

export default function GroupInputs({ setValueOne, setvalueTwo }) {

    return (
        <div className="groupInputs">
            <Input type='number' handleChange={setValueOne} />
            <Input type='number' handleChange={setvalueTwo} />
        </div>
    )
}