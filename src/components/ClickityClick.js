// Code ClickityClick Component Here
import React from 'react';

export default class ClickityClick extends React.Component {
    
    constructor() {
        super();

        // Define the initial state:
        this.state = {
            hasBeenClicked: false,
        };
    }

    // arrow function
    handleClick = () => {
        //Update state here and pass in an object
        // object will get merged with current state
        // when state is updated, component re-renders automatically
        this.setState({hasBeenClicked: true})
        console.log(this.state.hasBeenClicked);
    }

    render() {
        return (
            <div>
                <p>I have {this.state.hasBeenClicked ? null : "not"} been clicked!</p>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        )
    }
}