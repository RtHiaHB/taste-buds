import MenuItem from "./MenuItem"



interface CategoryProps {
    category: string
    data: DataProps[]
}

const Category = (props: CategoryProps) => {
    const filteredData = props.data.filter((item: DataProps) => {
        return (item.category === props.category)
    })
    const menuItems = filteredData.map ((item: DataProps) => { 
        return ( <MenuItem id={item.item_id} item={item} /> )
    })
    return (
        <>
            <h2>{ props.category }</h2>
            {menuItems}
        </>
    )
}

export default Category