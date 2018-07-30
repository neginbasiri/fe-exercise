import React from 'react';
import ListRow from './ListRow';

const List = ({ list, launchPads }) => (
	<div className="list--container">
		<div className="list--result">{`Showing ${list.length} Missions`}</div>
		{list.length > 0 ? list.map((row, key) => <ListRow key={key} {...row} launchPads={launchPads}/>) : <div className="list--result">There is no result available for your search.</div>}
	</div>
);

export default List;
