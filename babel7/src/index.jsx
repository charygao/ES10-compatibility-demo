import React, { Component } from "react";

class FormContainer extends Component {
    constructor(props, state) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            result: []
        }
    }
    handleClick(event) {
        let value = this.textInput.value;
            if (value && value != "") {
                let newValue = value.split('').flatMap(word => [[...word]]);
                this.setState({ result:  newValue});
            }
    }
    render() {
    return (
    <div>
          <input type="text" ref={(input) => {this.textInput = input; }}/>
          <input type="button" value="Check flatMap" onClick={this.handleClick}/>
          <p>{this.state.result.join('-')}</p>
    </div>);
    }
}
export default FormContainer;

import ReactDOM from "react-dom";

ReactDOM.render(
    <FormContainer/>,
    document.getElementById('app')
);
