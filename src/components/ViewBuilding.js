import React from 'react';
import RemoveBuilding from './RemoveBuilding'

class ViewBuilding extends React.Component {
	
	//Callback to update App and set selectedBuilding to 0 (to display 'Click a Building' message)
	callbackView = (update) => 
	{
		
		this.props.callbackApp(update);
		
	}
	
	render() {
		
		var hasCoordinates;
		
		if(this.props.building != undefined)
		{
			hasCoordinates = false;
			var test;
			if(this.props.building.coordinates != undefined) hasCoordinates = true;
			
			var coordinates;
			
			if(hasCoordinates)
			{
				coordinates =
				{
					latitude: this.props.building.coordinates.latitude,
					longitude: this.props.building.coordinates.longitude
				}
			}
			else
			{
				
				coordinates =
				{
					latitude: null,
					longitude: null
				}
				
			}
		
		return (
			<div className="card">
			<div className="card-body">
			
			<RemoveBuilding building={this.props.building} callback={this.callbackView} /> <br />
			
			ID: {this.props.building.id}
			<p>
			Code: {this.props.building.code}
			</p>
			<p>
			Name: {this.props.building.name}
			</p>
			<p>
			Address: {this.props.building.address}
			</p>
			<p>
			Coordinates:<br />
			<div style={{textIndent: '1rem', padding: '.25rem'}}>
			Latitude: {coordinates.latitude} <br />
			</div>
			<div style={{textIndent: '1rem', paddingLeft: '.25rem'}}>
			Longitude: {coordinates.longitude}
			</div>
			</p>
			</div>
			</div>
		);
		}
		else return(<div> <p> <strong> Click On a Building to Show More Information! </strong> </p> <br /> </div>);
	}
}
export default ViewBuilding;
