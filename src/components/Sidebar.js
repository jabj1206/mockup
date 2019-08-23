import React, { Component } from 'react';
import Filters from './Filters'

export default class Sidebar extends Component {
    render() {
        return (
            <div className='text-center' style={{ color: 'gray' }}>
                <img src='https://raw.githubusercontent.com/kristerkari/react-native-svg-transformer/HEAD/images/react-native-logo.png'
                    style={{ width: '100px' }} />

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