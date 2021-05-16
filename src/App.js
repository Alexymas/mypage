import React, {useState, useEffect} from 'react';
import './App.css';
import Cover from './components/cover/Cover';
import NavBar from  './components/navbar/NavBar';
import About from './components/about/About';
import Slider from './components/slider/Slider'
import Info from './components/info/Info'
import Footer from './components/footer/Footer'


function App() {

  const [scrollHeight, setScrollHeight] = useState(0);

  const handlerScroll = () =>{
    const position = window.pageYOffset;
    setScrollHeight(position)
  };

  useEffect(()=>{
    window.addEventListener("scroll", handlerScroll)
  }, [scrollHeight])

  return (
    <div className="App">
      <NavBar isScrolling={scrollHeight} />
      <Cover />
      <About />
      <Slider/>
      <About/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;
