import React from 'react'



const Order = () => {
  const GetListofItems = async () => {
    const DB_URI = 'http://localhost:4000'
    const response = await fetch(`${DB_URI}/items`)
    const resData = await response.json()
    return resData
  }
    
  const list = GetListofItems()  
  console.log(`Hudsucker proxy: ${list}`)
  return (
    <div>
      {list}
    </div>
  )
}

export default Order;