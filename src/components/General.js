import React, { Component } from 'react'
import '../styles/General.css'

class General extends Component {
    state = {

    }
  render() {
    return (
        <div className='general'>
            <h3>General Info</h3>
            <div className='genInfoCont'>
                {
                this.props.general.formView ? (
                <form>
                    <label htmlFor="nameInput">Enter full name:</label>
                    <input
                        onChange={(event) => this.props.onInputChange(event, 'general', 'name')}
                        value={this.state.name}
                        name="name"
                        type="text"
                        id="nameInput"
                        required
                    />
                    <label htmlFor="emailInput">Enter email:</label>
                    <input
                        onChange={(event) => this.props.onInputChange(event)}
                        value={this.state.email}
                        name="email"
                        type="text"
                        id="emailInput"
                        required
                    />
                    <label htmlFor="phoneInput">Enter phone number:</label>
                    <input
                        onChange={(event) => this.props.onInputChange(event)}
                        value={this.state.phone}
                        name="phone"
                        type="text"
                        id="nameInput"
                        required
                    />
                    <div className='btnCont'>
                        <button onClick={(event) => this.props.onSubmitEditClick(event, this.state)}>Submit</button>
                    </div>
                </form>
                ) : (
                <div className='genInfo'>
                    <div className='textCont'>
                        <p>Name:  {this.props.general.name}</p>
                        <p>Email:  {this.props.general.email}</p>
                        <p>Phone:  {this.props.general.phone}</p>
                    </div>
                    <div className='btnCont'>
                        <button onClick={(event) => this.props.onSubmitEditClick(event, this.props.general)}>Edit</button>
                    </div>
                </div>
                )
                }
            </div>
        </div>
        
    )
  }
}

export default General;