import React, {Component} from 'react';
import InputFields from './fields/InputField';
// import SelectField from './fields/SelectField';


export default class Filters extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return (<div className="filters--wrapper">
    <InputFields labelText="Keyword"/>
    {/* <SelectField labelText="Launch Pad" options={}/>
    <SelectField labelText="Min Year" options={}/>
    <SelectField labelText="Max Year" options={}/> */}
  </div>);
  }
}
