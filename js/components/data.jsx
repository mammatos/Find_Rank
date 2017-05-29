import React from 'react';

// Import components
import RankVerseHeader from './rankVerseHeader.jsx';
import RankVerse from './rankVerse.jsx';

export default class Data extends React.Component {

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