import React from 'react';

const SelectField = ({ labelText, options, defaultValue }) => (
	<div className="field--item">
		<label>{labelText}</label>
		<select>
			{!defaultValue && <option value="" />}
			{Object.keys(options).map(key => (
				<option key={key} value={key}>
					{options[key]}
				</option>
			))}
		</select>
	</div>
);

export default SelectField;
