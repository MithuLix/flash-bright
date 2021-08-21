import React from 'react';
import Home from './Home/Home';
import Services from './Services/Services';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';

const MainPage = () => {
    return (
        <div>
            <Home/>

            <Services/>

            <Blog/>

            <Contact/>

        </div>
    );
};

export default MainPage;