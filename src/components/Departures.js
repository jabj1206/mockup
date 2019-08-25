import React, { Component } from 'react';
import Departure from './Departure'

export default class Departures extends Component {

	render() {

		return( 
		<ul className='list'>
			{this.props.depar.map((departure, i) => <Departure departure={departure} deleteD={this.props.deleteD} key={i} />)}
		</ul>)
			


	}
}