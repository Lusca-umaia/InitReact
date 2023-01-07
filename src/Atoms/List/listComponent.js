export default function listComponent({ item, index }) {
    return <h2>{`${index + 1}° - ${item}`}</h2>
}