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
        this.props.mojafunkcja();

    }
}

class Menu extends React.Component {
    render() {
        return <div className="menuWrapper">
            <h1 className="menuTitle">Wybierz
                <i className=" arrowIcon fa fa-arrow-right" aria-hidden="true"></i>
            </h1>
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
                <p className="rankColNumber">Lp.</p>
            </div>
            <div>
                <p className="rankColChannel">Nazwa kanału</p>
            </div>
            <div>
                <p className="rankColVideoName">Nazwa video</p>
            </div>
            <div>
                <p className="rankColViews">Wyświetlenia</p>
            </div>
            <div>
                <p className="rankColLikes">
                    <i className="thumbUp fa fa-thumbs-up" aria-hidden="true"></i>
                </p>
            </div>
            <div>
                <p className="rankColDislikes">
                    <i className="thumbDown fa fa-thumbs-down" aria-hidden="true"></i>
                </p>
            </div>
            <div>
                <p className="rankColPlay">Zobacz</p>
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
                <p className="rankColNumber">{this.props.lp}</p>
            </div>
            <div>
                <p className="rankColChannel">{this.props.channelTitle}</p>
            </div>
            <div>
                <p className="rankColVideoName">{this.props.title}</p>
            </div>
            <div>
                <p className="rankColViews">{this.props.views}</p>
            </div>
            <div>
                <p className="rankColLikes">{this.props.likes}</p>
            </div>
            <div>
                <p className="rankColDislikes">{this.props.dislikes}</p>
            </div>
            <div>
                <p className="rankColPlay">
                    <button 
                        className="playBtn waves-effect waves-light btn-large red"
                        onClick={event => this.onClickPlay(event)}
                    >
                        <i className="playIcon fa fa-play" aria-hidden="true"></i>
                    </button>
                </p>
            </div>
        </div>
    }

    onClickPlay(){
        this.props.mojafunkcja(this.props.videoId);
        console.log("mojafunkcja", this.props.mojafunkcja);
    }

}

class Data extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            vidId: null
        };
    }

    render() {
        return <div className="dataSide">
            <h1 className="dataTitle">Sprawdź najbardziej popularne video na YouTube</h1>
            {/*<h2 className="dataDescription">{this.props.label}</h2>*/}
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
                            mojafunkcja={(videoId) => {this.playNow(videoId)}}
                        />
            })}
            <div className="videoWrapper">
                <iframe className="videoFrame" src={"http://youtube.com/embed/" + this.state.vidId}></iframe>
            </div>
        </div>
    }

    playNow(videoId){
        this.setState({
            vidId: videoId
        });
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
            // console.log(response);
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
            // console.log(response);
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