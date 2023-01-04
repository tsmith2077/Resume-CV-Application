import React, { Component } from 'react'
import General from './General';
import CvForm from './CvForm'

class ContainerComponent extends Component{
    constructor() {
        super();
        this.state = {
            name: '',
        }
    }   

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render() {
        return(
            <div>
                <General name={this.state.name} />
                <CvForm handleChange={this.handleClick.bind(this)} name={this.state.name} />
            </div>
        )
    }
}

export default ContainerComponent;