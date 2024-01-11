import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export function StarRating() {
    const [rating, setRating] = useState(0)

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)

        // other logic
    }
    // Optinal callback functions
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value,index) => console.log(value, index)

    return (
        <div className='App'>
            <Rating
                className='flex flex-row'
                onClick={handleRating}
                size={25}
                initialValue={3.5}
                readonly={true}
                allowFraction={true}
                SVGclassName='inline-block'
                
            /* Available Props */
            />
        </div>
    )
}

export default StarRating