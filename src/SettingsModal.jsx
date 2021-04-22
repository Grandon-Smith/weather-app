import React, { Component } from 'react';

class SettingsModal extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="settings-modal">
                <form>
                    <div className="units-select">
                        <h3>Units:</h3>
                        <div>
                            <label>Imperial: </label>
                            <input 
                                type="radio" 
                                name="unit" 
                                value='imperial' 
                                defaultChecked={localStorage.units === 'imperial'}
                                onChange={e => this.props.settingsChangeUnits(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Metric: </label>
                            <input 
                                type="radio" 
                                name="unit" 
                                value="metric"
                                defaultChecked={localStorage.units === 'metric'}
                                onChange={e => this.props.settingsChangeUnits(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="theme-select">
                        <h3>Display:</h3>
                        <div>
                            <label>Light Theme: </label>
                            <input 
                                type="radio" 
                                name="theme"
                                value="light"
                                defaultChecked={localStorage.theme === 'light'}
                                onChange={e => this.props.settingsChangeTheme(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Dark Theme: </label>
                            <input 
                                type="radio" 
                                name="theme"
                                value="dark"
                                defaultChecked={localStorage.theme === 'dark'}
                                onChange={e => this.props.settingsChangeTheme(e.target.value)}
                            />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
 
export default SettingsModal;