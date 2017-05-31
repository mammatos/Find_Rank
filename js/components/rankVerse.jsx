import React from 'react';

export default class RankVerse extends React.Component {
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
                        className="playBtn waves-effect waves-light red"
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
    }

}