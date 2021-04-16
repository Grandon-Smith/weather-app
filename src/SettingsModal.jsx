import React, { Component } from 'react';

class SettingsModal
 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="settings-modal">
                <div className="units-select">
                    <h3>Units:</h3>
                    <label>Imperial: </label>
                    <input 
                        type="radio" 
                        name="unit" 
                        value="imperial" 
                        checked
                    />
                    <label>Metric: </label>
                    <input 
                        type="radio" 
                        name="unit" 
                        value="metric"
                    />
                </div>
                <div className="theme-select">
                    <h3>Display:</h3>
                    <label>Light Theme: </label>
                    <input 
                        type="radio" 
                        name="theme" 
                        checked
                    />
                    <label>Dark Theme: </label>
                    <input 
                        type="radio" 
                        name="theme"
                    />
                </div>
            </div>
        );
    }
}
 
export default SettingsModal;