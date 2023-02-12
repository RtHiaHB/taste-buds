import React from 'react'

const About = () => {
    const centeredtext = {
        'paddingLeft': '25%',
        'paddingRight': '25%',
    }
    return (
        <div style={centeredtext}>
            <h1>About Us</h1>
            <h2>History</h2>
            <p>Taste Buds was founded by Larry "Bud" Stepstone in 1992 after leaving a failing acting career.  Bud figured 
                that his family would be able to work in the restaurant and he could provide the community with
                amazing burgers, sandwiches, and fries.</p>

            <p>With the passing of Bud in 2007, his son Troy looked to continue the tradition while expanding the business.</p>

            <p>The grand opening of our second location in [FIXME] took place in 2009.</p>

            <p>We now have six locations in the area and we're looking to expand.</p>

            <h2>Hours</h2>
            <b>Monday:</b> 12pm - 10pm<br />
            <b>Tuesday:</b> 12pm - 10pm<br />
            <b>Wednesday:</b> 12pm - 10pm<br />
            <b>Thursday:</b> 12pm - 10pm<br />
            <b>Friday:</b> 12pm - 12am<br />
            <b>Saturday:</b> 12pm - 12am<br />
            <b>Sunday:</b> CLOSED
            <p></p>
            <h2>Our Employee of the Month</h2>
            <p>Our employee of the month for this month is Erica Ilona!  Congratulations, Erica, and great work!</p>
        </div>
    )
}

export default About