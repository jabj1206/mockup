import React, { Component } from 'react';
import './Departure.css'

export default class Departure extends Component {
    render() {
        return (
            <div style={{ borderRadius: '30px', backgroundColor: 'white', marginTop: '20px' }}>
                <div className='departureWrap'>
                    <div className='departure'>
                        {this.props.departure.date}
                    </div>
                    <div className='departure'>
                        {this.props.departure.origin}
                        <i class="fa fa-chevron-down"></i>
                        {this.props.departure.destiny}
                    </div>
                    <div className='departure'>
                    <i class="fa fa-truck"></i>
                </div>
                    <div className='departure'>
                        {this.props.departure.price}
                    </div>
                    <div className='departure'>
                        {this.props.departure.quantity}
                    </div>

                </div>
            </div>
        )
    }
}