import React from 'react'

type Props = {}

const Card = (props: Props) => {
  return (
    <div className='card'>
        <div className='details'>
            <h2>AAPL</h2>
            <p>$110</p>
        </div>
    </div>
  )
}

export default Card