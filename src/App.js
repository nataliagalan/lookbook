import React from 'react';
import './App.css';
import FormComponent from './FormComponent'
import Contacts from './Contacts'


class App  extends React.Component {

  state = {
    contacts: [],
  }

  componentDidMount() {
    fetch('http://localhost:3000/contacts')
      .then(res => res.json())
      .then(data => this.setState({contacts: data}) );
  }

  addNewContact = (newContact) => {
    this.setState({contacts: [...this.state.contacts, newContact]})
  }

  deleteContact = (id) => {
    fetch(`http://localhost:3000/contacts/${id}`, {method: 'DELETE'})
      .then(res => res.json())
      .then(this.updateAfterDelete());
  }

  updateAfterDelete = () => {
    this.componentDidMount(); 
  }

 render(){
   return (
    <div className="App">
      <header className="App-header">
       <FormComponent 
        addNewContact={this.addNewContact}
        />
       <br></br>
       <br></br>
       <Contacts 
        contacts={this.state.contacts}
        deleteContact={this.deleteContact}
        />
      </header>
    </div>
   )
 }
}

export default App
