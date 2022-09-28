import React, { Component } from 'react'
import '../styles/General.css'

class Experience extends Component {
    constructor() {
        super();

        this.state = {
            company: '',
            position: '',
            tasks: '',
            startDate: '',
            endDate: '',
            formView: true,
        }
    }

    handleChangeCompany = (e) => {
        this.setState({
            company: e.target.value,
        });
    };

    handleChangePosition = (e) => {
        this.setState({
            position: e.target.value,
        });
    };

    handleChangeTasks = (e) => {
        this.setState({
            tasks: e.target.value,
        });
    };

    handleChangeStartDate = (e) => {
        this.setState({
            startDate: e.target.value,
        });
    };

    handleChangeEndDate = (e) => {
        this.setState({
            endDate: e.target.value,
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
            <h3>Experience</h3>
            {
            this.state.formView ? (
            <form>
                <label htmlFor="companyInput">Enter Company:</label>
                <input
                    onChange={this.handleChangeCompany}
                    value={this.state.company}
                    type="text"
                    id="companyInput"
                    required
                />
                <label htmlFor="positionInput">Enter Position:</label>
                <input
                    onChange={this.handleChangePosition}
                    value={this.state.position}
                    type="text"
                    id="positionInput"
                    required
                />
                <label htmlFor="tasksInput">Enter Tasks:</label>
                <input
                    onChange={this.handleChangeTasks}
                    value={this.state.position}
                    type="textarea"
                    id="tasksInput"
                    required
                />
                <label htmlFor="startDateInput">Enter start date:</label>
                <input
                    onChange={this.handleChangeStartDate}
                    value={this.state.startDate}
                    type="date"
                    id="startDateInput"
                    required
                />
                <label htmlFor="endDateInput">Enter end date:</label>
                <input
                    onChange={this.handleChangeEndDate}
                    value={this.state.date}
                    type="date"
                    id="endDateInput"
                    required
                />
                <div className='btnCont'>
                    <button onClick={this.handleSumbitEditClick}>Submit</button>
                </div>
            </form>
            ) : (
            <div>
                <p>Company:  {this.state.company}</p>
                <p>Position:  {this.state.position}</p>
                <p>Tasks:  {this.state.tasks}</p>
                <p>Start Date:  {this.state.startDate}</p>
                <p>End Date:  {this.state.endDate}</p>
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

export default Experience;