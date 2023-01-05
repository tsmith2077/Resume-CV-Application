import './styles/App.css';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';
import { Component } from 'react';


class App extends Component {
  state = {
    general: {      
      name: '',
      email: '',
      phone: '',
    },
    expArr: [{
      company: '',
      position: '',
      tasks: '',
      startDate: '',
      endDate: '',
      id: uuidv4(),
  }],
  }

  // Need to be able to use changedItem to update state
  handleInputChange = (event, category, subsection) => {
    let updatedState = {...this.state};
    updatedState[category][subsection] = event.target.value;
    console.log(updatedState)
    this.setState({ updatedState });
  }

  handleInputChangeArr = (event, category, subsection, itemId) => {
    let updatedState = {...this.state};
    let itemIndex = updatedState[category].findIndex((currentIndex) => {
      return currentIndex.id === itemId;
    })
    updatedState[category][itemIndex][subsection] = event.target.value;
    console.log(updatedState)
    this.setState({ updatedState });
  }

  handleAddClick = (event) => {
    event.preventDefault()
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
        ),
    })
  }

  handleDeleteClick = (event, itemId) => {
    event.preventDefault()
    this.setState({
        expArr: this.state.expArr.filter(expItem => {
            return expItem.id !== event.target.className
        })
    }) 
}

  handleSubmitEditClick = (event, newState) => {
    event.preventDefault()
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
            expArr={this.state.eduArr}
          />
          <Experience 
            onInputChange={this.handleInputChangeArr} 
            onAddClick={this.handleAddClick}
            onDeleteClick={this.handleDeleteClick}
            expArr={this.state.expArr}
          />
        </div>
      </>
    );
  }
}

export default App;
