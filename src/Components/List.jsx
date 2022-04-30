import React, { useState } from 'react'

export default function List(props) {
    const [currentHover, setCurrentHover] = useState(false);

    return (
        <div onMouseEnter={() => {
            setCurrentHover(true)
        }} onMouseLeave={() => {
            setCurrentHover(false)
        }} className='w-full flex items-center gap-6 h-[20%] justify-evenly'>
            <h1 className="text-white font-[700]">{props.ghost}</h1>
            <i className={`fa-solid fa-arrow-right ${!currentHover ? "invisible" : "visible"}`}></i>
        </div>
    )
}
