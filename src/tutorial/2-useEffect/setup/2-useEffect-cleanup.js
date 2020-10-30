import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {

  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  }
  useEffect(() => {
    console.log('add');
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
      console.log('remove');
    }
  })

  return (
    <>
    <h2>{size} px</h2>
    </>
    );

    
};

export default UseEffectCleanup;
