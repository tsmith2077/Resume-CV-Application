import React, { Component } from 'react'
import '../styles/General.css'


// FOOBAR can't edit tasks but it shows the same as position on input
class Experience extends Component {
    // handleSubmitClick = (e) => {
    //     e.preventDefault()
    //     const index = this.state.expArr.findIndex(object => {
    //         return object.id === e.target.className
    //     })
    //     let updatedExpArr = [...this.state.expArr];
    //     let item = {...updatedExpArr[index]};
    //     item = {
    //         company: this.state.company,
    //         position: this.state.position,
    //         tasks: this.state.tasks,
    //         startDate: this.formattedDate(this.state.startDate),
    //         endDate: this.formattedDate(this.state.endDate),
    //         id: e.target.className,
    //         formView: false,
    //     }
    //     updatedExpArr[index] = item;
    //     this.setState({
    //         expArr: updatedExpArr,
    //         company: '',
    //         position: '',
    //         tasks: '',
    //         startDate: '',
    //         endDate: '',
    //     });
    // }

    formattedDate = (date) => {
        if (date === '') {
            return ''
        } else if (date.includes('/')) {
            return date
        } else {
            console.log(date)
            let dateInput = date.split('-')
            const day = dateInput[2]
            const month = dateInput[1];
            const year = dateInput[0];
            let fullDate = month + "/" + day + "/" + year;
            return fullDate;
        }
    };

    formatDateForEdit = (date) => {
        if (date === '') {
            return ''
        } else {
            let dateInput = date.split('/')
            const day = dateInput[1]
            const month = dateInput[0];
            const year = dateInput[2];
            let fullDate = year + "-" + month + "-" + day;
            return fullDate;
        }
    } 

    renderExpArr = () => {
        return (
            <div className='expInfoCont'>
                {this.props.expArr.map(expInfo => {
                    return (
                        <form key={expInfo.id}>
                        <label htmlFor="companyInput">Enter Company:</label>
                        <input
                            onChange={(event) => this.props.onInputChange(event, 'expArr', 'company', expInfo.id)}
                            value={this.props.company}
                            name="company"
                            type="text"
                            id="companyInput"
                            required
                        />
                        <label htmlFor="positionInput">Enter Position:</label>
                        <input
                            onChange={(event) => this.props.onInputChange(event, 'expArr', 'position', expInfo.id)}
                            value={this.props.company}
                            name="position"
                            type="text"
                            id="positionInput"
                            required
                        />
                        <label htmlFor="tasksInput">Enter Tasks:</label>
                        <input
                            onChange={(event) => this.props.onInputChange(event, 'expArr', 'tasks', expInfo.id)}
                            value={this.props.company}
                            name="tasks"
                            type="textarea"
                            id="tasksInput"
                            required
                        />
                        <label htmlFor="startDateInput">Enter start date:</label>
                        <input
                            onChange={(event) => this.props.onInputChange(event, 'expArr', 'startDate', expInfo.id)}
                            value={this.props.company}
                            name="startDate"
                            type="date"
                            id="startDateInput"
                            required
                        />
                        <label htmlFor="endDateInput">Enter end date:</label>
                        <input
                            onChange={(event) => this.props.onInputChange(event, 'expArr', 'endDate', expInfo.id)}
                            value={this.props.company}
                            name="endDate"
                            type="date"
                            id="endDateInput"
                            required
                        />
                        <div className='btnCont'>
                            <button 
                                className={expInfo.id}
                                onClick={(event) => this.props.onDeleteClick(event, expInfo.id)}>Delete
                            </button>
                        </div>
                    </form>
                    )
                })
                }
            </div>
        ) 
    }

  render() {
    return (
        <div className='experience'>
            <h3>Experience</h3>
            {
                this.renderExpArr()
            }
            <div className='addBtnCont'>
                <button onClick={(event) => this.props.onAddClick(event)}>Add</button>
            </div>
        </div>
    )
  }
}

export default Experience;