import React, { Component } from 'react';
import './App.css';
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
  constructor(props) {
    super(props);
    this.x = 0;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollSpy);
  }

  scrollSpy = () => {
    console.log('working');
    console.log(window.scrollTop);

    this.x++;
    console.log(this.x);
  };

  render() {
    return (
      <div className='App' onScroll={this.scrollSpy()}>
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
