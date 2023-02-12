import React from 'react'

const About = () => {
    const centeredtext = {
        'paddingLeft': '25%',
        'paddingRight': '25%',
    }
    return (
        <div style={centeredtext}>
            <h1>About Us</h1>
            <p>Taste Buds was founded by Larry "Bud" Stepstone in 1992 after leaving a failing acting career.  Bud figured 
                that his family would be able to work in the restaurant and he could provide the community with
                amazing burgers, sandwiches, and fries.</p>

            <p>With the passing of Bud in 2007, his son Troy looked to continue the tradition while expanding the business.</p>

            <p>The grand opening of our second location in [FIXME] took place in 2009.</p>

            <p>We now have six locations in the area and we're looking to expand.</p>
        </div>
    )
}

export default About