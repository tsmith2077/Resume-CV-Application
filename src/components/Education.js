import React, { Component } from 'react'
import '../styles/General.css'

class Education extends Component {
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

    // Foobar may not need this now.
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

  render() {
    return (
        <div className='education'>
            <h3>Education</h3>
            <div className='eduInfoCont'>
                {this.props.eduArr.map(eduInfo => {
                          return (
                            <form className='eduForm' key={ eduInfo.id }>
                                <div className='inputCont'>
                                    <label htmlFor="schoolInput">Enter School:</label>
                                    <input
                                        onChange={(event) => this.props.onInputChange(event, 'eduArr', 'school', eduInfo.id)}
                                        name="school"
                                        value={this.props.school}
                                        type="text"
                                        className="schoolInput"
                                        required
                                    />
                                    <label htmlFor="titleOfStudyInput">Enter Title of Study:</label>
                                    <input
                                        onChange={(event) => this.props.onInputChange(event, 'eduArr', 'titleOfStudy', eduInfo.id)}
                                        value={this.props.titleOfStudy}
                                        name="titleOfStudy"
                                        type="text"
                                        className="titleOfStudyInput"
                                        required
                                    />
                                    <label htmlFor="dateInput">Enter date of completion:</label>
                                    <input
                                        onChange={(event) => this.props.onInputChange(event, 'eduArr', 'date', eduInfo.id)}
                                        value={this.props.date}
                                        name= "date"
                                        type="date"
                                        className="dateInput"
                                        required
                                    />
                            <div className='btnCont'>
                                <button 
                                    className={eduInfo.id}
                                    onClick={(event) => this.props.onDeleteClick(event, 'education')}>Delete
                                </button>
                            </div>
                                </div>
                            </form>
                        )
                })}
            </div>
            <div className='addBtnCont'>
                <button onClick={(event) => this.props.onAddClick(event, 'education')}>Add</button>
            </div>
        </div>
    )
  }
}

export default Education;