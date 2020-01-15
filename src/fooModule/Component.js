import React from 'react';
import { useTranslation } from './Translations';

const FooComponent = () => {	
  const { t } = useTranslation();
  return <div>{t('text')}</div>;
}

export default FooComponent;