import React, { Component } from 'react';
import './styles/Departure.css'
import NumberFormat from 'react-number-format';

export default class Departure extends Component {
  render() {
    return (
      <li style={{marginTop: '20px', height:100}}>
        <div className='icon' >
        <i className="fa fa-check-circle" />
        </div>
        
          <div className='date leftborder'>
          {this.props.departure.date}
          
          </div>
          <div className='plane'>
          <span ><i className="fa fa-paper-plane-o"/></span>
          </div>
          <div className='ship' style={styleD}>            
            <span >{this.props.departure.origin}</span>
            <span><i  className="fa fa-chevron-down"></i></span>
            <span>{this.props.departure.destiny}</span>
          </div>
          <div className='truck'>
          <i className="fa fa-truck" style={{ marginLeft: '20px' }}></i>
          </div>
          <div className='ship'>
          <NumberFormat className='price' value={this.props.departure.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
          </div>
          <div className='small'>
                <div className='quantity'>
               {this.props.departure.quantity}
               </div>
          </div>
          <div className=' small rightborder '>
          <span onClick={this.props.deleteD.bind(this, this.props.departure.id)}><i className="departureE fa fa-trash"></i></span>
          </div>
        
      </li>
      // <Row>
      //   <Col xs={1}>
      //     <i className="fa fa-check-circle" />
      //   </Col>
      //   <Col xs={11} style={{ borderRadius: '30px', backgroundColor: 'white', marginTop: '20px' }}>

      //     <Col xs={12} className='departureWrap'>

      //       <Col xs={2} className='departure' style={{ paddingTop: '35px' }} >
      //         {this.props.departure.date}
      //       </Col>
      //       <Col xs={2} className='departure text-center' style={styleD}>
      //         {this.props.departure.origin}
      //         <i style={{ paddingLeft: '35px' }} className="fa fa-chevron-down"></i>
      //         {this.props.departure.destiny}
      //       </Col>
      //       <Col xs={2} className='departure text-center' style={styleD}>
      //         <i className="fa fa-truck" style={{ marginLeft: '20px' }}></i>
      //       </Col>
      //       <Col xs={2} className='departure'>
      //         <NumberFormat className='price' value={this.props.departure.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />

      //       </Col>
      //       <Col xs={2} className='departure text-center'>
      //         <div className='quantity'>
      //           {this.props.departure.quantity}
      //         </div>
      //       </Col>
      //       <Col xs={2} className='departureE text-center'>

      //         <span onClick={this.props.deleteD.bind(this, this.props.departure.id)}><i className="fa fa-trash"></i></span>

      //       </Col>

      //     </Col>
      //   </Col>
      // </Row>
    )
  }
}

const styleD = {
  borderRight: '1px solid silver',
  opacity: '0.8'

}