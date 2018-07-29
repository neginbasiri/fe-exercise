import React, { Component } from 'react';
import Filters from './Filters';
import { ApiUtils } from '../../common';
import List from './List';

export default class FilteredListContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			launches: [],
			launchPads: [],
			filteredList: []
		};

		this.getAllLaunches();
		this.getAllLaunchPads();
	}

	getAllLaunchPads = async () => {
		const response = await fetch(ApiUtils.launchpadsUrl, ApiUtils.getOptions);
		const launchPads = await response.json();
		console.log('launchPads', launchPads);
		this.setState({ launchPads });
	};

	getAllLaunches = async () => {
		const response = await fetch(ApiUtils.launchesUrl, ApiUtils.getOptions);
		const launches = await response.json();
		console.log('launches', launches);
		this.setState({ launches, filteredList: launches });
	};

	onInputChange = (filterType, value) => {
		switch (filterType) {
			case 'keyword':
				this.filterByKeyword(value);
				break;
			case 'launch':
				this.filterByLaunch(value);
				break;

			default:
				return;
		}
	};

	filterByKeyword = keyword => {
	
		const filteredList = this.state.launches.filter( launch => {
			const { flight_number, payloads, rocket } = launch;
			const { rocket_name } = rocket;
			const payload_id = payloads.length > 0 ? payloads[0].payload_id : null;

			return rocket_name.includes(keyword) || flight_number.toString() === keyword || payload_id.includes(keyword);
		});

		!keyword ? this.setState({ filteredList: this.state.launches }) : this.setState({ filteredList });
	};


	filterByLaunch = keyword => {

		const matchedLaunchPads = this.state.launchPads.filter(launchPad => launchPad.full_name === keyword);

		console.log('matchedLaunchPads', matchedLaunchPads);

		const filteredList = this.state.launches.filter( launch => {
			const { launch_site } = launch;
			const { site_id } = launch_site;
			
			return matchedLaunchPads.find( launchPads => launchPads.id === site_id);
		});

		!keyword ? this.setState({ filteredList: this.state.launches }) : this.setState({ filteredList });
	}

	render() {
		return (
			<div className="content-wrapper">
				<Filters onInputChange={this.onInputChange} launchPads={this.state.launchPads} launches={this.state.launches}/>
				<List list={this.state.filteredList} launchPads={this.state.launchPads} />
			</div>
		);
	}
}
