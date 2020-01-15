import React from 'react';
import { useTranslation } from './Translations';

const FizzComponent = () => {	
  const { t } = useTranslation();
  return <div>{t('text')}</div>;
}

export default FizzComponent;