import { Col, Image, Row, Space, Typography } from 'antd';

import { fTime, toDateData } from '@app/helpers/format';
import { GetLeadDetails } from '@app/interfaces';
import { useNavigate } from 'react-router-dom';
import { SpinLoading } from '../SpinLoading/SpinLoading';
import './FaceRecord.scss';

type Props = {
  datas?: GetLeadDetails[];
  isClick?: boolean;
};

const FaceRecord: React.FC<Props> = ({ datas, isClick }) => {
  const navigate = useNavigate();

  return (
    <>
      <Row gutter={[16, 32]} className='face-record'>
        {datas ? (
          <>
            {datas.map((item, index) => {
              return (
                <Col
                  xs={8}
                  sm={8}
                  md={6}
                  lg={4}
                  xl={4}
                  xxl={4}
                  key={index}
                  onClick={() => (isClick === true ? navigate(`/unknowns/${item.id}`) : '')}
                >
                  <Space className='record-item' direction='vertical'>
                    <Image preview={false} src={item.face} />
                    <Typography.Text>{item.locationName}</Typography.Text>
                    <Typography.Text className='time-text'>{fTime(item.time)}</Typography.Text>
                  </Space>
                </Col>
              );
            })}
          </>
        ) : (
          <SpinLoading size='default' />
        )}
      </Row>
    </>
  );
};

export default FaceRecord;
