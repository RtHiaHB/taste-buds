import React from 'react'
import { useEffect, useState } from 'react'
//import MenuItem from './MenuItem'
import Category from './Category'

const Menu = () => {
    const [menu, setMenu] = useState([])
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
        if(menu.length === 0) {
            fetchMenu()
        }
        return (
            <div>
                <Category category={'Appetizers'} data={menu} />
                <Category category={'Salads'} data={menu} />
                <Category category={'Entrees'} data={menu} />
                <Category category={'Sides'} data={menu} />
                <Category category={'Kids\' Meals'} data={menu} />
                <Category category={'Desserts'} data={menu} />
            </div>
        )
        
    }
    return (
        <div>
            {display()}
        </div>
    )
}

export default Menu;