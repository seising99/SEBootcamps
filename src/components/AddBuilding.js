import React from 'react';
import data from '../data/data';
import { PlusSquare } from 'react-feather';

class AddBuilding extends React.Component {
	
	constructor(props) {
    super(props);
    this.state = {
		code: '',
		name: '',
		address: '',
		latitude: 0,
		longitude: 0  
    };
  }
  
  updateCode (val) {
	  
	  var val = this.myValue1.value;
	  
	  this.setState({code: val});
	  
  }
  
  updateName (val) {
	  
	  var val = this.myValue2.value;
	  
	  this.setState({name: val});
	  
  }
  
  updateAddress (val) {
	  
	  var val = this.myValue3.value;
	  
	  this.setState({address: val});
	  
  }
  
  updateLatitude (val) {
	  
	  var val = this.myValue4.value;
	  
	  this.setState({latitude: val});
	  
  }
  
  updateLongitude (val) {
	  
	  var val = this.myValue5.value;
	  
	  this.setState({longitude: val});
	  
  }
  
  addBuild () {
	  
	  var newData = 
	  {
		  
		id: data[data.length - 1].id + 1,
		code: this.state.code,
		name: this.state.name,
		address: this.state.address,
		coordinates: 
		{
			latitude: this.state.latitude,
			longitude: this.state.longitude
		}
		  
	  };
	  
	  data.push(newData);
	  
  }
	
	render() {

		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value
		
		return (
		<div className="smallForm">
			<h2>Add Building </h2>
			<form onSubmit={(event) => event.preventDefault()}>
			<strong> General: </strong>
				<input className="buildingInput"
					type="text"
					placeholder="Building Code"
					ref={ (value) => {this.myValue1 = value} }
					onChange={this.updateCode.bind(this)}
				/>
				<input className="buildingInput"
					type="text"
					placeholder="Building Name"
					ref={ (value) => {this.myValue2 = value} }
					onChange={this.updateName.bind(this)}
				/>
				<input className="buildingInput"
					type="text"
					placeholder="Building Address"
					ref={ (value) => {this.myValue3 = value} }
					onChange={this.updateAddress.bind(this)}
				/>
				<p /> 
				<strong> Coordinates: </strong>
				<input className="buildingInput"
					type="text"
					placeholder="Building Latitude"
					ref={ (value) => {this.myValue4 = value} }
					onChange={this.updateLatitude.bind(this)}
				/>
				<input className="buildingInput"
					type="text"
					placeholder="Building Longitude"
					ref={ (value) => {this.myValue5 = value} }
					onChange={this.updateLongitude.bind(this)}
				/>
				<p />
				<PlusSquare size='40px' style={{float: 'right', marginRight: '1.5rem', backgroundColor: 'white', padding: '0px'}} onClick={this.addBuild.bind(this)} />
				<br />
			</form>
		</div>
		);
	}
}
export default AddBuilding;