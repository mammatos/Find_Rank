import React from 'react';

// Import components
import Menu from './menu.jsx';
import Data from './data.jsx';

export default class Container extends React.Component {

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
            this.setState({
                items: response.items,
                label: "10",
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
            this.setState({
                items: response.items,
                label: "50",
            });
        });
    }

}