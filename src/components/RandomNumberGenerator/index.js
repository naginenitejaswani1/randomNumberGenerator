import React, { useState } from 'react'


const RandomNumberGenerator = () => {

    const [number, setNumber] = useState(0);

    const onGenerate = () => {
        setNumber(number + Math.ceil(Math.random() * 100))
    }

  return (
    <div>
        <h1>Generate a Random Number : {number}</h1>
        <button onClick={onGenerate}>Generate</button>
    </div>
  )
}

export default RandomNumberGenerator