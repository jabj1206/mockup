import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import NumberFormat from 'react-number-format';




const initialState = {
   date: formatDate(new Date()),
   time: formatTime(new Date()),
   origin: '',
   destiny: '',
   price: '',
   quantity: '',
   dateError: '',
   originError: '',
   destinyError: '',
   priceError: '',
   quantityError: ''
}


export default class FormD extends Component {
   constructor(props) {
      console.log(formatTime(new Date()))
      super(props)
      this.state = initialState
   }

   Validate = () => {
      let originError = "";
      let destinyError = "";
      let priceError = "";
      let quantityError = "";
      let dateError = ''

      if (!this.state.origin) {
         originError = 'Origin cannot be blank'
      }

      if (!this.state.destiny) {
         destinyError = 'Destiny cannot be blank'
      }

      if (!this.state.price) {
         priceError = 'Price cannot be blank'
      }

      if (!this.state.quantity) {
         quantityError = 'Quantity cannot be blank'
      }
      if (!this.state.date) {
         dateError = 'Date cannot be blank'
      }
      if (dateError || originError || destinyError || priceError || quantityError) {
         this.setState({ dateError, originError, destinyError, priceError, quantityError })
         return false
      }
      return true
   }




   handleShow = () => {
      this.setState({
         show: true
      })
   }

   handleClose = () => {

      this.setState({ show: false })
   };

   onSubmit = e => {

      const isValid = this.Validate()
      if (isValid) {

         this.props.addD(this.state.date, this.state.time, this.state.origin, this.state.destiny, this.state.price, this.state.quantity)
         this.handleClose()
         //Clear Form
         this.setState(initialState)
      }
      e.preventDefault()

   }



   onChange = e => {
       this.setState({
         [e.target.name]: e.target.value
      })



   }
   render() {

      return (
         <>
            <div className='add' onClick={this.handleShow}>
               <i className="addp fa fa-plus" style={{ fontSize: '50px' }}></i>
            </div>

            <Modal show={this.state.show} onHide={this.handleClose}>
               <Modal.Header closeButton>
                  <Modal.Title>Add New Item</Modal.Title>
               </Modal.Header>
               <Modal.Body>

                  <form onSubmit={this.onSubmit}>

                     <Row>
                        <Col xs={2}>
                           <label htmlFor='date'>Date:</label>
                        </Col>

                        <Col xs={6}>
                           <input type='date'
                              onChange={this.onChange}
                              id='date'
                              name='date'
                              style={styleForm}
                              value={this.state.date}
                           />
                           <br />
                           <br />
                        </Col>

                        <Col xs={4} style={{ color: 'red', fontSize: 12 }}>
                           {this.state.dateError}
                        </Col>
                     </Row>
                     <Row>
                        <Col xs={2}>
                           <label htmlFor='hour'>Hour:</label>
                        </Col>
                        <Col xs={6}>

                           <input type='time'
                              onChange={this.onChange}
                              id='hour'
                              name='time'
                              style={styleForm}
                              value={this.state.time}
                           />
                           <br />
                           <br />
                        </Col>
                     </Row>
                     <Row>
                        <Col xs={2}>
                           <label htmlFor='origin'>Origin:</label>
                        </Col>
                        <Col xs={6}>
                           <input type='text'
                              name='origin'
                              id='origin'
                              onChange={this.onChange}
                              placeholder='Write origin...'
                              style={styleForm}
                              value={this.state.origin}
                           />
                           <br />
                           <br />
                        </Col>
                        <Col xs={4} style={{ color: 'red', fontSize: 12 }}>
                           {this.state.originError}
                        </Col>
                     </Row>
                     <Row>
                        <Col xs={2}>
                           <label htmlFor='destiny'>Destiny:</label>
                        </Col>
                        <Col xs={6}>
                           <input type='text'
                              id='destiny'
                              name='destiny'
                              onChange={this.onChange}
                              placeholder='Write destiny...'
                              style={styleForm}
                              value={this.state.destiny}
                           />
                           <br />
                           <br />
                        </Col>
                        <Col xs={4} style={{ color: 'red', fontSize: 12 }}>
                           {this.state.destinyError}
                        </Col>
                     </Row>
                     <Row>
                        <Col xs={2}>
                           <label htmlFor='price'>Price:</label>
                        </Col>
                        <Col xs={6}>
                           <NumberFormat thousandSeparator={true} prefix={'$'}
                              id='price'
                              name='price'
                              onChange={this.onChange}
                              placeholder='Write price...'
                              style={styleForm}
                              value={this.state.price}

                           />

                           <br />
                           <br />
                        </Col>
                        <Col xs={4} style={{ color: 'red', fontSize: 12 }}>
                           {this.state.priceError}
                        </Col>
                     </Row>
                     <Row>
                        <Col xs={2}>
                           <label htmlFor='quantity'>Quantity:</label>
                        </Col>
                        <Col xs={6}>
                           <input type='number'
                              id='quantity'
                              name='quantity'
                              onChange={this.onChange}
                              placeholder='Write quantity...'
                              style={styleForm}
                              value={this.state.quantity}
                           />
                        </Col>
                        <Col xs={4} style={{ color: 'red', fontSize: 12 }}>
                           {this.state.quantityError}
                        </Col>
                     </Row>
                     <Row>
                        <Col xs={{ size: 12, offset: 5 }}>
                           <br />
                           <Button type='submit'> Enviar</Button>
                        </Col>
                     </Row>
                  </form>
               </Modal.Body>
            </Modal>
         </>
      )


   }


}

const styleForm = {
   border: '1px solid gray',
   borderRadius: '10px',
   marginLeft: '20px',
   paddingLeft: '10px'
}

function formatDate(date) {
   let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

   if (month.length < 2) month = '0' + month;
   if (day.length < 2) day = '0' + day;

   return [year, month, day].join('-');
}

function formatTime(date) {
   return date.getHours() + ":" + date.getMinutes()
}



