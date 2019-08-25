import React, { Component } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Menu from './components/Menu';
import Sidebar from './components/Sidebar'
import FormD from './components/FormD'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      depar: depar,
      menu: {
        home:true,
        msg: false,
        wish: false
      },
      classN: 'menu'
    }
   
  }

addD=(date,origin,destiny,price, quantity)=>{
  const newD = {
    date: date,
    origin: origin,
    destiny: destiny,
    price: price,
    quantity: quantity,
    id: this.state.depar.length

  }
  this.setState({
    depar: [...this.state.depar, newD]
  })
}

deleteD= (id) =>{
  const deleteD = this.state.depar.filter(d => d.id !== id)
  this.setState({depar: deleteD})
}

msg = () =>{
  let menu= {home:false, msg:true, wish: false}
  this.setState({
    menu: {...menu}
  })
}

home = () =>{
  let menu= {home:true, msg:false, wish: false}
  
  this.setState({
    menu: {...menu},
    classN: `${this.state.classN} active'`
  })
}

wishList = () => {
  let menu= {home:false, msg:false, wish: true}
  this.setState({
    menu: {...menu}
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
            <Col xs={3}>
              <Sidebar />
            </Col>
            <Col xs={9}>
            <div className='menuWrapper text-align'>
                    <div className='menu' id='home' onClick={this.home}>
                        <div className='icons'><i className="fa fa-home" /></div>
                        Home
                </div>
                    <div className='menu' id='msg' onClick={this.msg}>
                        <div className='icons'><i className="fa fa-envelope-o"></i></div>
                        Messages
                </div>
                    <div className='menu' onClick={this.wishList}>
                        <div className='icons'><i className="fa fa-star"></i></div>
                        WishList
                </div>
                    <div className='menu'>
                        <div className='icons text-justify'><i className="fa fa-cog"></i></div>
                        Settings
                </div>
                    <div className='menu'>
                        <div className='icons'><i className="fa fa-user"></i></div>
                        My Account
                </div>
                </div>
              <Menu depar={this.state.depar} menu={this.state.menu} deleteD = {this.deleteD}/>
              <br />

              
            </Col>

          </Row>
        </Container>
        <FormD addD={this.addD}/>        
      </>
    )
  }
}

const depar = [{
  id: '0',
  date: '2019-01-01',
  origin: 'Bogota',
  destiny: 'Cartagena',
  price: '250000',
  quantity: '1'
},
{
  id: '1',
  date: '2019-01-01',
  origin: 'Medellin',
  destiny: 'Pereira',
  price: '100000',
  quantity: '1'
}]



export default App;
