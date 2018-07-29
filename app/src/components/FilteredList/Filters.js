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
    const { onInputChange, launchPads, launches, applyAllFilters } = this.props;
    const launchPadNames = launchPads.map( launchPad => launchPad.full_name);
    const launchDates = launches.map( launch => Utils.getYear(launch.launch_date_local));

		return (
			<div className="filters--wrapper">
				<InputFields
					labelText="Keyword"
					onInputChange={event => onInputChange('keyword', event.target.value)}
				/>
				<SelectField labelText="Launch Pad" options={Object.keys(launchPadNames).map( key => launchPadNames[key])} onInputChange={event => onInputChange('launch pad name', event.target.value)}/>
        <SelectField labelText="Min Year" options={[...new Set(launchDates)]} onInputChange={event => onInputChange('min year', event.target.value)}/>
        <SelectField labelText="Max Year" options={[...new Set(launchDates)]} onInputChange={event => onInputChange('max year', event.target.value)}/>
        <button className="button" onClick={applyAllFilters}>Apply</button>
			</div>
		);
	}
}
