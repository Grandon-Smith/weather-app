import moment from 'moment';

export function generateHourlyWeather(moreWeatherData) {
    let time = new Date().getHours()
    moreWeatherData = moreWeatherData.hourly.slice(0, 10)
    return moreWeatherData.map((h, idx) =>
        <div className={`sec-3-${idx}`} key={idx}>
            <p>{ moment((time+idx+1), 'HH:mm:ss').format('h A') }</p>
            <p>{ Math.round(h.temp) }°</p>
            <div className="icon-wrapper-hourly">
                    { <img src={`http://openweathermap.org/img/wn/${h.weather[0].icon}@2x.png`}
                    alt={`icon for ${h.weather[0].description}`}/> }
            </div>
            <p>{ h.weather[0].main }</p>
        </div>
    )
}

export function generateWeeklyWeather(moreWeatherData) {
    let day = new Date();
    console.log(moreWeatherData)
    moreWeatherData = moreWeatherData.daily
    return moreWeatherData.map((d, idx) => {
        return (
            <div className={`sec-4-${idx}`} key={idx}>
                <p>{ moment(day).add([idx+1], 'd').format('ddd') }</p>
                <p>{ d.temp.day }°</p>
                <div className="icon-wrapper-daily">
                    { <img src={`http://openweathermap.org/img/wn/${d.weather[0].icon}@2x.png`}
                    alt={`icon for ${d.weather[0].description}`}/> }
                </div>
            </div>
        )
    })
}

export function setBackground(data) {
    let bkg;
    const { id } = data.weather[0]
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