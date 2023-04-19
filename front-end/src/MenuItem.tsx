interface MenuItemProps {
    id:string;
    item: DataProps;
}


const MenuItem = (props: MenuItemProps) => {
    const view = () => {
        return (
            <div key={props.id}>
                <h3>{props.item.name}</h3>
                <p>{props.item.description}: <b>{props.item.price}</b> </p>
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