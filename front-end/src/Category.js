import MenuItem from "./MenuItem"

const Category = ({ category, data }) => {
    const menuItems = data.map ((item) => { 
        return ( <MenuItem item={item} /> )
    })
    return (
        <h3>{ category }</h3>
    )
}