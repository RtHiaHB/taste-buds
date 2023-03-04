import MenuItem from "./MenuItem"

const Category = ({ category, data }) => {
    const filteredData = data.filter((item) => {
        return (item.category === category)
    })
    const menuItems = filteredData.map ((item) => { 
        return ( <MenuItem id={item.item_id} item={item} /> )
    })
    return (
        <>
            <h2>{ category }</h2>
            {menuItems}
        </>
    )
}

export default Category