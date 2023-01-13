import React from 'react'
import '../styles/cvForm.css'

class CvForm extends React.Component {
    formattedDate = (date) => {
        if (date === '') {
            return ''
        } else if (date.includes('/')) {
            return date
        } else {
            let dateInput = date.split('-')
            const day = dateInput[2]
            const month = dateInput[1];
            const year = dateInput[0];
            let fullDate = month + "/" + day + "/" + year;
            console.log(fullDate)
            return fullDate;
        }
    };

    render(){
        return (
            <>
            <div className='genCont'>
                <h2 className='name'>{this.props.cvFormInfo.general.name}</h2>
                <div className='contactDataCont'>
                    <h4 className='contactHeader'>Contact</h4>
                    <p>Email:   {this.props.cvFormInfo.general.email}</p>
                    <p>Phone:   {this.props.cvFormInfo.general.phone}</p>
                </div>
            </div>
            <div className='expCont'>
                <h3 className='expHeader'>Experience</h3>
                <div className='expDataCont'>
                    {this.props.cvFormInfo.expArr.map(expInfo => {
                        return(
                            <div key={expInfo.id}>
                                <p>Company: {expInfo.company}</p>
                                <p>Position: {expInfo.position}</p>
                                <p>Tasks: {expInfo.tasks}</p>
                                <p>Start Date: {this.formattedDate(expInfo.startDate)}</p>
                                <p>End Date: {this.formattedDate(expInfo.endDate)}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='eduCont'>
                <h3 className='eduHeader'>Education</h3>
                <div className='eduDataCont'>
                    {this.props.cvFormInfo.eduArr.map(eduInfo => {
                        return(
                            <div key={eduInfo.id}>
                                <p>School: {eduInfo.school}</p>
                                <p>Title of Study: {eduInfo.titleOfStudy}</p>
                                <p>Date Completed: {this.formattedDate(eduInfo.dateCompleted)}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            </>
        )
    }
}

export default CvForm;