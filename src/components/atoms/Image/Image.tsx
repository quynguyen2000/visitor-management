import { CameraFilled } from '@ant-design/icons';
import { Image, Row, Space, Upload } from 'antd';
import { useState } from 'react';

import { fileToBase64 } from '@app/helpers';
import { RcFile } from 'antd/es/upload';
import './Image.scss';

interface Props {
  isUpload: boolean;
  imgUrl: string;
  setLogoFile?: (file: RcFile) => void;
}

export const ImageUpdate: React.FC<Props> = ({ isUpload, setLogoFile, imgUrl }) => {
  const [imageUrl, setImageUrl] = useState(null);

  const handleChange = async (info: any) => {
    setLogoFile && setLogoFile(info.file.originFileObj);
    fileToBase64(info.file.originFileObj, (url: any) => {
      setImageUrl(url);
    });
  };

  return (
    <div className={`image-update ${isUpload !== true ? 'upload-img' : ''}`}>
      <Space direction='vertical'>
        <Image preview={false} src={imageUrl ? imageUrl : imgUrl} />
        {isUpload === true ? (
          <Upload
            accept={'image/jpeg, image/jpg'}
            name='logo'
            listType='picture-card'
            showUploadList={false}
            onChange={handleChange}
          >
            <CameraFilled className='icon-camera' />
          </Upload>
        ) : (
          ''
        )}
      </Space>
    </div>
  );
};
