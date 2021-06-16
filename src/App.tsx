import logo from "./logo.svg";
import './App.css';
import * as React from 'react';
import ReactGA from 'react-ga';

const trackingId = "UA-199666489-2";

function App() {

    React.useEffect( () => {
        ReactGA.initialize(trackingId);
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    const clickHandler = () => {
        ReactGA.event({
            category: 'Link',
            action: "Clicked the 'Learn React' link on the demo page"
        })
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick = {() => {clickHandler()}}
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
