import React from 'react'
import { useEffect, useState } from 'react'
import MenuItem from './MenuItem'

const Menu = () => {
    const [menu, setMenu] = useState(null)
    const fetchMenu = async () => {
        const url = 'http://localhost:4000/items'
        const response = await fetch(url)
        const data = await response.json()
        if(data) {
            setMenu(data)
        } else {
            setMenu(`Menu not found`)
        }
    }
    
    useEffect(() => {
        if (!menu) {
            fetchMenu()
        }
    })
    const display = () => {
        let result = []
        try {
            result = menu.map((item, i) => {
                return (
                    <MenuItem key={i} item={item} />
                )
            })
        } catch (err) {
            console.log(err)
            result.push = err
        }
        return result
        
    }
    return (
        <div>
            {display()}
        </div>
    )
}

export default Menu;