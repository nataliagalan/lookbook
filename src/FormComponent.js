import React from 'react'
import { Button, Form } from 'semantic-ui-react'

import './index.css';

class FormComponent extends React.Component {

  state = {
    name: '',
    email: '',
    linkedIn: '',
    phone: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,     
    });
  }

  handleSubmitForm = (e) => {
    e.preventDefault();
    let newContact = this.state
    this.setState({
      name: '',
      email: '',
      linkedIn: '',
      phone: ''
    })
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newContact)
    }
    fetch('http://localhost:3000/contacts', reqObj)
      .then(res => res.json())
      .then(this.props.addNewContact);
  }

 render(){
   const { name, email, phone, linkedIn } = this.state
   return (
    <Form onSubmit={(e) => this.handleSubmitForm(e)}>
      <Form.Field>
        <label style={{color: "white"}}>Name</label>
        <input 
          placeholder='Name' 
          name='name'
          type="text" 
          value={name}
          onChange={this.handleChange} />
      </Form.Field>
      <Form.Field>
        <label style={{color: "white"}}>Email</label>
        <input 
          placeholder='Email'
          name='email' 
          type="text" 
          value={email}
          onChange={this.handleChange} />
      </Form.Field>
      <Form.Field>
        <label style={{color: "white"}}>LinkedIn</label>
        <input 
          placeholder='LinkedIn' 
          name='linkedIn'
          type="text"
          value={linkedIn}
          onChange={this.handleChange} />
      </Form.Field>
      <Form.Field>
        <label style={{color: "white"}}>Phone</label>
        <input 
          placeholder='Phone'
          name='phone'
          type="number"
          value={phone}
          onChange={this.handleChange} />
      </Form.Field>
      <Button type='submit'>Add Contact</Button>
    </Form>
   )
 }
}

export default FormComponent 

