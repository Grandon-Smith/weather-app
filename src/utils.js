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

export function generateWeeklyWeather(moreWeatherData) {
    // let dayArr = ['Sun','Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']
    let time = new Date().now()
    
    console.log(time)
    console.log(moreWeatherData)
    moreWeatherData = moreWeatherData.daily
    return moreWeatherData.map((d, idx) => {
        return (
            <div className={`sec-4-${idx}`} key={idx}>
                <p>{ `sjfdlk` }</p>
                <p>{ `num` }°</p>
                <p>{ `icon?` }</p>
            </div>
        )
    })
}