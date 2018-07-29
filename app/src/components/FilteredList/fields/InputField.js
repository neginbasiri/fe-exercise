import React from 'react';

const InputField = ({labelText, onInputChange}) => <div className="field--item">
  <label>{labelText}</label>
  <input placeholder="eg Falcon" onChange={onInputChange}/>
</div> 

export default InputField;