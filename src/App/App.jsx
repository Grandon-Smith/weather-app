import React, { Component } from 'react';
import './App.css';
import LocationForm from '../LocationForm.jsx'
import { withRouter } from 'react-router-dom';
import gear from '../photos/icon-settings-gear.png';
import SettingsModal from '../SettingsModal';
import { 
  generateHourlyWeather,
  generateWeeklyWeather, 
  setBackground 
} from '../utils';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        city: "",
        state: "",
        units: 'imperial',
        showModal: false,
        weatherData: null,
        background: 'default',
        error: null,
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const { city, state, units } = this.state
    if(!city) {
      this.setState({error: `Please select a city.`})
      return
    } else if(!state) {
      this.setState({error: `Please select a state.`})
      return
    }
    let url = 'https://weather-app--api.herokuapp.com/weather'
    const allWeatherData = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
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
    .catch(err =>{
      console.log(err)
    })
    if(allWeatherData.error) {
      this.setState({error: allWeatherData.error})
    } else {
      let bkg = setBackground(allWeatherData.firstWeatherData)
      this.setState({
        weatherData: allWeatherData,
        background: bkg,
      })
    }
  }

  toggleSettings = () => {
    console.log('modal toggled!')
    this.setState((prevState) =>({showModal: !prevState.showModal}))
  }

  updateCity = (e) => {
    this.setState({city: e.target.value, error: null})
  }

  updateState = (e) => {
    this.setState({state: e.target.value, error: null})
  }

  render() {
    const { weatherData, background, error, showModal } = this.state;
    const placeHolder = "--"
    let firstWeatherData;
    let moreWeatherData;
    if(weatherData !== null) {
      firstWeatherData = this.state.weatherData.firstWeatherData;
      moreWeatherData = this.state.weatherData.moreWeatherData;
    }
    
    return (
      <div className={`App `}>
        <div className={`${background}`}>
        <header className="App-header">
          <LocationForm
            handleSubmit={this.handleSubmit}
            updateCity={this.updateCity}
            updateState={this.updateState}
          />
        </header>
        <main>
          <section className="sec-1">
            <button className="gear-img-wrapper" onClick={this.toggleSettings}>
              <img src={gear} alt="settings gear icon"/>
            </button>
            <div className="error">{error ? error : ""}</div>
            <div className="location">
              <h2>{weatherData == null ? "City" : firstWeatherData.name}</h2>
            </div>
            <div className="sub-temps">
              <p>High: {weatherData == null ? placeHolder : Math.round(firstWeatherData.main.temp_max)}°</p>
              <p>Low: {weatherData == null ? placeHolder : Math.round(firstWeatherData.main.temp_min)}°</p>
            </div>
            <div className="curr-temp">
              <p>Current Temp</p>
              <h2>{weatherData == null ? placeHolder : Math.round(firstWeatherData.main.temp)}°</h2>
              <p>{weatherData == null ? '' : firstWeatherData.weather[0].description}</p>
            </div>
          </section>
  
          <section className="sec-2">
            <div className="sec-2-1">
              <p>Humidity:</p>
              <p>{weatherData == null ? placeHolder : Math.round(firstWeatherData.main.humidity)}%</p>
            </div>
            <div className="sec-2-2">
              <p>Wind:</p>
              <p>{weatherData == null ? placeHolder : Math.round(firstWeatherData.wind.speed)}mph</p>
            </div>
            <div className="sec-2-3">
              <p>Feels Like:</p>
              <p>{weatherData == null ? placeHolder : Math.round(firstWeatherData.main.feels_like)}°</p>
            </div>
          </section>

          <section className="sec-3">
            {weatherData == null ? '' : generateHourlyWeather(moreWeatherData)}
          </section>

          <section className="sec-4">
            {weatherData == null ? '' : generateWeeklyWeather(moreWeatherData)}
          </section>
          
        </main>
        <footer>
          Powered By <a href="https://openweathermap.org/api" target="_blank" rel="noreferrer">Open Weather Map</a>
        </footer>
        </div>
      </div>
    );
  };
};
 
export default withRouter(App);
