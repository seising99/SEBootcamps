import React from 'react';

class BuilingList extends React.Component {
	
		handleClick = (id) => {
			
			this.props.getUpdate(id);
			
		}
	
	render() {
		//console.log('This is my directory file', this.props.data);
		const { data, filterText } = this.props;

		const buildingList = data
		.filter(name => {
					//remove names that don't match filter
					return name.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
				})
		.map(directory => {
			return (
				<tr onClick={() => this.handleClick(directory.id)} key={directory.id}>
					<td className="codeBlock" style={{paddingRight: '1rem'}}>{directory.code} </td>
					<td style={{width: '30rem'}}> {directory.name} </td>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
