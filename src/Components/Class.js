import React from "react";

class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            count: 0
        };
    }

    componentDidMount() {
        console.log("Mounted");
    }

    componentDidUpdate() {
        console.log("Updated");
    }

    componentWillUnmount() {
        console.log("Cleanup");
    }

    clickedButton() {
        this.setState({ 
            count: this.state.count + 1 
        });
        console.log("Clicked")
    }

    render() {
        return (
            <div>
                <p>Clicked: {this.state.count}</p>
                <button 
                    className="btn btn-info" 
                    onClick={() => this.clickedButton()}>
                        Click Me!
                </button>
            </div>
        )
    }
}

export default Test;