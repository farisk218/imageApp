import React from 'react'

export default function Image({url,...otherProps}) {
    const handleError=({target}) =>{
        target.src='https://via.placeholder.com/150/92c952';
    }

    const handleClick=({target}) =>{
        alert(target.src)
    }
    return (
        <img src={url} {...otherProps} onError={handleError} onClick={handleClick}/>
    )
}
