import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import '../styles/General.css'


// FOOBAR can't edit tasks but it shows the same as position on input
class Experience extends Component {
    constructor() {
        super();

        this.state = {
            expArr: [{
                company: '',
                position: '',
                tasks: '',
                startDate: '',
                endDate: '',
                id: uuidv4(),
                formView: true,
            }],
            company: '',
            position: '',
            tasks: '',
            startDate: '',
            endDate: '',
            id: uuidv4(),
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

    handleAddClick = (e) => {
        e.preventDefault()
        this.setState({
                expArr: this.state.expArr.concat(
                {
                    company: this.state.company,
                    position: this.state.position,
                    tasks: this.state.tasks,
                    startDate: this.state.startDate,
                    endDate: this.state.endDate,
                    id: uuidv4(),
                    formView: true,
                }
            ),
        })
    }

    handleDeleteClick = (e) => {
        e.preventDefault()
        this.setState({
            expArr: this.state.expArr.filter(expInfo => {
                return expInfo.id !== e.target.className
            })
        }) 
    }

    handleEditClick = (e) => {
        e.preventDefault()
        const index = this.state.expArr.findIndex(object => {
            return object.id === e.target.className
        })
        let updatedExpArr = [...this.state.expArr];
        let item = {...updatedExpArr[index]};
        item.formView = true
        updatedExpArr[index] = item;
        this.setState({
            expArr: updatedExpArr,
            company: item.company,
            position: item.position,
            tasks: item.tasks,
            startDate: this.formatDateForEdit(item.startDate),
            endDate: this.formatDateForEdit(item.endDate),
        });
    }

    handleSubmitClick = (e) => {
        e.preventDefault()
        const index = this.state.expArr.findIndex(object => {
            return object.id === e.target.className
        })
        let updatedExpArr = [...this.state.expArr];
        let item = {...updatedExpArr[index]};
        item = {
            company: this.state.company,
            position: this.state.position,
            tasks: this.state.tasks,
            startDate: this.formattedDate(this.state.startDate),
            endDate: this.formattedDate(this.state.endDate),
            id: e.target.className,
            formView: false,
        }
        updatedExpArr[index] = item;
        this.setState({
            expArr: updatedExpArr,
            company: '',
            position: '',
            tasks: '',
            startDate: '',
            endDate: '',
        });
    }

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

    showExpForm = (expInfo) => {
        return (
            <form key={expInfo.id}>
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
                    value={this.state.tasks}
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
                    value={this.state.endDate}
                    type="date"
                    id="endDateInput"
                    required
                />
                <div className='btnCont'>
                    <button onClick={this.handleSubmitClick} className={expInfo.id}>Submit</button>
                </div>
            </form>
        )
    }

    showExpInfo = (expInfo) => {
        return (
            <div className='expInfo' key={expInfo.id}>
                <div className='textCont'>
                    <p>Company:  {expInfo.company}</p>
                    <p>Position:  {expInfo.position}</p>
                    <p>Tasks:  {expInfo.tasks}</p>
                    <p>Start Date:  {expInfo.startDate}</p>
                    <p>End Date:  {expInfo.endDate}</p>
                </div>
                <div className='btnCont'>
                    <button onClick={this.handleEditClick} className={expInfo.id}>Edit</button>
                    <button onClick={this.handleDeleteClick} className={expInfo.id}>Delete</button>
                </div>
            </div>
        )
    }

    renderExpArr = () => {
        return (
            <div className='expInfoCont'>
                {this.state.expArr.map(expInfo => {
                    if (expInfo.formView === true) {
                        return (
                            this.showExpForm(expInfo)
                        )
                    } else {
                        return (
                           this.showExpInfo(expInfo)
                        )
                    }
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
                <button onClick={this.handleAddClick}>Add</button>
            </div>
        </div>
    )
  }
}

export default Experience;