import './App.css';
import LocationForm from '../LocationForm.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LocationForm/>
      </header>
      <main>
        <section>
          <div>
            <p>high: 65</p>
            <p>low: 75</p>
          </div>
          <div>
            <p>Current Temp</p>
            <p>70 deg</p>
          </div>
          
        </section>
        <section>
        <div>
            <p>humidity: 65%</p>
            <p>wind: </p>
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
}
 
export default App;
