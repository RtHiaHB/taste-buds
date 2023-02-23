import React from 'react'

const Locations = () => {
    return (
        <div>
            <h1>LOCATIONS</h1> 
         <iframe className='Maps' width="873" height="625" id="gmap_canvas" src="https://maps.google.com/maps?q=Ralegh%20nc&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
         <h1>Six main Locations</h1>
         <ul>
            <li>S Main StFuquay-Varina, NC 27526</li>
            <li>401 E Main StClayton, NC 27520</li>
            <li>Poole RdRaleigh, NC</li>
            <li>Glenwood AveRaleigh, NC</li>
            <li>North Hills DrRaleigh, NC</li>
            <li>8021 Falls of Neuse Rd, Raleigh, NC 27615</li>
         </ul>

        </div>
    )
}

export default Locations