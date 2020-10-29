import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({name:'peter', age:24, message:'random message'});

  const changeMessage = () => {
    const message = 'another one';
    setPerson({...person, message});
  }
  return (
    <>
      <h3>Name: {person.name}</h3>
      <h3>Age: {person.age}</h3>
      <h3>Message: {person.message}</h3>
      <button className="btn" onClick={changeMessage}>change message</button>
    </>
  );
};

export default UseStateObject;
