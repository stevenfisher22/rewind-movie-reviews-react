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
import Details from './components/Details';

ReactDOM.render(
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/seen" component={Seen}/>
                <Route path="/watchlist" component={Watchlist}/>
                <Route path="/search" component={Search}/>
                <Route path="/details" component={Details}/>
            </Switch>
        </App>
    </BrowserRouter>
    , document.querySelector('#root'))