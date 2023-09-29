import { Result } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Button } from '@app/components/atoms';
import './NotFound.scss';

const NotFound: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className='not-found'>
      <Result
        status='404'
        title='404'
        subTitle='Sorry, the page you visited does not exist.'
        extra={
          <Button type='primary' onClick={() => navigate('/')}>
            {t('NOT_FOUND.BACK_HOME')}
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;
