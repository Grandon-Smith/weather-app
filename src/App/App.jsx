import React, { Component } from 'react';
import './App.css';
import LocationForm from '../LocationForm.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        city: "",
        state: "",
        units: 'imperial',
        weatherData: null,
        error: null
    }
  }

   
  componentDidMount() {
    console.log("App CDM")
}

  handleSubmit = async (e) => {
    e.preventDefault()
    const { city, state, units } = this.state
    if(!city || ! state) {
      alert('you need to choose a city and state')
    }
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
              <p>{weatherData == null ? placeHolder : Math.round(weatherData.main.temp_max)}%</p>
            </div>
            <div className="sec-2-2">
              <p>Wind:</p>
              <p>{weatherData == null ? placeHolder : Math.round(weatherData.wind.speed)}%</p>
            </div>
            <div className="sec-2-3">
              <p>Feels Like:</p>
              <p>{weatherData == null ? placeHolder : Math.round(weatherData.wind.speed)}°</p>
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
