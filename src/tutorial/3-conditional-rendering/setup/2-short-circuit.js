import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {

  const [text, setText] = useState('');
  const [isError, setIsError] = useState(false);
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';

  return (
    <>
    <h1>{text || 'john doe'}</h1>
    {text && <h1>Hello</h1>}
    <button className="btn" onClick={() => setIsError(!isError)}>toggle error</button>
    {/**Ternery operator */}
    {isError ? <h3>there's an error</h3> : <p>there is no error</p>}
    {/**Short circuit evaluation */}
    {isError && <h1>Error...</h1>}
    </>

  )
};

export default ShortCircuit;
