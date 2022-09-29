import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import '../styles/General.css'

class Education extends Component {
    constructor() {
        super();

        this.state = {
            eduArr: [
                {
                    school: 'Colorado University',
                    titleOfStudy: 'Business',
                    date: '',
                    id: uuidv4(),
                    formView: false,
                },
                {
                    school: 'Lee University',
                    titleOfStudy: 'Software Development',
                    date: '',
                    id: uuidv4(),
                    formView: false,
                },
            ],
            school: '',
            titleOfStudy: '',
            date: '',
            formView: true,
        }
    }

    handleChangeSchool = (e) => {
        this.setState({
            school: e.target.value,
        });
    };

    handleChangeTitleOfStudy = (e) => {
        this.setState({
            titleOfStudy: e.target.value,
        });
    };

    handleChangeDate = (e) => {
        this.setState({
            date: e.target.value,
        });
    };
    
    handleAddClick = (e) => {
        e.preventDefault()
        this.setState({
                eduArr: this.state.eduArr.concat(
                {
                    school: this.state.school,
                    titleOfStudy: this.state.titleOfStudy,
                    date: this.state.date,
                    id: uuidv4(),
                    formView: true,
                }
            ),
        })
        return this.renderEduForm()
    }

    handleEditClick = (e) => {
        e.preventDefault()
        const index = this.state.eduArr.findIndex(object => {
            return object.id === e.target.id
        })
        let updatedEduArr = [...this.state.eduArr];
        let item = {...updatedEduArr[index]};
        item.formView = true
        updatedEduArr[index] = item;
        this.setState({
            eduArr: updatedEduArr,
            school: item.school,
            titleOfStudy: item.titleOfStudy,
            date: item.date,
        });
    }

    handleSubmitClick = (e) => {
        e.preventDefault()
        let updatedEduArr = [...this.state.eduArr]
        updatedEduArr = updatedEduArr.filter(item => item.id !== e.target.id)
        updatedEduArr.push ({
            school: this.state.school,
            titleOfStudy: this.state.titleOfStudy,
            date: this.dateFormat(this.state.date),
            id: e.target.id,
            formView: false,
        })
        this.setState({
            eduArr: updatedEduArr,
            school: '',
            titleOfStudy: '',
            date: '',
        })
    }

    dateFormat = (date) => {
        if (date === '') {
            return 'Present'
        } else {
            return this.formattedDate(date)
        }
    }

    formattedDate = (date) => {
        let dateInput = date.split('-')
        const day = dateInput[2]
        const month = dateInput[1]; // Return Value is 0 indexed
        const year = dateInput[0];
        let fullDate = month + "/" + day + "/" + year;
        return fullDate;
    };

    // FOOBAR need to change this to ternary expression to avoid order from changing on updates
    renderEduArr = () => {
        return (
            <div>
                {       
                this.state.eduArr.filter(eduInfo => eduInfo.formView === false).map((filteredEduInfo) => {
                        return (
                            <div key={ filteredEduInfo.id }>
                                <p>School:  {filteredEduInfo.school}</p>
                                <p>Title of Study:  {filteredEduInfo.titleOfStudy}</p>
                                <p>Completion Date:  {filteredEduInfo.date}</p>
                                <div className='btnCont'>
                                    <button onClick={this.handleEditClick} id={filteredEduInfo.id}>Edit</button>
                                </div>
                            </div>
                        )
                })
                }
                {this.state.eduArr.filter(eduInfo => eduInfo.formView === true).map((filteredEduInfo) => {
                        return (
                            <form key={ filteredEduInfo.id }>
                                <label htmlFor="schoolInput">Enter School:</label>
                                <input
                                    onChange={this.handleChangeSchool}
                                    value={this.state.school}
                                    type="text"
                                    className="schoolInput"
                                    required
                                />
                                <label htmlFor="titleOfStudyInput">Enter Title of Study:</label>
                                <input
                                    onChange={this.handleChangeTitleOfStudy}
                                    value={this.state.titleOfStudy}
                                    type="text"
                                    className="titleOfStudyInput"
                                    required
                                />
                                <label htmlFor="dateInput">Enter date of completion:</label>
                                <input
                                    onChange={this.handleChangeDate}
                                    value={this.state.date}
                                    type="date"
                                    className="dateInput"
                                    required
                                />
                                <div className='btnCont'>
                                    <button onClick={this.handleSubmitClick} id={filteredEduInfo.id} >Submit</button>
                                </div>
                            </form>
                        )
                    })
                }
            </div>
        ) 
    }

    renderEduForm = () => {
        return (
            <form>
                <label htmlFor="schoolInput">Enter School:</label>
                <input
                    onChange={this.handleChangeSchool}
                    value={this.state.school}
                    type="text"
                    id="schoolInput"
                    required
                />
                <label htmlFor="titleOfStudyInput">Enter Title of Study:</label>
                <input
                    onChange={this.handleChangeTitleOfStudy}
                    value={this.state.titleOfStudy}
                    type="text"
                    id="titleOfStudyInput"
                    required
                />
                <label htmlFor="dateInput">Enter date of completion:</label>
                <input
                    onChange={this.handleChangeDate}
                    value={this.state.date}
                    type="date"
                    id="dateInput"
                    required
                />
                <div className='btnCont'>
                    <button onClick={this.handleSubmitEditClick}>Submit</button>
                </div>
            </form>
        )
    }

    showEduInfo = () => {
        return (
        <div>
            <p>School:  {this.state.school}</p>
            <p>Title of Study:  {this.state.titleOfStudy}</p>
            <p>Completion Date:  {this.state.date}</p>
            <div className='btnCont'>
                <button onClick={this.handleEditClick}>Edit</button>
                <button onClick={this.handleAddClick}>Add</button>
            </div>
        </div>
        )
    }

    // handleAddClick = () => {
    //     return (
    //         <>
    //         {this.renderEduArr()},
    //         {this.renderEduForm()}
    //         </>
    //     )
    // }

    renderEducation = () => {
        return (
            this.state.formView ? (
                this.renderEduForm()
            ) : (
                this.showEduInfo()
            )
        )
    }

  render() {
    return (
        <div>
            <h3>Education</h3>
            {
                this.renderEduArr()
            }
            <button onClick={this.handleAddClick}>Add</button>
        </div>
    )
  }
}

export default Education;