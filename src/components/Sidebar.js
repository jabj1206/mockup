import React, { Component } from 'react';
import Filters from './Filters'
import './Sidebar.css'


export default class Sidebar extends Component {
    render() {
        return (
            <div className='text-center'  style={{ color: 'gray',marginTop:'30px' }}>
                <img src='https://abeon-hosting.com/images/react-js-png-10.png'
                    alt=' 'style={{ width: '100px' }} />


                <Filters/>

            </div>
        )
    }
}

