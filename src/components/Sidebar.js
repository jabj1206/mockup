import React, { Component } from 'react';
import Filters from './Filters'
import './Sidebar.css'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

export default class Sidebar extends Component {
    render() {
        return (
            <div className='text-center'  style={{ color: 'gray',marginTop:'30px' }}>
                <img src='https://abeon-hosting.com/images/react-js-png-10.png'
                    alt=' 'style={{ width: '100px' }} />

                <div style={{ marginTop: '60px', display: 'flex' }}>
                    <i className="fa fa-lightbulb-o" />
                    <span style={{ marginLeft: '30px' }}>Smart Filters</span>
                </div>
                <div>_____________________________</div>
                <Filters />
                <div >_____________________________</div>
                <div style={{display:'flex',alignItems: 'center',justifyContent:'Center'}}>
                    <form className='text-center'>
                        <span  >Status</span>
                        <input className='text-center' placeholder="Search..." style={{ border: 'none', borderRadius: '10px' }} />
                    </form>
                </div>
            </div>
        )
    }
}

