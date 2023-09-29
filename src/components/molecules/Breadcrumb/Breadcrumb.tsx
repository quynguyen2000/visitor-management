import { ArrowLeftOutlined, HomeOutlined, RightOutlined } from '@ant-design/icons';
import { Breadcrumb as BreadcrumbAntd, Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import './Breadcrumb.scss';

export interface IBreadcrumbItem {
  key: string;
  route?: string;
  name?: string;
}

interface Props {
  items: IBreadcrumbItem[];
}

const { Item } = BreadcrumbAntd;

export const Breadcrumb = ({ items }: Props) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <BreadcrumbAntd
      style={{ padding: '20px 0 24px 0' }}
      separator={<RightOutlined style={{ fontSize: '12px' }} />}
    >
      <Item className='breadcrumb-item' onClick={() => navigate(-1)}>
        <ArrowLeftOutlined />
      </Item>
      <Item className='breadcrumb-item' onClick={() => navigate('/')}>
        <HomeOutlined style={{ fontSize: '16px' }} />
      </Item>
      {items.map((item, index, items) => {
        if (index === items.length - 1) {
          return (
            <Item key={index}>
              {t(`BREADCRUMBS.${item.key.toUpperCase()}`)}
              <Typography.Text className='name_detail'>{item?.name} </Typography.Text>
            </Item>
          );
        }

        return (
          <Item
            key={index}
            className='breadcrumb-item'
            onClick={() => (!item.route ? navigate(`/${item.key}`) : navigate(`/${item.route}`))}
          >
            {t(`BREADCRUMBS.${item.key.toUpperCase()}`)} {item?.name}
          </Item>
        );
      })}
    </BreadcrumbAntd>
  );
};
