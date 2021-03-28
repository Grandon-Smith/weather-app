import React, { Component } from 'react';
import STATES from './STATES'

class StateList extends Component {
    render() { 
        return STATES.map((s, idx) => {
            return (
                <option key={idx} value={s.abbreviation.toLowerCase()}>{s.name}</option>
            )
        })
    }
}
 
export default StateList
;