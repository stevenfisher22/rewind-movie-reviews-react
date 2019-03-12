// React Elements
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// CSS
import './css/index.css';

// Components
import App from './components/App';
import Poster from './components/Poster';
import Home from './components/Home';
import Seen from './components/Seen';
import Watchlist from './components/Watchlist';
import Search from './components/Search';

ReactDOM.render(
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/seen" component={Seen}/>
                <Route path="/watchlist" component={Watchlist}/>
                <Route path="/search" component={Search}/>
            </Switch>
        </App>
    </BrowserRouter>
    , document.querySelector('#root'))