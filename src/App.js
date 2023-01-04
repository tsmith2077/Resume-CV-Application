import './styles/App.css';
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
      formView: true,
    }
  }

  // Need to be able to use changedItem to update state
  handleInputChange = (event, category, subsection) => {
    let updatedState = {...this.state};
    updatedState[category][subsection] = event.target.value;
    console.log(updatedState)
    this.setState({ updatedState });
  }

  handleSubmitEditClick = (event, newState) => {
    event.preventDefault()
    let updatedState = newState;
    return console.log(updatedState);
    updatedState.formView = !updatedState.formView;
    this.setState({
        formView: !this.state.formView,
    })
  }

  render() {
    return (
      <>
        <div className="App">
          <Header />
          <General 
            onInputChange={this.handleInputChange} 
            onSubmitEditClick={this.handleSubmitEditClick} 
            general={this.state.general}
          />
          <Education />
          <Experience />
        </div>
      </>
    );
  }
}

export default App;
