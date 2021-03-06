import React, { useState } from 'react';

const UseStateCounter = () => {

  const [value, setValue] = useState(0)

  return (
    <>
      <section style={{margin: '4rem 0'}}>
        <h2>regular counter</h2>;
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(prev => {return prev > 0 ? prev - 1 : 0})}>-</button>
        <button className="btn" onClick={() => setValue(0)}>O</button>
        <button className="btn" onClick={() => setValue(value+ 1)}>+</button>
        </section>
    </>
  )
};

export default UseStateCounter;
