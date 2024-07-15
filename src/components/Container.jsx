import React from 'react'

function Container(props) {
  return (
    <div className='max-w-[1240px] px-5 m-auto py-5'>
        {props.children}
    </div>
  )
}

export default Container