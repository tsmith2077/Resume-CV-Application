import React, { Component } from 'react'
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
    
    handleSumbitEditClick = (e) => {
        e.preventDefault()
        this.setState({
                eduArr: this.state.eduArr.concat(
                {
                    school: this.state.school,
                    titleOfStudy: this.state.titleOfStudy,
                    date: this.state.date,
                }
            ),
            formView: !this.state.formView,
        })
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
                    <button onClick={this.handleSumbitEditClick}>Submit</button>
                    <button onClick={this.handleAddClick}>Add</button>
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
                <button onClick={this.handleSumbitEditClick}>Edit</button>
                <button onClick={this.handleAddClick}>Add</button>
            </div>
        </div>
        )
    }

    // handleAddClick = () => {
    //     this.setState(eduArr => {
    //         return [...eduArr, {
    //             school: this.state.school,
    //             titleOfStudy: this.state.titleOfStudy,
    //             date: this.state.date,
    //             formView: true,
    //         }]
    //       })
    // }

  render() {

    return (
        <div>
            <h3>Education</h3>
            {
            this.state.formView ? (
                this.renderEduForm()
            ) : (
                this.showEduInfo()
            )
            }
        </div>
    )
  }
}

export default Education;