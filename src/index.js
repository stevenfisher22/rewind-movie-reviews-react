import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

// Import Components
import App from './components/App';
import Poster from './components/Poster';

function Test() {
    return (
        <fragment>
            <Poster />
        </fragment>
    )
}

ReactDOM.render(<Test />, document.querySelector('#root'))