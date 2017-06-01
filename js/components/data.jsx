import React from 'react';
import Modal from 'react-modal';

// Import components
import RankVerseHeader from './rankVerseHeader.jsx';
import RankVerse from './rankVerse.jsx';

const videoStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '3rem',
    
  }
};

export default class Data extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            vidId: null,
            swithVideo: false
        };
    }

    render() {
        return <div className="dataSide">
            <h1 className="dataDescription">TOP {this.props.label}</h1>
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
                            showVideo={(bool) => {this.showNow(bool)}}
                        />
            })}

            <Modal
                isOpen={this.state.swithVideo}
                contentLabel="videoPreview"
                style={videoStyles}
                >
                <iframe className="videoFrame" src={"http://youtube.com/embed/" + this.state.vidId}></iframe>
                <button className="btn-close">
                    <i className="fa fa-times fa-2x" aria-hidden="true"></i>
                </button>
            </Modal>
        </div>
    }

    playNow(videoId){
        this.setState({
            vidId: videoId
        });
    }

    showNow(bool){
        this.setState({
            swithVideo: true
        });
    }

}