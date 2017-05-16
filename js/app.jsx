import React from 'react';
import ReactDOM from 'react-dom';
import { Router,
Route,
Link,
IndexLink,
IndexRoute,
hashHistory
} from 'react-router';


document.addEventListener('DOMContentLoaded', function(){
    
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});