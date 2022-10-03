import React, { Component } from 'react'
import '../styles/General.css'

class General extends Component {
    constructor() {
        super();

        this.state = {
            generalArr: [],
            name: '',
            email: '',
            phone: '',
            formView: true,
        }
    }

    handleChangeName = (e) => {
        this.setState({
            name: e.target.value,
        });
    };

    handleChangeEmail = (e) => {
        this.setState({
            email: e.target.value,
        });
    };

    handleChangePhone = (e) => {
        this.setState({
            phone: e.target.value,
        });
    };
    
    handleSumbitEditClick = (event) => {
        event.preventDefault()
        this.setState({
            formView: !this.state.formView,
        })
    }

  render() {

    return (
        <div>
            <h3>General Info</h3>
            {
            this.state.formView ? (
            <form>
                <label htmlFor="nameInput">Enter name:</label>
                <input
                    onChange={this.handleChangeName}
                    value={this.state.name}
                    type="text"
                    id="nameInput"
                    required
                />
                <label htmlFor="emailInput">Enter email:</label>
                <input
                    onChange={this.handleChangeEmail}
                    value={this.state.email}
                    type="text"
                    id="emailInput"
                    required
                />
                <label htmlFor="phoneInput">Enter phone number:</label>
                <input
                    onChange={this.handleChangePhone}
                    value={this.state.phone}
                    type="text"
                    id="nameInput"
                    required
                />
                <div className='btnCont'>
                    <button onClick={this.handleSumbitEditClick}>Submit</button>
                </div>
            </form>
            ) : (
            <div>
                <p>Name:  {this.state.name}</p>
                <p>Email:  {this.state.email}</p>
                <p>Phone:  {this.state.phone}</p>
                <div className='btnCont'>
                    <button onClick={this.handleSumbitEditClick}>Edit</button>
                </div>
            </div>
            )
            }
        </div>
    )
  }
}

export default General;