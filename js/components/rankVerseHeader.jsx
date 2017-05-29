import React from 'react';

export default class RankVerseHeader extends React.Component {
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