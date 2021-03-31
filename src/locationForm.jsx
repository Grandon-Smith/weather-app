import React, { Component } from 'react';
import StateList from './StateList'

class LocationForm extends Component {

    render() {
        return (
            <form onSubmit={e => this.props.handleSubmit(e)}>
                <fieldset>
                    <legend>Enter a Location</legend>
                    <div className="input-container">
                        <label
                            htmlFor="city"
                            className="visually-hidden">
                                City
                        </label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            className="city-search"
                            placeholder="City Name"
                            required
                            autoFocus={true}
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
                            className="state-search" 
                            onChange={e => this.props.updateState(e)}
                            defaultValue="State"
                        >
                            <option defaultValue={null} disabled hidden>State</option>
                            <StateList/>
                        </select>
                    </div>
                    <button className="btn-search" type="submit">Search</button>
                </fieldset>
            </form>
        );
    }
}
 
export default LocationForm;