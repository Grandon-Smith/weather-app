import React, { Component } from 'react';

class SettingsModal
 extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="settings-modal">
                <label class="switch">
                    <input type="checkbox"/>
                    <span class="slider round"></span>
                </label>
            </div>
        );
    }
}
 
export default SettingsModal;