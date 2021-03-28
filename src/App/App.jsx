import React, { Component } from 'react';
import './App.css';
import LocationForm from '../LocationForm.jsx'
import { render } from '@testing-library/react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        city: "",
        state: "",
    }
  }

  

  render() { 
    return (
      <div className="App">
        <header className="App-header">
          <LocationForm/>
        </header>
        <main>
          <section className="sec-1">
            <div className="location">
              <p>Newtown</p>
            </div>
            <div className="sub-temps">
              <p>high: 65</p>
              <p>low: 75</p>
            </div>
            <div className="curr-temp">
              <p>Current Temp</p>
              <p>70 deg</p>
            </div>
          </section>
  
          <section className="sec-2">
          <div>
              <p>humidity: 65%</p>
              <p>wind: 5mph SSW</p>
            </div>
            <div>
              <p>Current Temp</p>
              <p>70 deg</p>
            </div>
          </section>
        </main>
        <footer>
          Powered By <a href="https://openweathermap.org/api">Open Weather Map</a>
        </footer>
        
      </div>
    );
  };
};
 
export default App;
