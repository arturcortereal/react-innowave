import React from "react";
import {                                                                // add
    BrowserRouter as Router,                                            // add
    Route,                                                              // add
    Link                                                                // add
} from 'react-router-dom';                                              // add
import loadable from 'loadable-components';

import env from '@env';
const Home = loadable(() => import('./home'));              // change
const About = loadable(() => import('./about'));            // change
const ToDo = loadable(() => import('./todo-app'))           // change

const App = () => {
    console.log('env', env);
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-sm-3">
                    <h1>Hello, world!</h1>
                    <Router>
                        <div>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/todo">ToDo</Link></li>
                            </ul>
                            <hr />

                            <Route exact path="/" component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/todo" component={ToDo} />
                        </div>
                    </Router>
                </div>
            </div>
        </div>
    )
};

export default App;