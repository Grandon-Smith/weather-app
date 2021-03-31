
export function generateHourlyWeather(moreWeatherData) {
    moreWeatherData = moreWeatherData.hourly.slice(0, 10)
    return moreWeatherData.map((h, idx) =>
        <div className={`sec-3-${idx}`} key={idx}>
        <p>Time +</p>
        <p>{Math.round(h.temp)}°</p>
        <p>{h.weather[0].main}</p>
        </div>
    )
}