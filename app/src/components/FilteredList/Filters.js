import React, { Component } from 'react';
import InputFields from './fields/InputField';
 import SelectField from './fields/SelectField';
 import {Utils} from '../../common';

export default class Filters extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}


	render() {
    const { onInputChange, launchPads, launches } = this.props;
    const launchPadNames = launchPads.map( launchPad => launchPad.full_name);
    const launchDates = launches.map( launch => Utils.getYear(launch.launch_date_local));

    console.log('launchPadNames', Object.keys(launchPadNames).map( key => launchPadNames[key]) );
    
    console.log('launchDates', launchDates);
		return (
			<div className="filters--wrapper">
				<InputFields
					labelText="Keyword"
					onInputChange={event => onInputChange('keyword', event.target.value)}
				/>
				<SelectField labelText="Launch Pad" options={launchPadNames} onInputChange={event => onInputChange('launch', event.target.value)}/>
    {/* <SelectField labelText="Min Year" options={}/>
    <SelectField labelText="Max Year" options={}/> */}
			</div>
		);
	}
}
