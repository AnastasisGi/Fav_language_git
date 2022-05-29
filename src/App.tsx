import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import Results from './Components/Results';
import { useState } from 'react';
import Header from './Components/Header';

interface Iinfo {
  username: string;
  language: string;
}



function App() {
  const [info, setInfo] = useState<Iinfo>({ username: '', language: '' });
  const [displayResultBlock, setDisplayResultBlock] = useState<boolean>(false)
  return (
    <div className="App">
      <Header />

      <Form setInfo={setInfo}
      setDisplayResultBlock={setDisplayResultBlock}
      />
      <br></br>
      <Results info={info} 
      displayResultBlock={displayResultBlock} />
    </div>
  );
}

export default App;
