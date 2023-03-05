import React from 'react'
import Header from './Section/Header/Header';
import Navbar from './Section/Navbar/NavBar';
import About from './Section/About/About';
import Service from './Section/Services/Service';
import Portfolio from './Section/Portfolio/Portfolio';
import Testmonial from './Section/Testmonial/Testmonial';
import FAQs from './Section/Faqs/FAQs';
import Contact from './Section/Contact/Contact'
import Footer from './Section/Footer/Footer';
import FloatingNav from './Section/FloatingNav/FloatingNav';

const App = () => {
  return (
    <main>
        <Navbar/>
        <Header/>
        <About/>
        <Service/>
        <Portfolio/>
        <Testmonial/>
        <FAQs/>
        <Contact/>
       {/* <Footer/>   */}
        <FloatingNav/>
        
    </main>
  )
}

export default App

