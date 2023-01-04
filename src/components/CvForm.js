import React from 'react'

class CvForm extends React.Component {

    render(){
        return (
            <div className='genInfo'>
                <div className='textCont'>
                    <p>Name:  {this.props.name}</p>

                </div>
                <div className='btnCont'>
                    <button onClick={this.handleSubmitEditClick}>Edit</button>
                </div>
            </div>
        )
    }
}

/* <p>Email:  {this.props.email}</p>
<p>Phone:  {this.props.phone}</p> */

export default CvForm;