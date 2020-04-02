import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import ProjectPage from './components/ProjectPage'
import Canvas from './components/Canvas'
import MainContent from './components/MainContent'
import { BrowserRouter, Route, Switch } from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route exact path='/' component={MainContent} />
            <Route exact path='/project' component={ProjectPage} />
        </Switch>
        <Footer/>
    </div>
</BrowserRouter>
  );
}

export default App;
