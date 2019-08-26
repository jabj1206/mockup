import React, { Component } from 'react';
import Filters from './Filters'
import './styles/Sidebar.css'
import logo from '../logo.svg';  


export default class Sidebar extends Component {
    render() {
        return (
            <div className='text-center' style={{ color: 'gray', marginTop: '30px' }}>
                <img src={logo} className="App-logo" alt="logo" 
                     style={{ width: '150px' }} />
                <Filters sortt = {this.props.sortt}/>
            </div>
        )
    }
}

