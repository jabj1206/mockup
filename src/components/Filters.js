import React, { Component } from 'react';
import './Filter.css'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'

export default class Filters extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sale: false,
            date: false,
            wish: false
        }
    }

    filterSale = () => {
        this.setState({
            sale: !this.state.sale
        })
    }
    render() {
        return (
            <div>
                <div style={{ display: 'flex' }} onClick={this.filterSale}>
                    <i className="fa fa-gift" style={{ fontSize: '50px' }}></i>
                    <div style={{marginLeft: '50px', marginTop: '10px'}} >
                    <BootstrapSwitchButton 
                        checked={false}
                        onlabel='On'
                        onstyle='success'
                        offlabel='Off'
                        offstyle='primary'
                        style='w-10  mx-5'
                        height = '10'
                        onChange={(checked: boolean) => {
                            
                        }}
                    />
                    </div>
                </div>
                <div style={{ display: 'flex' }}>
                    <i className="fa fa-calendar" style={{ fontSize: '50px', marginTop: '20px' }}></i>
                    <div style={{marginLeft: '50px', marginTop: '20px'}} >
                    <BootstrapSwitchButton 
                        checked={false}
                        onlabel='On'
                        onstyle='success'
                        offlabel='Off'
                        offstyle='primary'
                        style='mx-5'
                        height = '8'
                        onChange={(checked: boolean) => {
                            
                        }}
                    />
                    </div>
                </div>
                <div style={{ display: 'flex' }}>
                    <i className="fa fa-heart-o" style={{ fontSize: '50px', marginTop: '20px' }}></i>
                    <div style={{marginLeft: '50px', marginTop: '20px'}} >
                    <BootstrapSwitchButton 
                        checked={false}
                        onlabel='On'
                        onstyle='success'
                        offlabel='Off'
                        offstyle='primary'
                        style='w-10 h- mx-5'
                        height = '8'
                        onChange={(checked: boolean) => {
                            
                        }}
                    />
                    </div>
                </div>
            </div>
        )
    }
}