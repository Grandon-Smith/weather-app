import React, { Component } from 'react';
import StateList from './StateList'

class LocationForm extends Component {
    

    componentDidMount() {
        console.log("CDM", this.state)
    }

    handleSubmit = async () => {

    }


    render() {
        console.log('render', this.state)
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>Enter a Location</legend>
                    <label
                        htmlFor="city"
                        className="visually-hidden">
                            City
                    </label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="City Name"
                        required
                        onChange={e => this.setState({ city: e.target.value })}
                    />
                    <label
                        htmlFor="state"
                        className="visually-hidden">
                            State
                    </label>
                    <select 
                        name="state" 
                        id="state" 
                        required
                        onChange={e => this.setState({ state: e.target.value })}>
                        <StateList/>
                    </select>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        );
    }
}
 
export default LocationForm;