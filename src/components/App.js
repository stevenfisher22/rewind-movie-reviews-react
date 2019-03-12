// React Elements
import React from 'react';

// CSS
import '../css/app.css';

// Components
import NavBar from '../components/Navbar';

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <NavBar />
                {this.props.children}
            </div>
        )
    }
}



export default App