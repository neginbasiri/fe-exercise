import React from 'react';
import ListRow from './ListRow';

const List = ({ list }) => (
	<div className="list--container">
		<div className="list--result">{`Showing ${list.length} Missions`}</div>
		{list.length > 0 && list.map((row, key) => <ListRow key={key} {...row} />)}
	</div>
);

export default List;
