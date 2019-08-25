import React, { Component } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Menu from './components/Menu';
import Sidebar from './components/Sidebar'
import FormD from './components/FormD'
import 'moment-timezone';

  

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      depar: depar,
      menu: {
        home: true,
        msg: false,
        wish: false
      },
      classN: 'menu',
      addClass: false
    }

  }

  sortt = (st) => {
    console.log(st.date)
    const {depar} = this.state
    let newDepar = depar
    if (!st.date){       
    newDepar.sort((a,b)=>(a.date > b.date)?1:-1);
  }else{
    newDepar.sort((a,b)=>(b.date > a.date)?1:-1);
  }
  // this.setState({
  //    depar: newDepar
  //  })
  
}


  addD = (date, time, origin, destiny, price, quantity) => {
    const newD = {
      id: this.state.depar.length,
      date: date,
      time: time,
      origin: origin,
      destiny: destiny,
      price: price,
      quantity: quantity
    }
    this.setState({
      depar: [...this.state.depar, newD]
    })
  }

  deleteD = (id) => {
    const deleteD = this.state.depar.filter(d => d.id !== id)
    this.setState({ depar: deleteD })
  }

  msg = () => {
    let menu = { home: false, msg: true, wish: false }
    this.setState({
      menu: { ...menu }
    })
  }

  home = () => {
    let menu = { home: true, msg: false, wish: false }

    this.setState({
      menu: { ...menu },
      addClass: !this.state.addClass
    })
  }

  wishList = () => {
    let menu = { home: false, msg: false, wish: true }
    this.setState({
      menu: { ...menu }
    })

  }

  onChange = e => {
    
  }


  render() {
    let boxClass = ["menu"];
    if(this.state.addClass) {
      boxClass.push('active');
    }
    return (
      <>
        <Container>
          <Row>
            <Col xs={3}>
              <Sidebar sortt = {this.sortt}/>
            </Col>
            <Col xs={9}>
              <div className='menuWrapper'>
                <div className={boxClass.join(' ')} id='home' onClick={this.home}>
                  <span><i className="fa fa-home" /></span>
                  <span>Home</span>
                </div>
                <div className='menu' id='msg' onClick={this.msg}>
                  <span><i className="fa fa-envelope-o"></i></span>
                  <span>Messages</span>
                </div>
                <div className='menu' onClick={this.wishList}>
                  <span><i className="fa fa-star"></i></span>
                  <span>WishList</span>
                </div>
                <div className='menu'>
                  <span><i className="fa fa-cog"></i></span>
                  <span>Settings</span>
                </div>
                <div className='menu'>
                  <span><i className="fa fa-user"></i></span>
                  <span>Account</span>
                </div>
              </div>
              <Menu 
              depar={this.state.depar} 
              menu={this.state.menu} 
              deleteD={this.deleteD} />
              <br />


            </Col>

          </Row>
        </Container>
        <FormD addD={this.addD} />
      </>
    )
  }
}

const depar = [{
  id: 0,
  date: '2019-06-12',
  time: '19:34',
  origin: 'Houston, TX, 33619',
  destiny: 'Atlanta, GA, 30123',
  price: 250000,
  quantity: 1
},
{
  id: 1,
  date: '2019-07-01',
  time: '20:00',
  origin: 'Houston, TX, 33619',
  destiny: 'Atlanta, GA, 30123',
  price: 100000,
  quantity: 2
},
{
  id: 2,
  date: '2019-08-02',
  time: '14:30',
  origin: 'Houston, TX, 33619',
  destiny: 'Atlanta, GA, 30123',
  price: 100000,
  quantity: 2
}]



export default App;
