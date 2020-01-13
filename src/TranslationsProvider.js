import React, {Fragment, useEffect, useState} from 'react';
import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

const TranslationsProvider = ({children}) => {
  const [i18nextInstance, setI18nextInstance] = useState(null);
  useEffect(() => {
    i18next
      .use(initReactI18next) // passes i18n down to react-i18next
      .init({
        resources: {
          en: {
            translation: {
              "sentence": "Welcome to React and react-i18next"
            }
          }
	    },
	    lng: "en",
	    fallbackLng: "en",
	    interpolation: {
	      escapeValue: false
	    },
	  }).then(() => setI18nextInstance(i18next));
  }, []);

  return i18nextInstance && <Fragment>{children}</Fragment>
}

export default TranslationsProvider;