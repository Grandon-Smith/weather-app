import React, { Component } from 'react';

class SettingsModal extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="settings-modal">
                <form>
                    <div className="units-select">
                        <h3>Units:</h3>
                        <label>Imperial: </label>
                        <input 
                            type="radio" 
                            name="unit" 
                            value="imperial" 
                            defaultChecked
                            onChange={e => this.props.settingsChangeUnits(e.target.value)}
                        />
                        <label>Metric: </label>
                        <input 
                            type="radio" 
                            name="unit" 
                            value="metric"
                            onChange={e => this.props.settingsChangeUnits(e.target.value)}
                        />
                    </div>
                    <div className="theme-select">
                        <h3>Display:</h3>
                        <label>Light Theme: </label>
                        <input 
                            type="radio" 
                            name="theme"
                            value="light"
                            defaultChecked
                            onChange={e => this.props.settingsChangeTheme(e.target.value)}
                        />
                        <label>Dark Theme: </label>
                        <input 
                            type="radio" 
                            name="theme"
                            value="dark"
                            onChange={e => this.props.settingsChangeTheme(e.target.value)}
                        />
                    </div>
                </form>
            </div>
        );
    }
}
 
export default SettingsModal;