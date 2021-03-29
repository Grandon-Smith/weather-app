import React, { Component } from 'react';
import StateList from './StateList'

class LocationForm extends Component {
    
    componentDidMount() {
        console.log("CDM")
    }

    render() {
        console.log('LF render')
        return (
            <form onSubmit={e => this.props.handleSubmit(e)}>
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
                        onChange={e => this.props.updateCity(e)}
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
                        onChange={e => this.props.updateState(e)}
                        defaultValue="State"
                    >
                        <option defaultValue="State" disabled hidden>State</option>
                        <StateList/>
                    </select>
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        );
    }
}
 
export default LocationForm;