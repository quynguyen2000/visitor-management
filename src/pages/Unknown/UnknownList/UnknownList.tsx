import { Button, Card, DatePicker, Pagination, TextField } from '@app/components/atoms';
import { Avatar, Col, DatePickerProps, Image, Row, Space, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ImageRedo, VisitTimeImg, VisitorImg } from '@app/assets/images';
import FaceRecord from '@app/components/atoms/FaceRecord/FaceRecord';
import { Breadcrumb, IBreadcrumbItem } from '@app/components/molecules/Breadcrumb/Breadcrumb';
import { DATE_TIME } from '@app/constants';
import { dataImgs } from '@app/helpers';
import { fDate, fDatePicker } from '@app/helpers/format';
import { GetLeadDetails } from '@app/interfaces';
import './UnknownList.scss';

const UnknownList = () => {
  const { t } = useTranslation();
  const [date, setDate] = useState<any>(fDate(new Date()));
  const [datas, setDatas] = useState<GetLeadDetails[]>();

  const [table, setTable] = useState({
    page: 1,
    size: 50,
  });

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    setDate(dateString);
  };

  useEffect(() => {
    const list = dataImgs.filter((data) => fDate(data.time) === date).slice(0, table.size);
    setDatas(list);
  }, [date, table]);

  const breadcrumbItems: IBreadcrumbItem[] = [{ key: 'unknowns' }];

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className='notification'>
        <Card title={t('NOTIFICATION.TITLE')} className='main_card'>
          <Row gutter={32}>
            <Col sm={12} md={12} lg={12} xl={8}>
              <TextField initialValue={Date()}>
                <DatePicker
                  allowClear={false}
                  defaultValue={fDatePicker(new Date())}
                  format={DATE_TIME.DAY_MONTH_YEAR}
                  onChange={onChange}
                />
              </TextField>
            </Col>
          </Row>
          <Row gutter={32}>
            <Col sm={12} md={12} lg={12} xl={8}>
              <Space
                style={{
                  padding: '12px',
                  width: '100%',
                  height: '95px',
                  borderRadius: '15px',
                  border: '2px solid #D8D1FF',
                  margin: '12px 0',
                }}
              >
                <Image preview={false} src={VisitorImg} />
                <Space
                  direction='vertical'
                  style={{
                    margin: '12px',
                    padding: '12px',
                  }}
                >
                  <Typography.Text>Số lượt</Typography.Text>
                  <Typography.Text
                    style={{
                      rowGap: '0px',
                      fontWeight: 'bold',
                      fontSize: '24px',
                    }}
                  >
                    17
                  </Typography.Text>
                </Space>
              </Space>
            </Col>
            <Col sm={12} md={12} lg={12} xl={8}>
              <Space
                direction='horizontal'
                style={{
                  padding: '12px',
                  width: '100%',
                  height: '95px',
                  borderRadius: '15px',
                  border: '2px solid #D8D1FF',
                  margin: '12px 0',
                }}
              >
                <Image preview={false} src={VisitTimeImg} />

                <Space
                  direction='vertical'
                  style={{
                    gap: '0px',
                    margin: '12px',
                    padding: '12px',
                  }}
                >
                  <Typography.Text>Số người</Typography.Text>
                  <Typography.Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: '24px',
                    }}
                  >
                    14
                  </Typography.Text>
                </Space>
              </Space>
            </Col>
          </Row>
          {datas && <FaceRecord isClick={true} datas={datas} />}
          <Pagination
            paginate={{
              table,
              setTable,
              total: Number(datas?.length),
              pageCount: 1,
            }}
          />
        </Card>
      </div>
    </>
  );
};

export default UnknownList;
