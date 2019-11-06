import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0
    };
  }

  filterUpdate(value) {
	  
    this.setState({
			filterText: value
		})
		
  }

  selectedUpdate(id) {

		this.setState({
				selectedBuilding: id
		})
  
  }
  
    updateBuilding = (id) => {

		this.setState({
				selectedBuilding: id
		})
  
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>
        <Search
				filterUpdate={this.filterUpdate.bind(this)}
		/>
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr style={{margin: 'auto'}}>
					<td style={{backgroundColor: "#32456e"}}>
                      <td className="codeBlock" style={{padding: '.75rem'}}> 
					  <b> Code </b> 
					  </td>
					  <td style={{width: '30rem'}}>
					  <b>Building</b>
					</td>
					</td>
                  </tr>
                  <BuildingList
				    getUpdate={this.selectedUpdate.bind(this)}
                    data={this.props.data}
					filterText={this.state.filterText}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding 
			  building={this.props.data[this.props.data.findIndex((building) => building.id === this.state.selectedBuilding)]}
			  callbackApp={this.updateBuilding}
			  />
			  <p />
			  <AddBuilding />
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
