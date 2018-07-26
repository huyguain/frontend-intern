import React, { Component } from 'react';
import './App.css';
import { FormInput } from './components/FormInput';
import { MainSection } from './components/MainSection';
import { Footer } from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormInput/>
        <MainSection/>
        <Footer/>
      </div>
    );
  }
}
            
export default App;
  