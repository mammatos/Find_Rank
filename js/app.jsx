import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
Route,
Link,
IndexLink,
IndexRoute,
hashHistory
} from 'react-router';


//-------------//
//----Menu-----//
//-------------//


class Button extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: this.props.text
        }
    }
    render() {
        return <button type="button"  className="topBtn btn waves-effect waves-light">{this.state.text}</button>
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

//-------------//
//----Rank-----//
//-------------//



class RankVerseHeader extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render() {
        return <div className="rankVerseHeader">
            <div>
                <p>Lp.</p>
            </div>
            <div>
                <p>Nazwa kanału</p>
            </div>
            <div>
                <p>Subskrypcje</p>
            </div>
            <div>
                <p>Przyrost 24h</p>
            </div>
            <div>
                <p>Przyrost 7dni</p>
            </div>
            <div>
                <p>Przyrost miesiąc</p>
            </div>
            <div>
                <p>Wyświetlenia</p>
            </div>
        </div>
    }
}

class RankVerse extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render() {
        return <div className="rankVerse">
            <div>
                <p>Lp.</p>
            </div>
            <div>
                <p>Nazwa kanału</p>
            </div>
            <div>
                <p>Subskrypcje</p>
            </div>
            <div>
                <p>Przyrost 24h</p>
            </div>
            <div>
                <p>Przyrost 7dni</p>
            </div>
            <div>
                <p>Przyrost miesiąc</p>
            </div>
            <div>
                <p>Wyświetlenia</p>
            </div>
        </div>
    }
}

class Data extends React.Component {
    render() {
        return <div>
            <h1>Statystyki</h1>
            <RankVerseHeader/>
            <RankVerse/>
            <RankVerse/>
            <RankVerse/>
            <RankVerse/>
        </div>
    }
}

class App extends React.Component {
    render() {
        return <div className="wrapperApp">
            <Menu/>
            <Data/>
        </div>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});