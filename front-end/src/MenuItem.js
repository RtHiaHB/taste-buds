
const MenuItem = ({ id, item }) => {
    const view = () => {
        return (
            <div key={id}>
                <h3>{item.name}</h3>
                <p>{item.description}: <b>{item.price}</b> </p>
            </div>
        )
    }
    return (
        <div>
            {view()}
        </div>
    )
}

export default MenuItem