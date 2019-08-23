import React, { Component } from 'react';
import './Filter.css'

export default class Filters extends Component {
    constructor(props){
        super(props)
        this.state={
            sale: false,
            date: false,
            wish: false
        }
    }

    filterSale = () =>{
        this.setState({
            sale: !this.state.sale
        })
    }
    render() {
        return (
            <div>
                <div style={{ display: 'flex'}} onClick={this.filterSale}>
                    <i className="fa fa-gift" style={{ fontSize: '50px' }}></i>
                    <div className='select'>
                        <div className='inner' style={{ float: 'right' }}>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex' }}>
                <i className="fa fa-calendar" style={{ fontSize: '50px',marginTop:'20px' }}></i>
                    <div className='select'>
                        <div className='inner' style={{ float: 'right' }}>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex' }}>
                <i className="fa fa-heart-o" style={{ fontSize: '50px',marginTop:'20px' }}></i>
                    <div className='select'>
                        <div className='inner' style={{ float: 'right' }}>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}