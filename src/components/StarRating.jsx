import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export function StarRating({rating}) {

    // Optinal callback functions
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value,index) => console.log(value, index)

    return (
        <div className='App'>
            <Rating
                className='flex flex-row'
                
                size={25}
                initialValue={rating}
                readonly={true}
                allowFraction={true}
                SVGclassName='inline-block'
                
            /* Available Props */
            />
        </div>
    )
}

export default StarRating