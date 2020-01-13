import React from 'react';
import TranslationsProvider from './TranslationsProvider';
import Sentence from './Sentence'

function App() {
  return (
    <TranslationsProvider>
      <div className="App">
        hola
      </div>
      <Sentence/>
    </TranslationsProvider>
  );
}

export default App;
