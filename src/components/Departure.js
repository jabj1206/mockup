import React, { Component } from 'react';
import './Departure.css'
import NumberFormat from 'react-number-format';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';

export default class Departure extends Component {
    render() {
        return (
            <div style={{ borderRadius: '30px', backgroundColor: 'white', marginTop: '20px' }}>
                <div className='departureWrap'>
                    <Col xs={2} className='departure' style={{ paddingTop: '35px' }} >
                        {this.props.departure.date}
                        
                    </Col>
                    <Col xs={2} className='departure text-center' style={styleD}>
                        {this.props.departure.origin}
                        <i style={{ paddingLeft: '35px' }} className="fa fa-chevron-down"></i>
                        {this.props.departure.destiny}
                    </Col>
                    <Col xs={2} className='departure text-center'>
                        <i className="fa fa-truck"></i>
                    </Col>
                    <Col xs={2} className='departure'>
                        <NumberFormat className='price' value={this.props.departure.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                        
                    </Col>
                    <Col xs={2} className='departure text-center'>
                        <div className='quantity'>
                            {this.props.departure.quantity}
                        </div>
                    </Col>
                    <Col xs={2} className='departureE text-center'>

                        <span onClick={this.props.deleteD.bind(this, this.props.departure.id)}><i className="fa fa-trash"></i></span>

                    </Col>

                </div>
            </div>
        )
    }
}

const styleD = {
    borderLeft: '2px solid silver',
    height: '90px',

}