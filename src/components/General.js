import React, { Component } from 'react'
import '../styles/General.css'

class General extends Component {
    render() {
        return (
            <div className='general'>
                <h3>General Info</h3>
                <div className='genInfoCont'>
                    <form>
                        <label htmlFor="nameInput">Enter full name:</label>
                        <input
                            onChange={(event) => this.props.onInputChange(event, 'general', 'name')}
                            value={this.props.name}
                            name="name"
                            type="text"
                            id="nameInput"
                            required
                        />
                        <label htmlFor="emailInput">Enter email:</label>
                        <input
                            onChange={(event) => this.props.onInputChange(event, 'general', 'email')}
                            value={this.props.email}
                            name="email"
                            type="text"
                            id="emailInput"
                            required
                        />
                        <label htmlFor="phoneInput">Enter phone number:</label>
                        <input
                            onChange={(event) => this.props.onInputChange(event, 'general', 'phone')}
                            value={this.props.phone}
                            name="phone"
                            type="text"
                            id="nameInput"
                            required
                        />
                    </form>
                </div>
            </div> 
        )
    }
}

export default General;