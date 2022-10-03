import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import '../styles/General.css'

class Education extends Component {
    constructor() {
        super();

        this.state = {
            eduArr: [],
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

    handleDeleteClick = (e) => {
        e.preventDefault()
        this.setState({
            eduArr: this.state.eduArr.filter(eduInfo => {
                return eduInfo.id !== e.target.className
            })
        }) 
    }

    handleEditClick = (e) => {
        e.preventDefault()
        const index = this.state.eduArr.findIndex(object => {
            return object.id === e.target.className
        })
        let updatedEduArr = [...this.state.eduArr];
        let item = {...updatedEduArr[index]};
        item.formView = true
        updatedEduArr[index] = item;
        this.setState({
            eduArr: updatedEduArr,
            school: item.school,
            titleOfStudy: item.titleOfStudy,
            date: this.formatDateForEdit(item.date),
        });
    }

    handleSubmitClick = (e) => {
        e.preventDefault()
        const index = this.state.eduArr.findIndex(object => {
            return object.id === e.target.className
        })
        let updatedEduArr = [...this.state.eduArr];
        let item = {...updatedEduArr[index]};
        item = {
            school: this.state.school,
            titleOfStudy: this.state.titleOfStudy,
            date: this.formattedDate(this.state.date),
            id: e.target.className,
            formView: false,
        }
        updatedEduArr[index] = item;
        this.setState({
            eduArr: updatedEduArr,
            school: '',
            titleOfStudy: '',
            date: '',
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

    showEduForm = (eduInfo) => {
        return (
            <form key={ eduInfo.id }>
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
                    <button onClick={this.handleSubmitClick} className={eduInfo.id} >Submit</button>
                </div>
            </form>
        )
    }

    showEduInfo = (eduInfo) => {
        return (
            <div key={eduInfo.id}>
                <p>School:  {eduInfo.school}</p>
                <p>Title of Study:  {eduInfo.titleOfStudy}</p>
                <p>Completion Date:  {eduInfo.date}</p>
                <div className='btnCont'>
                    <button onClick={this.handleEditClick} className={eduInfo.id}>Edit</button>
                    <button onClick={this.handleDeleteClick} className={eduInfo.id} >Delete</button>
                </div>
            </div>
        )
    }

    renderEduArr = () => {
        return (
            <div>
                {this.state.eduArr.map(eduInfo => {
                    if (eduInfo.formView === true) {
                        return (
                            this.showEduForm(eduInfo)
                        )
                    } else {
                        return (
                           this.showEduInfo(eduInfo)
                        )
                    }
                })
                }
            </div>
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