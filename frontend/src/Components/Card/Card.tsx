import React from 'react'

type Props = {}

const Card = (props: Props) => {
  return (
    <div className='card'>
        <div className='details'>
            <h2>AAPL</h2>
            <p>$110</p>
        </div>
        <p className='infon'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, laboriosam.</p>
    </div>
  )
}

export default Card