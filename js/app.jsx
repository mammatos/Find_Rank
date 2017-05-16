import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
Route,
Link,
IndexLink,
IndexRoute,
hashHistory
} from 'react-router';

class Button extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: this.props.text
        }
    }
    render() {
        return <button type="button">{this.state.text}</button>
    }
}

class Menu extends React.Component {
    render() {
        return <div>
            <h1>Menu</h1>
            <Button text="TOP 10"/>
            <Button text="TOP 100"/>
        </div>
    }
}

class App extends React.Component {
    render() {
        return <div>
            <Menu/>
        </div>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});