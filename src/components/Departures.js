import React, {Component} from 'react';
import Departure from './Departure'

export default class Departures extends Component {
    
    render(){
        
        return this.props.depar.map((departure,i)=> <Departure departure={departure} key={i}/>)
        

    }
}