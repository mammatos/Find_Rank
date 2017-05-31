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
    padding: '200px 400px',
    
  }
};

export default class Data extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            vidId: null
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
                        />
            })}
            

            <Modal
                isOpen={false}
                contentLabel="videoPreview"
                style={videoStyles}
                >
                <div className="videoWrapper">
                    <iframe className="videoFrame" src={"http://youtube.com/embed/" + this.state.vidId}></iframe>
                </div>
            </Modal>
        </div>
    }

    playNow(videoId){
        this.setState({
            vidId: videoId
        });
    }

}