import React, { Component } from 'react'
import ContactCard from './ContactCard';

class Contacts extends Component {
  render() {
    //console.log(this.props.contacts);
    return (
      <div className='ui three cards'>
        {
        this.props.contacts.map((contactObj, idx) => {
          return <ContactCard 
          contactObj={contactObj} 
          deleteContact={this.props.deleteContact}
          key={idx}
          />
        })
        }
      </div>
    )
  }
}

export default Contacts