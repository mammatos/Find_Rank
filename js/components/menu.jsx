import React from 'react';

// Import components
import Button from './button.jsx';

export default class Menu extends React.Component {
    render() {
        return <div className="menuWrapper">
            <h1 className="menuInfo">Zobacz najpopularniejsze video na YouTube</h1>
            <h2 className="menuTitle">Wybierz
                <i className=" arrowIcon fa fa-arrow-right" aria-hidden="true"></i>
            </h2>
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