import React, { Component } from 'react';
import './Filter.css'


export default class Filters extends Component {
	constructor(props) {
		super(props)
		this.state = {
			sale: true,
			date: false,
			wish: false
		}
	}

	switch = (select) => {

		switch (select) {
			case 'sale':
				this.setState({
					sale: !this.state.sale
				})
				
				break
			case 'date':
				this.setState({
					date: !this.state.date
				})
				break
			case 'wish':
				this.setState({
					wish: !this.state.wish
				})
				break
			default:
				break
		}
		
		
	}

	render() {
		this.props.sortt(this.state)
		return (
			<div className='bor'>
				<div style={{ marginTop: '60px', marginLeft: '50px', display: 'flex' }}>
					<i className="fa fa-lightbulb-o" />
					<span style={{ marginLeft: '30px' }}>Smart Filters</span>
				</div>
				<div>_____________________________</div>
				<div>
					<div style={{ marginLeft: '30px', display: 'flex' }}>
						<i className="fa fa-gift" style={{ fontSize: '50px' }}></i>
						<div style={{ marginLeft: '80px', marginTop: '10px' }} >
							<div className='select' onClick={this.switch.bind(this, 'sale')}>
								<div className={this.state.sale ? 'inner' : 'innerF'}>

								</div>
							</div>


						</div>
					</div>
					<div style={{ marginLeft: '30px',display: 'flex' }}>
						<i className="fa fa-calendar" style={{ fontSize: '50px', marginTop: '20px' }}></i>
						<div style={{ marginLeft: '80px', marginTop: '30px' }} >
							<div className='select' onClick={this.switch.bind(this, 'date')}>
								<div className={this.state.date ? 'inner' : 'innerF'}>

								</div>
							</div>
						</div>
					</div>
					<div style={{ marginLeft: '30px',display: 'flex' }}>
						<i className="fa fa-heart-o" style={{ fontSize: '50px', marginTop: '20px' }}></i>
						<div style={{ marginLeft: '80px', marginTop: '20px' }} >
							<div className='select' onClick={this.switch.bind(this, 'wish')}>
								<div className={this.state.wish ? 'inner' : 'innerF'}>

								</div>
							</div>
						</div>
					</div>
				</div>
				<div >_____________________________</div>
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'Center' }}>
					<form className='text-center'>
						<span  >Status</span>
						<input className='text-center ' placeholder='Search' type='search' style={{ border: 'none', borderRadius: '10px' }} />
					</form>

				</div>
				<div style={delivered}>
					DELIVERED
                </div>
			</div>
		)
	}
}

const delivered = {
	marginTop: '20px',
	border: 'none',
	boxShadow: '3px 3px 7px #777',
	width: '50%',
	marginLeft: '60px',
	backgroundColor: 'white',
	color: 'black',
	height: '50px',
	paddingTop: '12px'
}