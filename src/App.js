//React Dependencies
import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';

//CSS
import './App.css';
import './css/foundation.min.css';
import './css/style.css';

//Routes
import Main from './components/pages/Main.js';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Main/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
