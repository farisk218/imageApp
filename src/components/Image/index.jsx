import React from 'react'
import style from "./image.module.scss";


export default function Image({url,...otherProps}) {
    const handleError=({target}) =>{
        target.src='https://via.placeholder.com/150/92c952';
    }

    const handleClick=({target}) =>{
        alert(target.src)
    }
    return (
        <img className={style.img} src={url} {...otherProps} onError={handleError} onClick={handleClick}/>
    )
}
