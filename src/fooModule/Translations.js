import createTranslations from '../shellUtils/createTranslations';

const {Provider, useTranslation} = createTranslations('fooNamespace', {
  "text": "FOO FOO text"
});

export {
  Provider,
  useTranslation
};