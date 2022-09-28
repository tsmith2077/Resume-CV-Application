import React from 'react'

function AddEduction( {props} ) {
    const {eduArr} = props
  return (
    <div>
        {eduArr.map((eduInfo) => {
            return (
                <div>
                    <p>School:  {eduInfo.school}</p>
                    <p>Title of Study:  {eduInfo.titleOfStudy}</p>
                    <p>Completion Date:  {eduInfo.date}</p>
                    <div className='btnCont'>
                        <button onClick={this.handleSumbitEditClick}>Edit</button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default AddEduction