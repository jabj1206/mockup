import React, { Component } from 'react';
import './Departure.css'
import NumberFormat from 'react-number-format';

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
                        <i className="fa fa-chevron-down"></i>
                        {this.props.departure.destiny}
                    </div>
                    <div className='departure'>
                    <i className="fa fa-truck"></i>
                </div>
                    <div className='departure'>
                   <NumberFormat className= 'price' value={this.props.departure.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                       
                    </div>
                    <div className='departure text-center'>
                        <div className='quantity'>
                        {this.props.departure.quantity}
                        </div>                       
                    </div>
                    <div className='departureE'>
                    <span onClick={this.props.deleteD.bind(this,this.props.departure.id)}><i className="fa fa-trash"></i></span>

                    </div>

               

                </div>
            </div>
        )
    }
}