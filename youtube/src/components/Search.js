import React, { Component } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';

class Search extends Component {
	state = {
		searchTerm:""

	}

	handleInputChange = (event) => {
		console.log(event.target.value)
		this.setState({ searchTerm: event.target.value });
		//run the runSearch method passed in as a prop
		this.props.runSearch(event.target.value)

	}


	render() {
		return(
			<Form>
				<FormGroup>
					<Input
					 type="text"
					 placeholder="Type in search item here"
					 value={this.state.searchTerm}
					 onChange={this.handleInputChange}
					/>
				</FormGroup>
			</Form>




		)
	}
}


//another form for the onchange function in the search bar
// onChange={(event) => this.handleInputChange(event.target.value)}





// const Search = () => {
// 	return(
// 		<div> Hi There </div>

// 	)
// }


export default Search;



