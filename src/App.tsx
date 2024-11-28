import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Commitment from './components/Commitment';
import MapText from './components/MapText';


const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Home />
        <Commitment />
        <MapText />
      </main>
    </div>
    
  );
};

export default App;

