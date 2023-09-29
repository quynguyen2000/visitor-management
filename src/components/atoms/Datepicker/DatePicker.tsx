import { CloseOutlined } from '@ant-design/icons';
import { DatePicker as DatePickerAnt, DatePickerProps } from 'antd';
import vi from 'antd/es/date-picker/locale/vi_VN';

import 'moment/dist/locale/vi';
import './DatePicker.scss';

type Props = {
  placeholder?: string;
  format?: string;
} & DatePickerProps;

export const DatePicker: React.FC<Props> = (props) => {
  return (
    <DatePickerAnt
      locale={vi}
      {...props}
      inputReadOnly={true}
      className='date-picker'
      clearIcon={<CloseOutlined style={{ scale: '0.9' }} />}
    />
  );
};
