import React from 'react';
import { useTranslation } from './Translations';

const BarComponent = () => {	
  const { t } = useTranslation();
  return <div>{t('text')}</div>;
}

export default BarComponent;