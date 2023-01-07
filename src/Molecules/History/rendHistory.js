import List from '../../Atoms/List/listComponent'

export default function rendHistory({ history }) {
    return (
        <div>
            <h2>Histórico:</h2>
            {history.map((item, index) => (
                <List item={item} index={index} />
            ))}
        </div>
    )
}