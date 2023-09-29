import { CloseCircleOutlined } from '@ant-design/icons';
import { Row, Typography } from 'antd';
import { t } from 'i18next';

import { EmptyBox } from '@app/assets/images';
import './EmptyData.scss';

interface Props {
  content?: string;
}

export const EmptyData = ({ content }: Props) => {
  return (
    <div className='empty-container'>
      <Row className='children-container'>
        <Typography className='empty-text'>{content ? content : t('EMPTY.NO_DATA')}</Typography>
        <div className='empty-img'>
          <img src={EmptyBox} alt='#' />
        </div>
      </Row>
    </div>
  );
};
