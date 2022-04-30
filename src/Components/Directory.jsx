import React from 'react'

export default function Directory(props) {
  return (
    <div style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        border: '2px solid white',
    }} className='h-[75vh] w-[70vw] flex flex-col items-center z-40 rounded-xl'>
        <div className="navbar relative w-full h-[50px]" style={{
            borderBottom: '2px solid white',
            backgroundColor: 'rgba(0, 255, 102, 0.7)'
        }}>
            <h1 className="text-black font-[700] pt-2">{props.currentDir}</h1>
            <i style={{ fontSize: '30px' }} onClick={() => {
                props.setOpened(false);
            }} className="px-2 -translate-y-[90%] fa-solid fa-square-xmark text-white absolute right-0"></i>

        </div>

       {props.slot} 

    </div>
  )
}
