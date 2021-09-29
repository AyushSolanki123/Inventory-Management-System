import React from "react";
import PropTypes from 'prop-types';

class Info extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		};	
		// this.buttonPressed = this.buttonPressed.bind(this);
	}

	buttonPressed() {
		this.setState({
			counter: this.state.counter + 1
		})
	}

	render() {
		return (
			<div>
				<p>Count: {this.state.counter}</p>	
				<button onClick={() => this.buttonPressed()}>Click Me</button>
			</div>
		)
			
	}
}

Info.defaultProps = {
	title: "No Title",
	showTitle: true
}

Info.propTypes = {
	title: PropTypes.string,
	showTitle: PropTypes.bool
}

export default Info;
