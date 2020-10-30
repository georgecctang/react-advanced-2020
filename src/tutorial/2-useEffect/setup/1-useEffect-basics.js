import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  console.log('rendering...');

  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log('1. useEffect with dependencies');
    if (value >= 1) {
      document.title=`NewMessages(${value})`
    }
  },[value])

  useEffect(() => {
    console.log('2. useEffect without dependencies')
  },[]);
  return (
    <>
    <h2>{value}</h2>
    <button className="btn" onClick={() => setValue(value + 1)}>click me</button>
    </>
  );
};

export default UseEffectBasics;
