import './styles/App.css';
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import CvForm from './components/CvForm';


class App extends Component {
  state = {
    general: {      
      name: '',
      email: '',
      phone: '',
    },
    eduArr: [{
      school: '',
      titleOfStudy: '',
      dateCompleted: '',
      id: uuidv4(),
    }],
    expArr: [{
      company: '',
      position: '',
      tasks: '',
      startDate: '',
      endDate: '',
      id: uuidv4()
    }],
  }

  handleInputChange = (event, category, subsection) => {
    let updatedState = {...this.state};
    updatedState[category][subsection] = event.target.value;
    this.setState({ updatedState });
  }

  handleInputChangeArr = (event, category, subsection, itemId) => {
    let updatedState = {...this.state};
    let itemIndex = updatedState[category].findIndex((currentIndex) => {
      return currentIndex.id === itemId;
    })
    updatedState[category][itemIndex][subsection] = event.target.value;
    this.setState({ updatedState });
  }

  handleAddClick = (event, section) => {
    event.preventDefault()
    if (section === 'experience') {
      this.setState({
        expArr: this.state.expArr.concat(
        {
            company: "",
            position: "",
            tasks: "",
            startDate: "",
            endDate: "",
            id: uuidv4(),
        }
        )
      }) 
    } else {
      this.setState({
        eduArr: this.state.eduArr.concat(
        {
            school: this.state.school,
            titleOfStudy: this.state.titleOfStudy,
            date: this.state.date,
            id: uuidv4(),
        }
    )
      })
    }
  }

  handleDeleteClick = (event, section) => {
    event.preventDefault()
    if (section === 'experience') {
      this.setState({
        expArr: this.state.expArr.filter(expItem => {
            return expItem.id !== event.target.className
        })
      }) 
    } else {
      this.setState({
        eduArr: this.state.eduArr.filter(eduItem => {
            return eduItem.id !== event.target.className
        })
    }) 
    }
  }

  render() {
    return (
      <>
        <div className="App">
          <Header />
          <General 
            onInputChange={this.handleInputChange} 
            general={this.state.general}
          />
          <Education 
            onInputChange={this.handleInputChangeArr} 
            onAddClick={this.handleAddClick}
            onDeleteClick={this.handleDeleteClick}
            eduArr={this.state.eduArr}
          />
          <Experience 
            onInputChange={this.handleInputChangeArr} 
            onAddClick={this.handleAddClick}
            onDeleteClick={this.handleDeleteClick}
            expArr={this.state.expArr}
          />
        </div>
        <div className='resume'>
          <CvForm 
            cvFormInfo={this.state}
          />
        </div>
      </>
    );
  }
}

export default App;
