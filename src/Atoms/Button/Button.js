import './styleButton.css'

export default function Button({ text, operation = () => { } }) {
    return (
        <button onClick={operation}>{text}</button>
    )
}