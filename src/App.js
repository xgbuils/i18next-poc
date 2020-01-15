import React from 'react';
import FooComponent from './fooModule/Component';
import BarComponent from './barModule/Component';
import FizzComponent from './fizzModule/Component';

import { Provider as FooTranslationsProvider } from './fooModule/Translations';
import { Provider as BarTranslationsProvider } from './barModule/Translations';
import { Provider as FizzTranslationsProvider } from './fizzModule/Translations';

function App() {
  return (
    <BarTranslationsProvider>
      <FooTranslationsProvider>
        <FizzTranslationsProvider>
          <FooComponent/>
          <BarComponent/>
          <FizzComponent/>
        </FizzTranslationsProvider>
      </FooTranslationsProvider>
    </BarTranslationsProvider>
  );
}

export default App;
