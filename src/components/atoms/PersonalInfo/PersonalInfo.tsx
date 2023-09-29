import { LeadIcon, UnknownIcon, VipIcon } from '@app/assets/icons';
import { fDate } from '@app/helpers/format';
import { PersonInfoInterface } from '@app/interfaces';
import { Avatar, Col, Row, Space, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './PersonalInfo.scss';

type Props = {
  contact: any;
  contactType: string;
};

const PersonalInfo: React.FC<Props> = ({ contact, contactType }) => {
  const { t } = useTranslation();

  const [data, setData] = useState<PersonInfoInterface>();

  useEffect(() => {
    switch (contactType) {
      case 'unknown':
        setData({
          id: contact.id ? contact.id : '',
          name: contact.userName ? contact.userName : '',
          phone: '',
          dateOfBirth: '',
          email: '',
          address: '',
          gender: '',
        });
        break;
      case 'vip':
        setData({
          id: contact.id ? contact.id : '',
          name: contact?.name ? contact?.name : '',
          phone: contact?.phone ? contact?.phone : '',
          dateOfBirth: contact?.dateOfBirth ? contact?.dateOfBirth : '',
          email: contact?.email ? contact?.email : '',
          address: contact?.address ? contact?.address : '',
          gender: contact?.gender ? contact?.gender : '',
        });

        break;
      case 'lead':
        setData({
          id: contact.id ? contact.id : '',
          name: contact?.name ? contact?.name : '',
          phone: contact?.phone ? contact?.phone : '',
          dateOfBirth: contact?.dateOfBirth ? contact?.dateOfBirth : '',
          email: contact?.email ? contact?.email : '',
          address: contact?.address ? contact?.address : '',
          gender: contact?.gender ? contact?.gender : '',
        });
        break;
    }
  }, [contact]);

  return (
    <Space className='person-info' direction='vertical'>
      <Row>
        <Typography.Text style={{ fontWeight: 700, marginBottom: '1rem' }}>
          <Avatar
            size={20}
            src={contactType === 'vip' ? VipIcon : contactType === 'lead' ? LeadIcon : UnknownIcon}
            style={{ marginRight: '7px' }}
          />
          {t('CONTACT.MODAL_NAME', {
            name: data?.name,
            type: t(`TYPE.${contactType.toUpperCase()}`),
          })}
        </Typography.Text>
      </Row>
      <Row gutter={8}>
        <Typography.Text style={{ fontWeight: 700 }}>{t('CONTACT.ID')}</Typography.Text>
        <Col>
          {data?.id ? (
            <Typography.Text style={{ fontSize: '14px' }}>{data?.id}</Typography.Text>
          ) : (
            <Typography.Text className='no-data'>{t('EMPTY.NO_DATA')}</Typography.Text>
          )}
        </Col>
      </Row>
      <Row gutter={8}>
        <Typography.Text style={{ fontWeight: 700 }}>{t('CONTACT.PHONE')}</Typography.Text>
        <Col>
          {data?.phone ? (
            <Typography.Text style={{ fontSize: '14px' }}>{data?.phone}</Typography.Text>
          ) : (
            <Typography.Text className='no-data'>{t('EMPTY.NO_DATA')}</Typography.Text>
          )}
        </Col>
      </Row>
      <Row gutter={8}>
        <Typography.Text style={{ fontWeight: 700 }}>{t('CONTACT.DATE_OF_BIRTH')}</Typography.Text>
        <Col>
          {data?.dateOfBirth ? (
            <Typography.Text style={{ fontSize: '14px' }}>
              {fDate(data?.dateOfBirth)}
            </Typography.Text>
          ) : (
            <Typography.Text className='no-data'>{t('EMPTY.NO_DATA')}</Typography.Text>
          )}
        </Col>
      </Row>
      <Row gutter={8}>
        <Typography.Text style={{ fontWeight: 700 }}>{t('CONTACT.GENDER')}</Typography.Text>
        <Col>
          {data?.gender ? (
            <Typography.Text style={{ fontSize: '14px' }}>
              {t(`GENDER.${data?.gender.toUpperCase()}`)}
            </Typography.Text>
          ) : (
            <Typography.Text className='no-data'>{t('EMPTY.NO_DATA')}</Typography.Text>
          )}
        </Col>
      </Row>
      <Row gutter={8}>
        <Typography.Text style={{ fontWeight: 700 }}>{t('CONTACT.EMAIL')}</Typography.Text>
        <Col>
          {data?.email ? (
            <Typography.Text style={{ fontSize: '14px' }}>{data?.email}</Typography.Text>
          ) : (
            <Typography.Text className='no-data'>{t('EMPTY.NO_DATA')}</Typography.Text>
          )}
        </Col>
      </Row>
      <Row gutter={8}>
        <Typography.Text style={{ fontWeight: 700, marginBottom: '1rem' }}>
          {t('CONTACT.ADDRESS')}
        </Typography.Text>
        <Col>
          {data?.address ? (
            <Typography.Text style={{ fontSize: '14px' }}>{data?.address}</Typography.Text>
          ) : (
            <Typography.Text className='no-data'>{t('EMPTY.NO_DATA')}</Typography.Text>
          )}
        </Col>
      </Row>
    </Space>
  );
};

export default PersonalInfo;
