import React, { Component } from 'react';
import './App.scss';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import About from './Components/About';
import Team from './Components/Team';
import Users from './Components/Users';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Team />
        <Users />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
