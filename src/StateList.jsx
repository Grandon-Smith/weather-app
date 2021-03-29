import React, { Component } from 'react';
import STATES from './STATES'

class StateList extends Component {
    render() { 
        return STATES.map((s, idx) => {
            return (
                <option
                    key={idx}
                    defaultValue={s.abbreviation.toLowerCase()}
                >
                        {s.abbreviation}
                </option>
            )
        })
    }
}
 
export default StateList
;