import React, { Component } from 'react';
import './App.css';
import LocationForm from '../LocationForm.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        city: "",
        state: "",
        weatherData: null,
        error: null
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    let url = 'http://localhost:8000/weather'
    const weatherData = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      // credentials: '*',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "city": this.state.city,
        "units": "imperial",
        "state": this.state.state
      })
    })
    .then(res => {
      if(res.ok){
        return res.json()
      } else {
        // return res.json({error: "There was an problem fetching your weather data"})
      }
    })
    console.log(weatherData)
    this.setState({
      city: "",
      state: "",
      weatherData: weatherData})
  }

  updateCity = (e) => {
    this.setState({city: e.target.value})
  }

  updateState = (e) => {
    this.setState({state: e.target.value})
  }

  render() {
    const { weatherData } = this.state
    const placeHolder = "--"
    console.log('App render', this.state)

    return (
      <div className="App">
        <header className="App-header">
          <LocationForm
          handleSubmit={this.handleSubmit}
          updateCity={this.updateCity}
          updateState={this.updateState}/>
        </header>
        <main>
          <section className="sec-1">
            <div className="location">
              <p>{weatherData == null ? "City" : weatherData.name}</p>
            </div>
            <div className="sub-temps">
              <p>high: {weatherData == null ? placeHolder : weatherData.main.temp_max}°</p>
              <p>low: {weatherData == null ? placeHolder : weatherData.main.humidity}°</p>
            </div>
            <div className="curr-temp">
              <p>Current Temp</p>
              <p>{weatherData == null ? placeHolder : weatherData.main.temp}°</p>
            </div>
          </section>
  
          <section className="sec-2">
          <div>
              <p>Current Temp</p>
              <p>70 deg</p>
            </div>
          <div>
              <p>humidity: {weatherData == null ? placeHolder : weatherData.main.temp_max}%</p>
              <p>wind: {weatherData == null ? placeHolder : weatherData.wind.speed}%</p>
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
