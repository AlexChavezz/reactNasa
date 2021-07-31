import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { HomeScreen } from '../components/screens/HomeScreen'
import { PictureOFDay } from '../components/screens/pictureoftheday/PictureOFDay'
import { NavBar } from '../components/NavBar/NavBar';
import { AsteroidsNeoWs } from '../components/screens/AsteroidsNeoWs';

export const AppRouter = () => {
    return (
        <Router>
            <NavBar />
            <div>
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route exact path="/PictureOFDay" component={PictureOFDay} />
                    <Route exact path="/AsteroidsNeoWs" component={AsteroidsNeoWs} />
                </Switch>
            </div>
        </Router>
    )
}
