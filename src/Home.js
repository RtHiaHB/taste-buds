import React from 'react'
import "./css/style.css"
import burger from "./video/burger.mp4"


const Home = () => {
    return (
        <div>
            <h1>HOME</h1>
            <video autoPlay loop muted class="back-video">
                <source src={burger} type="video/mp4" />

            </video>

        </div>
    )
}

export default Home