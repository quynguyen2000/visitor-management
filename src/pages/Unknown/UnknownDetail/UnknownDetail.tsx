import { Col, Image, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

import { Button, Card, Pagination } from '@app/components/atoms';
import FaceRecord from '@app/components/atoms/FaceRecord/FaceRecord';
import { Breadcrumb, IBreadcrumbItem } from '@app/components/molecules/Breadcrumb/Breadcrumb';
import { dataImgs } from '@app/helpers';
import { fTime } from '@app/helpers/format';
import { GetLeadDetails } from '@app/interfaces';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import './UnknownDetail.scss';

const UnknownDetail: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [data, setData] = useState<GetLeadDetails>();
  const [datas, setDatas] = useState<GetLeadDetails[]>();
  const [table, setTable] = useState({
    page: 1,
    size: 10,
  });

  useEffect(() => {
    const detail = dataImgs.find((data) => data.id === id);
    setData(detail);
    const list = dataImgs.filter((data) => data.anchorId === detail?.anchorId);
    setDatas(list);
  }, [dataImgs]);

  const breadcrumbItems: IBreadcrumbItem[] = [
    { key: 'unknowns' },
    { key: 'detail', name: data?.locationName },
  ];

  return (
    <div className='notification-detail'>
      <Breadcrumb items={breadcrumbItems} />
      {data && (
        <Card className='detail'>
          <Row
            gutter={[32, 16]}
            style={{
              padding: '1rem 2rem',
            }}
          >
            <Col sm={12} md={10} lg={9}>
              <Image preview={false} src={data.frame} width={'100%'} />
            </Col>
            <Col
              sm={12}
              md={14}
              lg={15}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
            >
              <Row>
                <Col
                  xs={10}
                  sm={8}
                  md={6}
                  lg={4}
                  style={{ display: 'flex', alignItems: 'center', height: '100%' }}
                >
                  <Image preview={false} src={data.face} />
                </Col>
                <Col xs={14} sm={16} md={18} lg={20}>
                  <Row
                    style={{
                      paddingLeft: '8px',
                      paddingRight: '8px',
                    }}
                  >
                    <Col
                      sm={12}
                      md={10}
                      lg={8}
                      xl={6}
                      style={{ display: 'flex', height: '100%', flexDirection: 'column' }}
                    >
                      <Typography.Text>Thiết bị</Typography.Text>
                      <Typography.Text>Thời gian</Typography.Text>
                      <Typography.Text>Số lần ghé thăm</Typography.Text>
                    </Col>
                    <Col
                      sm={12}
                      md={14}
                      lg={16}
                      xl={18}
                      style={{ display: 'flex', height: '100%', flexDirection: 'column' }}
                    >
                      <Typography.Text style={{ fontWeight: '700' }}>Cam 1</Typography.Text>
                      <Typography.Text style={{ fontWeight: '700' }}>
                        {fTime(data.time)}
                      </Typography.Text>
                      <Typography.Text style={{ fontWeight: '700' }}>
                        {datas?.length}
                      </Typography.Text>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: '2rem' }}>
                    <Button type='primary'>Thêm nhân viên</Button>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <FaceRecord datas={datas} />
          <Pagination
            paginate={{
              table,
              setTable,
              total: Number(datas?.length),
              pageCount: 1,
            }}
          />
        </Card>
      )}
    </div>
  );
};

export default UnknownDetail;
