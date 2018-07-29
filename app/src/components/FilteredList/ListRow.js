import React, { Component } from 'react';
import LinkButtons from './LinkButtons';

export default class ListRow extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		const { links, rocket, payloads, launch_date_local, flight_number } = this.props;
		const { mission_patch } = links;
		const { rocket_name } = rocket;
    const { payload_id } = payloads ? payloads[0] : '';

		const date = new Date(launch_date_local).toLocaleDateString('en-GB', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
		const time = new Date(launch_date_local).toLocaleTimeString('en-GB', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: true
		});
		return (
			<div className="list-row">
				<img className="list-row--image" src={mission_patch} alt="Mission" />
				<div className="list-row--text">
					<div className="list-row--title">
						{' '}
						{rocket_name} - {payload_id}
					</div>
					<div className="list-row--sub-title">
						Launched on {date} at {time} from {}
					</div>
					<div className="list-row--buttons">
						<LinkButtons links={links} />
					</div>
				</div>
				<div className="list-row--text">
					<div className="list-row--title text-center">#{flight_number}</div>
					<div className="list-row--sub-title">Flight Number</div>
				</div>
			</div>
		);
	}
}
