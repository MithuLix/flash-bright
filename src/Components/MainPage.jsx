import React from 'react';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import Gallery from './Gallery/Gallery';
import Services from './Services/Services';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';

const MainPage = () => {
    return (
        <div>
            <Home/>

            <Gallery/>

            <Services/>

            <Blog/>

            <Contact/>

            <Footer/>
        </div>
    );
};

export default MainPage;