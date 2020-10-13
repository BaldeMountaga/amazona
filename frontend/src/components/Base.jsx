import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';


function Base(props) {
    return (
        <>
            {props.header ? <Header /> : null}
            {props.sidebar ? <Sidebar /> : null}
            <div className="grid-container">
                <main className="main">
                    <div className="content">
                        {props.children}
                    </div>
                </main>
                <Footer />
            </div> 
        </>
    );
}

export default Base;