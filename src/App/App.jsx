import React, { Component } from 'react';
import './App.css';
import LocationForm from '../LocationForm.jsx'
import {
  // Switch,
  // Route,
  // Link,
  withRouter
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        city: "",
        state: "",
        units: 'imperial',
        weatherData: null,
        background: 'default',
        error: null,
    }
  }

  setBackground(data) {
    // let bkg = 'default';
      let bkg;
      const { id } = data.weather[0]
      // console.log(id, data.weather[0].id)
      if(id < 300) {
        bkg = 'stormy';
      } else if(id < 600) {
        bkg = 'rainy';
      } else if(id > 600 && id < 800) {
        bkg = 'snowy';
      } else if(id === 800) {
        bkg = 'sunny';
      } else if(id > 800) {
        bkg = 'cloudy';
      }
    return bkg
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { city, state, units } = this.state
    if(!city || ! state) {
      alert('you need to choose a city and state')
      return
    }
    // this.props.history.push(`/weather?city=${city}&state=${state}`)
    let url = 'http://localhost:8000/weather'
    const weatherData = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      // credentials: '*',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "city": city,
        "units": units,
        "state": state
      })
    })
    .then(res => {
      if(res.ok){
        return res.json()
      } else {
        return res.json({error: "There was an problem fetching your weather data"})
      }
    })
    .then(data => {
      return data
    })

    if(weatherData.error) {
      this.setState({error: weatherData.error})
    } else {
      let bkg = this.setBackground(weatherData)
      this.setState({
        weatherData: weatherData,
        background: bkg,
      })
    }
  }

  updateCity = (e) => {
    this.setState({city: e.target.value, error: null})
  }

  updateState = (e) => {
    this.setState({state: e.target.value, error: null})
  }

  render() {
    const { weatherData, background, error } = this.state
    const placeHolder = "--"
    // console.log('App render')

    return (
      <div className={`App ${background} `}>
        <header className="App-header">
          <LocationForm
            handleSubmit={this.handleSubmit}
            updateCity={this.updateCity}
            updateState={this.updateState}
          />
        </header>
        <main>
          <section className="sec-1">
            <div className="error">{error ? error : ""}</div>
            <div className="location">
              <h2>{weatherData == null ? "City" : weatherData.name}</h2>
            </div>
            <div className="sub-temps">
              <p>High: {weatherData == null ? placeHolder : Math.round(weatherData.main.temp_max)}°</p>
              <p>Low: {weatherData == null ? placeHolder : Math.round(weatherData.main.temp_min)}°</p>
            </div>
            <div className="curr-temp">
              <p>Current Temp</p>
              <h2>{weatherData == null ? placeHolder : Math.round(weatherData.main.temp)}°</h2>
              <p>{weatherData == null ? '' : weatherData.weather[0].description}</p>
            </div>
          </section>
  
          <section className="sec-2">
            <div className="sec-2-1">
              <p>Humidity:</p>
              <p>{weatherData == null ? placeHolder : Math.round(weatherData.main.humidity)}%</p>
            </div>
            <div className="sec-2-2">
              <p>Wind:</p>
              <p>{weatherData == null ? placeHolder : Math.round(weatherData.wind.speed)}mph</p>
            </div>
            <div className="sec-2-3">
              <p>Feels Like:</p>
              <p>{weatherData == null ? placeHolder : Math.round(weatherData.main.feels_like)}°</p>
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
 
export default withRouter(App);
