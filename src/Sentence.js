import {useTranslation} from 'react-i18next'

const Sentence = () => {
  const {t} = useTranslation();
  return t('sentence');
}

export default Sentence;