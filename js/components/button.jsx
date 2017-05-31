import React from 'react';

export default class Button extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            text: this.props.text
        }
    }

    render() {
        return <button 
                    type="button"  
                    className="topBtn btn waves-light"
                    onClick={event => this.onClick(event)}
                >
                    {this.state.text}
                </button>
    }

    onClick(event){
        this.props.mojafunkcja();
    }
}