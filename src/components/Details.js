// React Elements
import React from 'react';

// Image in SRC folder -- Need to figure out
import image from './details.png'

// CSS


// Components
import Poster from '../components/Poster';


function Details() {
    return (
        <div className="cap">
            <img 
                src={image}
                alt="review" 
            />
        </div>
    )
}

export default Details