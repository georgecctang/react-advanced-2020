import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(divContainer.current.innerHTML);
  }

  // Will not continuously re-render since useRef does not trigger re-render
  useEffect(() => {
    refContainer.current.focus();
  })

  return <>
  <form className="form" onSubmit={handleSubmit}>
    <div>
      <input type="text" ref={refContainer}/>
      <button type="submit">submit</button>
    </div>
  </form>
  <div ref={divContainer}>Hello</div>
  </>
  ;
};

export default UseRefBasics;
