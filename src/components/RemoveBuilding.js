import React, { Component } from 'react';
import data from '../data/data';
import { X } from 'react-feather';
import $ from 'jquery'
import 'bootstrap'

class RemoveBuilding extends Component {
	
	removeBuild() 
	{
		
		data.splice(data.indexOf(this.props.building), 1);
		
		//Callback to update App and set selectedBiulding ID to 0 (to display 'Click a Building' message)
		this.props.callback(0);
		
	}
	
	render() {
		
		return(
		<X 
		size='40px' 
		style={{float: 'right', margin: '10px', backgroundColor: 'white', padding: '5px', fontFamily: 'Helvetica'}} 
		onClick={this.removeBuild.bind(this)} 
		data-toggle="popover" data-placement="left" data-html="true" title="<b>Remove</b>" 
		/>
		
		)
		
		
	}
	
	//Credit to:
	//https://stackoverflow.com/questions/33656024/how-do-use-bootstrap-tooltips-with-react/44532897
	//https://stackoverflow.com/questions/33584392/bootstraps-tooltip-doesnt-disappear-after-button-click-mouseleave
	//https://github.com/twbs/bootstrap/issues/3084
	
	componentDidMount() {
		$('[data-toggle="popover"]').popover({
		trigger : 'hover'
		})  
	}

	componentDidUpdate() {
	  $('[data-toggle="popover"]').popover({
		trigger : 'hover'
		})  
	}
	
	componentWillUnmount() {
		$('[data-toggle="popover"]').popover('hide')  
	}
	
}

export default RemoveBuilding