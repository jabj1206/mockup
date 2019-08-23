import React, { Component } from 'react';
import './Menu.css'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Departures from './Departures';

export default class Menu extends Component {

    render() {
        if(this.props.menu.home){
        return (<>

            <br />
            <Row>
                <Col className='text-right' >
                    <input className='text-center' style={{ border: 'none', borderRadius: '10px' }} placeholder='Search' />
                </Col>
            </Row>

            <Row>
                <Col>
                    <Departures depar={this.props.depar} deleteD={this.props.deleteD} />
                </Col>
            </Row>
        </>


        )}else if (this.props.menu.msg){
            return(
                <>
                <br/>
                <h1>Aca se renderizan los mensajes</h1>
                <img src='https://www.stickpng.com/assets/images/580b585b2edbce24c47b29b9.png' alt=''/>
                </> 
            )
        }else if (this.props.menu.wish){
            return(
                <>
                <br/>
                <h1>Wish List</h1>
                <img src='https://pngimage.net/wp-content/uploads/2018/06/wishlist-png-8.png' alt=''/>
                </> 
            )
        }


    }
}