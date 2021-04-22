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
                                defaultChecked={localStorage.getItem('units') === 'imperial'}
                                onChange={e => this.props.settingsChangeUnits(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Metric: </label>
                            <input 
                                type="radio" 
                                name="unit" 
                                value="metric"
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
                                defaultChecked={localStorage.getItem('units') === 'imperial'}
                                onChange={e => this.props.settingsChangeTheme(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Dark Theme: </label>
                            <input 
                                type="radio" 
                                name="theme"
                                value="dark"
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