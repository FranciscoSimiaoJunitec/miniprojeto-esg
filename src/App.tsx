import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Commitment from './components/Commitment';
import MapText from './components/MapText';
import Progress from './components/Progress';
import Gallery from './components/Gallery';
const App: React.FC = () => {
  return (
    <div className="font-sans">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      <main className="pt-12"> 
        <Home />
        <Commitment />
        <Progress />
        <Gallery />
     
        <MapText />
      </main>
    </div>
  );
};

export default App;

