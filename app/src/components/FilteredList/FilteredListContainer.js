import React, { Component } from 'react';
import Filters from './Filters';
import { ApiUtils } from '../../common';
import List from './List';

export default class FilteredListContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			launches: []
		};

		this.getAllLaunches();
	}

	getAllLaunches = async () => {
		const response = await fetch(ApiUtils.launchesUrl, ApiUtils.getOptions);
		const launches = await response.json();
		console.log('launches', launches);
		this.setState({ launches });
	};

	render() {
		return (
			<div className="content-wrapper">
				<Filters />
				<List list={this.state.launches} />
			</div>
		);
	}
}
