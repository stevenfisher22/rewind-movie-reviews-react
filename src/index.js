import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

// Import Components
import App from './components/App';
import Poster from './components/Poster';

function Index() {
    return (
        <>
            <App />
        </>
    )
}

ReactDOM.render(<Index />, document.querySelector('#root'))