import moment from 'moment';

export function generateHourlyWeather(moreWeatherData) {
    let time = new Date().getHours()
    moreWeatherData = moreWeatherData.hourly.slice(0, 10)
    return moreWeatherData.map((h, idx) =>
        <div className={`sec-3-${idx}`} key={idx}>
            <p>{ moment((time+idx+1), 'HH:mm:ss').format('h A') }</p>
            <p>{ Math.round(h.temp) }°</p>
            <p>{ h.weather[0].main }</p>
        </div>
    )
}

export function generateWeeklyWeather() {
    
}