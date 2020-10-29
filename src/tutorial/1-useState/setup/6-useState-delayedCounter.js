import React, { useState } from 'react';

const UseStateCounter = () => {

  const [value, setValue] = useState(0)

  const increaseCount = () => {
    setTimeout(()=>{
      // must use function to grab the previous value
      setValue(prev => prev + 1);
    }, 1000);
  }

  return (
    <>
      <section style={{margin: '4rem 0'}}>
        <h2>regular counter</h2>;
        <h1>{value}</h1>
        <button className="btn" onClick={increaseCount}>+</button>
        </section>
    </>
  )
};

export default UseStateCounter;
