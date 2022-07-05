import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const CreatePost = () => {
    const [inputValue, setInputValue] = useState('');
    const [loaded, setLoaded] = useState(false);
    const [close, setClose] = useState(false);
  
    const onInputChange = (e) => {
      setInputValue(e.target.value);
    }
  
    const onCloseHandler = () => {
      setClose(true);
      setInputValue('');
    }
  
    const sendData = async (e) => {   
      e.preventDefault();
      const response = await fetch('http://localhost:7070/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({id: 0, content: inputValue})
      });
      response.ok ? setLoaded(true) : console.log('Проблема');
    }
    return (
      <React.Fragment>
        <form action="" onSubmit={sendData}>
          <input value={inputValue} type="text" onChange={onInputChange} required />
          <button>Опубликовать</button>
        </form>
        <button style={{marginTop: 10}} onClick={onCloseHandler}>Закрыть</button>
        {loaded || close ? <Navigate to="/" /> : null}
      </React.Fragment>
    )
  }

export default CreatePost;