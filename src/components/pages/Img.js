import React from 'react'

function Img(props) {
    return (

        <img src={props.src} className="p-1 rounded" alt={props.alt} />

    )
}

export default Img
