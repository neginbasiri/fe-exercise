import React from 'react';

const SelectField = ({ labelText, options, onInputChange }) => (
	<div className="field--item">
		<label htmlFor={labelText}>{labelText}</label>
		<select type="text" name={labelText} onChange={onInputChange}>
			<option value="">Any</option>
			{options.map((option, key) => (
				<option key={key} value={option}>
					{option}
				</option>
			))}
		</select>
	</div>
);

export default SelectField;
