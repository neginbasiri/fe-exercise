import React from 'react';

const InputField = ({labelText}) => <div className="field--item">
  <label>{labelText}</label>
  <input placeholder="eg Falcon"/>
</div> 

export default InputField;