import React, { Component } from 'react';
import SpeechToText from 'speech-to-text';
import './Speech.css';

export const initialState = {
	onAnythingSaid: '',
	onFinalized: '',
	headerState: 'Click for listen to you'
}
class Speech extends Component {
	constructor(props){
		super(props);
		this.state = initialState;
		this.listenToUser = this.listenToUser.bind(this);
	}

	listenToUser(){
		let onAnythingSaid = (text) =>{
			this.setState({onAnythingSaid: text});
		}

		let onFinalised = (text) => {
			this.setState({onFinalized: text});
		};

		let onFinishedListening = () => {
			this.setState({headerState: 'Please click again to Listen to you'});
			this.setState({onAnythingSaid: ''});
			this.setState({onFinalized: ''});
		}

		try {
			this.setState({headerState: 'I am Listening.. Please talk'});
			const listener = new SpeechToText(onAnythingSaid, onFinalised, onFinishedListening);
			listener.startListening();
		} catch (error) {

		}
	}
	render() {
		return (
			<div className='Speech'>
				<h2 className='SpeechListening'>{this.state.headerState}</h2>
				<h4>onAnythingSaid</h4>
				<p>{this.state.onAnythingSaid}</p>
				<h3 className='FinalText'>onFinalised</h3>
				<p>{this.state.onFinalized}</p>
				<button className='buttonClick'type='button' onClick={this.listenToUser}>Click Me</button>
			</div>
		);
	}
}

export default Speech;