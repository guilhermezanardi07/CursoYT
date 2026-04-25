import React from 'react'
import "./Card.css";

interface Props {}

const Card = (props: Props) => {
  return (
    <div className='card'>
        <div className='details'>
            <img src="https://media.newyorker.com/photos/60df663b833fa66507c7515e/1:1/w_1679,h_1679,c_limit/Gopnik-Little-Liberty.jpg" alt="Estátua da liberdade" />
            <h2>AAPL</h2>
            <p>$110</p>
        </div>
        <p className='infon'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, laboriosam.</p>
    </div>
  )
}

export default Card