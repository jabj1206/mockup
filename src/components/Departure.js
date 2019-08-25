import React, { Component } from 'react';
import './styles/Departure.css'
import NumberFormat from 'react-number-format';
import Moment from 'react-moment';
import 'moment-timezone';



export default class Departure extends Component {

  render() {
    let HyD = `${this.props.departure.date} ${this.props.departure.time}`
    return (
      <li style={{ marginTop: '20px', height: 100 }}>
        <div className='icon' >
          <i className="fa fa-check-circle" />
        </div>

        <div className='date leftborder'>
          <Moment format='dddd'>{HyD}</Moment>
          <span>
               <Moment format='Do'>{HyD}</Moment> &nbsp;
               <Moment format='hh'>{HyD}</Moment>:
               <Moment format='mm'>{HyD}</Moment>
          </span>
          <Moment format='A'>{HyD}</Moment>
          {/* <FormattedDate value={this.props.departure.date} format="long" /> */}
        </div>
        <div className='plane'>
          <span ><i className="fa fa-paper-plane-o" /></span>
        </div>
        <div className='ship' style={styleD}>
          <span >{this.props.departure.origin}</span>
          <span><i className="fa fa-chevron-down"></i></span>
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
    )
  }
}

const styleD = {
  borderRight: '1px solid silver',
  opacity: '0.8'

}