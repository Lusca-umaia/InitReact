import './styleInput.css'

export default function Input({ type, handleChange}) {
    return (
        <input type={type} onChange={handleChange} />
    )
}