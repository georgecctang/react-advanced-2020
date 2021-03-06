import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { reducer } from './reducer';
// import { data } from '../../../data';

// reducer function

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: ''
}

const Index = () => {

  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = {id: new Date().getTime().toString(), name}
      dispatch({type: 'ADD_ITEM', payload: newItem});
      setName('');
    } else {
      dispatch({type: 'NO_VALUE'})
    }
  }

  const closeModal = () => {
    dispatch({type: "CLOSE_MODAL"});
  }

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} closeModal = {closeModal}/>}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input type="text" value={name} onChange={handleChange}></input>
          <button type="submit">Add</button>
        </div>
      </form>
      {state.people.map(person => {
        const {id, name} = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: id})}>remove</button>
          </div>
        )
      })}
    </>

  );
};

export default Index;
