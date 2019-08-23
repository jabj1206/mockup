import React, {Component} from 'react';
import './Menu.css'

export default class Menu extends Component {
    render(){
        return (
            <div className='menuWrapper text-align'>
                <div className='menu'>
                <i className="fa fa-home"/>
                    Home
                </div>
                <div className='menu'>
                <i className="fa fa-envelope-o"></i>
                    Messages
                </div>
                <div className='menu'>
                <i className="fa fa-star"></i>
                    WishList
                </div>
                <div className='menu'>
                <i className="fa fa-cog"></i>
                    Settings
                </div>
                <div className='menu'>
                <i className="fa fa-user"></i>
                    My Account
                </div>
            </div>
        )
       
        
    }
}