import React from 'react';

class Search extends React.Component {
	
	filterUpdate() {
		
		const val = this.myValue.value;
		this.props.filterUpdate(val);
		
	}
	render() {
		//You will need to save the value from the textbox and update it as it changes
		//You will need the onChange value for the input tag to capture the textbox value
		
		return (
		<div style={{backgroundColor: '#c0c0c0', borderRadius: '5px', margin: '1rem'}}>
			<form>
				<input className="searchBox"
						type="text"
						ref={ (value) => {this.myValue = value} }
						placeholder="Type to filter..."
						onChange={this.filterUpdate.bind(this)}
					/>
			</form>
			</div>
		);
	}
}
export default Search;
