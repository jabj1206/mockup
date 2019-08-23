import React, { Component } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Menu from './components/Menu';
import Departures from './components/Departures';
import Sidebar from './components/Sidebar'
import FormD from './components/FormD'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      depar: depar
    }
   
  }

addD=(date,origin,destiny,price)=>{
  const newD = {
    date: date,
    origin: origin,
    destiny: destiny,
    price: price
  }
  this.setState({
    depar: [...this.state.depar, newD]
  })
}
  
  onChange = e => {
    console.log(e.target.value)
  }


  render() {
    return (
      <>
        <Container>
          <Row>
            <Col sm={3}>
              <Sidebar />
            </Col>
            <Col sm={9}>
              <Menu />
              <br />
              <Row>
                <Col className='text-right' >
                  <input className='text-center' style={{ border: 'none', borderRadius: '10px' }} placeholder='Search' />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Departures depar={this.state.depar} />
                </Col>
              </Row>
            </Col>

          </Row>
        </Container>
        <FormD addD={this.addD}/>        
      </>
    )
  }
}

const depar = [{
  date: '01-01-2009',
  origin: 'Houston',
  destiny: 'Texas',
  price: '250000',
  quantity: '1'
},
{
  date: '01-01-2009',
  origin: 'Houston',
  destiny: 'Texas',
  price: '250000',
  quantity: '1'
},
{
  date: '01-01-2009',
  origin: 'Houston',
  destiny: 'Colombia',
  price: '250000',
  quantity: '1'
}]



export default App;
