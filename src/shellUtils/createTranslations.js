import React, {useContext, useEffect, useState, createContext} from 'react';
import i18next from 'i18next';
import {
  initReactI18next, 
  useTranslation as useI18nextTranslation
} from 'react-i18next';

const i18nextContext = createContext(null);

const createTranslations = (namespace, translations) => {
  const useI18nextInstance = () => {
    const contextInstance = useContext(i18nextContext);
    const [stateInstance, setStateInstance] = useState(null);
    const i18nextInstance = contextInstance || stateInstance;
    const [ready, setReady] = useState(false);
    useEffect(() => {
      if (!i18nextInstance) {
        i18next
          .use(initReactI18next)
          .init({
            resources: {
              en: {
                [namespace]: translations
              }
            },
            lng: "en",
            fallbackLng: "en",
            interpolation: {
              escapeValue: false
            },
          })
          .then(() => {
            setStateInstance(i18next)
            setReady(true);
          });
      } else if (contextInstance) {
        i18nextInstance.addResources('en', namespace, translations);
        setReady(true);
      }
    }, [i18nextInstance, contextInstance, ready, setReady])

    return {
      i18n: i18nextInstance,
      ready,
      isParent: !contextInstance
    }; 
  }

  const useTranslation = (ns) => {
    const {t} = useI18nextTranslation(ns = namespace);
    return {t};
  };

  const Provider = ({children}) => {
    const { i18n, ready, isParent } = useI18nextInstance();
    
    return ready && (isParent ? (
      <i18nextContext.Provider value={i18n}>
        {children}
      </i18nextContext.Provider>
    ) : children);
  }

  return {Provider, useTranslation};
};

export default createTranslations;