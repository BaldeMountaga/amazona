import React from 'react';
import Footer from '../components/Footer';

function Base(props) {
    return (
        <>
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