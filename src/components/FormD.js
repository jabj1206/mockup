import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap'

export default class FormD extends Component {
   constructor(props) {
      super(props)
      this.state = {
         show: false,
         date: '',
         origin: '',
         destiny: '',
         price: ''
      }
   }
   handleShow = () => {
      this.setState({
         show: true
      })
   }

   handleClose = () => {
      
      this.setState({ show: false })
   };

   onSubmit = e =>{
      this.props.addD(this.state.date,this.state.origin,this.state.destiny,this.state.price)
      e.preventDefault()
      this.handleClose()
   }

   onChange = e => {
      console.log(e.target.name, e.target.value)
      this.setState({
         [e.target.name] : e.target.value
      })
     
   }
   render() {

      return (
         <>
            <div className='add' onClick={this.handleShow}>
            <i class="addp fa fa-plus"></i>
            </div>

            <Modal show={this.state.show} onHide={this.handleClose}>
               <Modal.Header closeButton>
                  <Modal.Title>Add New Item</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <form onSubmit={this.onSubmit}>
                     date:
              <input type='date'
                        onChange={this.onChange}
                        name='date'
                        style={styleForm}
                     />
                     <br />
                     <br />
                     Origin:
              <input type='text'
                        name='origin'
                        onChange={this.onChange}
                        placeholder='Write origin...'
                        style={styleForm}

                     />
                     <br />
                     <br />
                     Destiny:
              <input type='text'
                        name='destiny'
                        onChange={this.onChange}
                        placeholder='Write destiny...'
                        style={styleForm}
                     />
                     <br />
                     <br />
                     Price:
              <input type='number'
                        name='price'
                        onChange={this.onChange}
                        placeholder='Write price...'
                        style={styleForm}
                     />
               <Button type='submit'> Enviar</Button> 
                  </form>
               </Modal.Body>
               <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleClose}>
                     Close
        </Button>
                  
               </Modal.Footer>
            </Modal>
         </>
      )


   }


}

const styleForm = {
   border: '1px solid gray',
   borderRadius: '10px',
   marginLeft: '20px'
}