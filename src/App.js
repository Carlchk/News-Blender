import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import ContentContainer from './components/ContentContainer';
import Footer from './components/Footer';

const App = () => {

    // useEffect(() => {
    //     console.log("Mounting...");
    // });

    return (
        <>
            <Navbar />
            <div>
                <ContentContainer />
            </div>
            <Footer />
        </>

    );
}

export default App; 