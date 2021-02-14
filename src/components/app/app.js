import React from 'react';
import Header from '../header';
import {Route, Switch} from 'react-router-dom';
import {FavoritePage, PeoplePage, HeroDetails} from '../pages';

import './app.css';
import starwarBg from '../../images/starwar-bg.jpg';

const App = () => {
    return ( 
        <main role="main" className="starwars-app">
            <Header/>
            <Switch>
                <Route 
                    path="/" 
                    render={() => <img className="flex-grow-1" src = {starwarBg} alt="starwar-background"/>}
                    exact 
                />
                <Route 
                    path="/favorites/"
                    component = {FavoritePage}
                />

                <Route 
                    path="/peoples/"
                    component = {PeoplePage}
                />

                <Route 
                    path="/details/"
                    component = {HeroDetails}
                />
               
            </Switch>
        </main>
    );
}
 
export default App;