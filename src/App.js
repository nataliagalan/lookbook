import React from 'react';
import './App.css';
import Form from './Form'
import Contacts from './Contacts'


class App  extends React.Component {

 render(){
   return (
    <div className="App">
      <header className="App-header">
       <Form />
       <Contacts />
      </header>
    </div>
   )
 }
}

export default App
