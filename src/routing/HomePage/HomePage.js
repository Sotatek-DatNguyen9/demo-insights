import React from 'react';
import Navbar from './Navbar/Navbar';
import Content from './Content';
import './HomePage.scss';
import Footer from './Footer/Footer';
function HomePage() {
    return (
        <div className="home-page-wrapper">
            <Navbar></Navbar>
            <Content />
            <Footer />
        </div>
    );
}
 
export default HomePage;