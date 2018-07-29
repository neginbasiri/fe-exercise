import React, { Component } from 'react';
import LinkButtons from './LinkButtons';
import { Utils } from '../../common';

export default class ListRow extends Component {
	// constructor(props) {
	// 	super(props);

	// 	this.state = {};
	// }

	findLaunchPadFullName = site_id => {
		const { launchPads } = this.props;
		const launchPad = launchPads.find(launchPad => launchPad.id === site_id);
		return launchPad ? launchPad.full_name : null;
	};

	render() {
		const { links, rocket, payloads, launch_date_local, flight_number, launch_site } = this.props;
		const { mission_patch } = links;
		const { rocket_name } = rocket;
		const payload_id = payloads.length > 0 ? payloads[0].payload_id : '';
		const { site_id } = launch_site;

		return (
			<div className="list-row">
				<img className="list-row--image" src={mission_patch} alt="Mission" />
				<div className="list-row--text">
					<div className="list-row--title">
						{' '}
						{rocket_name} - {payload_id}
					</div>
					<div className="list-row--sub-title">
						Launched on <span>{Utils.getDateString(launch_date_local)}</span> at <span>{Utils.getTimeString(launch_date_local)}</span> from <span>{this.findLaunchPadFullName(site_id)}</span>
					</div>
					<div className="list-row--buttons">
						<LinkButtons links={links} />
					</div>
				</div>
				<div className="list-row--number">
					<div className="list-row--title text-center">#{flight_number}</div>
					<div className="list-row--sub-title">Flight Number</div>
				</div>
			</div>
		);
	}
}
