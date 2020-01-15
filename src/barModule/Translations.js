import createTranslations from '../shellUtils/createTranslations';

const { Provider, useTranslation } = createTranslations('barNamespace', {
  text: "This is a BAR text"
});

export {
  Provider,
  useTranslation
};