import React from 'react'
import './index.css';

class ContactCard extends React.Component {

  state = {
    important: false
  }

  toggleImportant = () => {
    this.setState(prevState => {
      return {important: !prevState.important}
    })
  }


 render(){
   const {name, email, phone, linkedIn, id} = this.props.contactObj

   return (
   <div>
     <div className="ui card">
      <div className="content">
        {
        this.state.important ? 
          (<a className="header" id="important">{name}</a>)
        :
          (<a className="header">{name}</a>)
        }
        <div className="meta">
          <span className="date">{email}</span>
        </div>
        <div className="description">
          <i className="phone icon"></i>
          <p>{phone}</p>
          <a href={linkedIn}>
            <i className="linkedin icon"></i>
          </a>
        </div>
      </div>
      <div className="extra content">
        <a onClick={this.toggleImportant}>
        {
        this.state.important ? 
          (<i className="yellow star icon"></i>)
        :
          (<i className="star icon"></i>)
        } 
        </a>
        <a onClick={() => this.props.deleteContact(id)}>
          <i className="remove icon"></i>
        </a>
      </div>
    </div>
   </div>
   )
 }
}

export default ContactCard
