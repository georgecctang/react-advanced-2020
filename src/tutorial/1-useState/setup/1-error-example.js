import React from 'react';

const ErrorExample = () => {

  const title = 'random title';
  const handleClick = () => {
    title = 'helloooo';
    console.log(title);
  }
  return (
    <>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>change title</button>
    </>
  )
};

export default ErrorExample;
