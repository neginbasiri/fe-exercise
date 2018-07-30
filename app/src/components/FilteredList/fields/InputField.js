import React from 'react';

const InputField = ({labelText, onInputChange}) => <div className="field--item">
  <label htmlFor={labelText}>{labelText}</label>
  <input type="text" name={labelText} aria-label={`To filter the list by ${labelText}`} placeholder="eg Falcon" onChange={onInputChange}/>
</div> 

export default InputField;