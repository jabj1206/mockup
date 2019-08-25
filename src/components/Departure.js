import React, { Component } from 'react';
import './Departure.css'
import NumberFormat from 'react-number-format';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default class Departure extends Component {
    render() {
        return (
            <Row>
            <Col xs={1}>
            <i class="fa fa-check-circle"/>    
            </Col>    
            <Col xs={11} style={{ borderRadius: '30px', backgroundColor: 'white', marginTop: '20px' }}>
                
                <Col xs={12} className='departureWrap'>

                    <Col xs={2} className='departure' style={{ paddingTop: '35px' }} >
                        {this.props.departure.date}                        
                    </Col>
                    <Col xs={2} className='departure text-center' style={styleD}>
                        {this.props.departure.origin}
                        <i style={{ paddingLeft: '35px' }} className="fa fa-chevron-down"></i>
                        {this.props.departure.destiny}
                    </Col>
                    <Col xs={2} className='departure text-center' style={styleD}>
                        <i className="fa fa-truck" style={{marginLeft: '20px'}}></i>
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

                </Col>
            </Col>
            </Row>
        )
    }
}

const styleD = {
    borderLeft: '1px solid silver',
    opacity: '0.8',
    height: '90px',

}