import React, { Component } from 'react'
import '../styles/General.css'

class General extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            phone: '',
            formView: true,
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    
    handleSubmitEditClick = (event) => {
        event.preventDefault()
        this.setState({
            formView: !this.state.formView,
        })
    }

  render() {

    return (
        <div className='general'>
            <h3>General Info</h3>
            <div className='genInfoCont'>
                {
                this.state.formView ? (
                <form>
                    <label htmlFor="nameInput">Enter full name:</label>
                    <input
                        onChange={this.handleInputChange}
                        value={this.state.name}
                        name="name"
                        type="text"
                        id="nameInput"
                        required
                    />
                    <label htmlFor="emailInput">Enter email:</label>
                    <input
                        onChange={this.handleInputChange}
                        value={this.state.email}
                        name="email"
                        type="text"
                        id="emailInput"
                        required
                    />
                    <label htmlFor="phoneInput">Enter phone number:</label>
                    <input
                        onChange={this.handleInputChange}
                        value={this.state.phone}
                        name="phone"
                        type="text"
                        id="nameInput"
                        required
                    />
                    <div className='btnCont'>
                        <button onClick={this.handleSubmitEditClick}>Submit</button>
                    </div>
                </form>
                ) : (
                <div className='genInfo'>
                    <div className='textCont'>
                        <p>Name:  {this.state.name}</p>
                        <p>Email:  {this.state.email}</p>
                        <p>Phone:  {this.state.phone}</p>
                    </div>
                    <div className='btnCont'>
                        <button onClick={this.handleSubmitEditClick}>Edit</button>
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