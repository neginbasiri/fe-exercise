import React, { Component } from 'react';
import Filters from './Filters';
import { ApiUtils, Utils } from '../../common';
import List from './List';

export default class FilteredListContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedKeyword: '',
			selectedLaunchPad: '',
			selectedMinYear: '',
			selectedMaxYear: '',
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
		const { launches } = this.state;
		let filteredList = [];

		switch (filterType) {
			case 'keyword':
				filteredList = launches.filter(launch => this.filterByKeyword(launch, value));
				!value
					? this.setState({ selectedKeyword: '', filteredList: this.state.launches })
					: this.setState({ selectedKeyword: value, filteredList });
				break;
			case 'launch pad name':
				filteredList = launches.filter(launch => this.filterByLaunch(launch, value));
				!value
					? this.setState({ selectedLaunchPad: '', filteredList: this.state.launches })
					: this.setState({ selectedLaunchPad: value, filteredList });
				break;
			case 'min year':
				filteredList = launches.filter(launch => this.filterByMinYear(launch, value));
				!value
					? this.setState({ selectedMinYear: '', filteredList: this.state.launches })
					: this.setState({ selectedMinYear: value, filteredList });
				break;
			case 'max year':
				filteredList = launches.filter(launch => this.filterByMaxYear(launch, value));
				!value
					? this.setState({ selectedMaxYear: '', filteredList: this.state.launches })
					: this.setState({ selectedMaxYear: value, filteredList });
				break;
			default:
				return;
		}
	};

	applyAllFilters = () => {
		const { launches, selectedMinYear, selectedMaxYear, selectedLaunchPad, selectedKeyword } = this.state;

		if (selectedMaxYear < selectedMinYear) {
			alert('Selected year rage is invalid');
		}

		const filteredList = launches
			.filter(launch => this.filterByKeyword(launch, selectedKeyword))
			.filter(launch => this.filterByLaunch(launch, selectedLaunchPad))
			.filter(launch => this.filterByMinYear(launch, selectedMinYear))
			.filter(launch => this.filterByMaxYear(launch, selectedMaxYear));

		this.setState({ filteredList });
	};

	filterByKeyword = (launch, selectedKeyword) => {
		const { flight_number, payloads, rocket } = launch;
		const { rocket_name } = rocket;
		const payload_id = payloads.length > 0 ? payloads[0].payload_id : null;

		return (
			rocket_name.includes(selectedKeyword) ||
			flight_number.toString() === selectedKeyword ||
			payload_id.includes(selectedKeyword)
		);
	};

	filterByLaunch = (launch, selectedLaunchPad) => {
		const { launchPads } = this.state;
		const matchedLaunchPads = launchPads.filter(launchPad => launchPad.full_name === selectedLaunchPad);

		const { launch_site } = launch;
		const { site_id } = launch_site;

		return matchedLaunchPads.find(launchPads => launchPads.id === site_id);
	};

	filterByMinYear = selectedMinYear => {
		const filteredList = this.state.launches.filter(launch => {
			const { launch_date_local } = launch;

			return Utils.getYear(launch_date_local) >= selectedMinYear;
		});

		return filteredList;
	};

	filterByMaxYear = selectedMaxYear => {
		const filteredList = this.state.launches.filter(launch => {
			const { launch_date_local } = launch;

			return Utils.getYear(launch_date_local) <= selectedMaxYear;
		});

		return filteredList;
	};

	render() {
		return (
			<div className="content-wrapper">
				<Filters
					applyAllFilters={this.applyAllFilters}
					onInputChange={this.onInputChange}
					launchPads={this.state.launchPads}
					launches={this.state.launches}
				/>
				<List list={this.state.filteredList} launchPads={this.state.launchPads} />
			</div>
		);
	}
}
