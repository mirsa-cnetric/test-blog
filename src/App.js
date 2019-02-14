import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Home';
import About from './About';
import Posts from './Posts';

const App = () => {
    return (
        <BrowserRouter>
            <div className="blog-wrapper">
                <Header />

                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/posts" component={Posts}/>
            
                <Footer />           
            </div>
        </BrowserRouter>
    )
}

export default App;