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
        return <button 
                    type="button"  
                    className="topBtn btn waves-effect waves-light"
                    onClick={event => this.onClick(event)}
                >
                    {this.state.text}
                </button>
    }

    onClick(event){
        // console.log("To jest miejsce gdzie powstała metoda dla eventu click w klasie buttona" + this.state.text);
        // console.log("this.props.callback", this.props.mojafunkcja);
        this.props.mojafunkcja();

    }
}

class Menu extends React.Component {
    render() {
        return <div>
            <h1>Menu</h1>
            <Button 
                text="TOP 10"
                mojafunkcja={() => this.handleTop10ButtonClicked()}
            />
            <Button 
                text="TOP 50"
                mojafunkcja={() => this.handleTop50ButtonClicked()}
            />
        </div>
    }

    handleTop10ButtonClicked() {
        this.props.callback10();
    }

    handleTop50ButtonClicked() {
        this.props.callback50();
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
                <p className="rankHeaderNumber">Lp.</p>
            </div>
            <div>
                <p className="rankHeaderCell">Nazwa kanału</p>
            </div>
            <div>
                <p className="rankHeaderCell">Nazwa video</p>
            </div>
            <div>
                <p className="rankHeaderCell">Wyświetlenia</p>
            </div>
            <div>
                <p className="rankHeaderCell"><i className="fa fa-thumbs-up" aria-hidden="true"></i></p>
            </div>
            <div>
                <p className="rankHeaderCell"><i className="fa fa-thumbs-down" aria-hidden="true"></i></p>
            </div>
            <div>
                <p className="rankHeaderCell">Zobacz</p>
            </div>
        </div>
    }
}

class RankVerse extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return <div className="rankVerse">
            <div>
                <p className="numberCell">{this.props.lp}</p>
            </div>
            <div>
                <p className="rankCell">{this.props.channelTitle}</p>
            </div>
            <div>
                <p className="rankCell">{this.props.title}</p>
            </div>
            <div>
                <p className="rankCell">{this.props.views}</p>
            </div>
            <div>
                <p className="rankCell">{this.props.likes}</p>
            </div>
            <div>
                <p className="rankCell">{this.props.dislikes}</p>
            </div>
            <div>
                <p className="rankCell">
                    <a href={"http://youtube.com/embed/" + this.props.videoId} target="_blank">
                        <i className="play waves-effect waves-light fa fa-play-circle medium" aria-hidden="true"></i>
                    </a>
                </p>
            </div>
        </div>
    }
}

class Data extends React.Component {
    render() {
        return <div>
            <h1>Statystyki</h1>
            <h2>{this.props.label}</h2>
            <RankVerseHeader/>
            {this.props.items.map((item, index) => {
                return <RankVerse 
                            lp={index + 1} 
                            channelTitle={item.snippet.channelTitle} 
                            title={item.snippet.title} 
                            views={item.statistics.viewCount}
                            likes={item.statistics.likeCount}
                            dislikes={item.statistics.dislikeCount}
                            videoId={item.id}
                            key={item.id}
                        />
            })}
        </div>
    }
}

class Container extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            items: [],
            label: ""
        };
    }

    render() {
        return <div className="wrapperApp">
            <Menu
                callback10={() => this.runApiTop10()}
                callback50={() => this.runApiTop50()}
            />
            <Data 
                items={this.state.items}
                label={this.state.label}
            />
        </div>
    }

    runApiTop10(){
        $.ajax({
            url: 'https://www.googleapis.com/youtube/v3/videos',
            data:{
                key: 'AIzaSyD73j-Kz8sdfXHx_br5UhXPxP0eNpjw-WQ',
                part: 'contentDetails, statistics, snippet',
                chart: 'mostPopular',
                maxResults: '10'
            }, 
            method: 'GET'
        })
        .done((response) => {
            console.log(response);
            this.setState({
                items: response.items,
                label: "top 10"
            });
        });
    }

    runApiTop50(){
        $.ajax({
            url: 'https://www.googleapis.com/youtube/v3/videos',
            data:{
                key: 'AIzaSyD73j-Kz8sdfXHx_br5UhXPxP0eNpjw-WQ',
                part: 'contentDetails, statistics, snippet',
                chart: 'mostPopular',
                maxResults: '50'
            }, 
            method: 'GET'
        })
        .done((response) => {
            console.log(response);
            this.setState({
                items: response.items,
                label: "top 50",
            });
        });
    }

}

class App extends React.Component {

    render() {
        return <Container/>
    }

}

document.addEventListener('DOMContentLoaded', function(){
    
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );

});