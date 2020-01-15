import createTranslations from '../shellUtils/createTranslations';

const { Provider, useTranslation } = createTranslations('fizzNamespace', {
  text: "a FIZZ text fiiiiiizz"
});

export {
  Provider,
  useTranslation
};