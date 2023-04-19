import React from 'react'
import "./css/style.css"
import burger from "./video/burger.mp4"


const Home = () => {
    return (
        <div>
            <h1>Taste Buds</h1>
            <div>
                <video autoPlay loop muted className="back-video">
                    <source src={burger} type="video/mp4" />

                </video>
            </div>
        </div>
    )
}

export default Home