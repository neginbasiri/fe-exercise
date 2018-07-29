import React from 'react';

const SelectField = ({ labelText, options, onInputChange }) => (
	<div className="field--item">
		<label>{labelText}</label>
		<select onChange={onInputChange}>
			<option value="">Any</option>
			{Object.keys(options).map(key => (
				<option key={key} value={options[key]}>
					{options[key]}
				</option>
			))}
		</select>
	</div>
);

export default SelectField;
