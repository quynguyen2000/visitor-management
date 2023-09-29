import {
  CheckCircleFilled,
  CloseOutlined,
  ExclamationCircleFilled,
  InfoCircleFilled,
  WarningFilled,
} from '@ant-design/icons';
import { notification } from 'antd';

import './OpenNotification.scss';

export enum NotificationTypeEnum {
  SUCCESS = 'success',
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
}

export const openNotificationWithIcon = (type: NotificationTypeEnum, description: string) => {
  let icon;
  switch (type) {
    case NotificationTypeEnum.INFO:
      icon = <InfoCircleFilled style={{ color: 'blue' }} />;
      break;
    case NotificationTypeEnum.ERROR:
      icon = <ExclamationCircleFilled style={{ color: 'red' }} />;
      break;
    case NotificationTypeEnum.WARNING:
      icon = <WarningFilled style={{ color: 'yellow' }} />;
      break;
    case NotificationTypeEnum.SUCCESS:
      icon = <CheckCircleFilled style={{ color: 'green' }} />;
      break;
  }

  notification[type]({
    message: description,
    className: `notification-${type}`,
    closeIcon: <CloseOutlined />,
    placement: 'topRight',
    icon: icon,
  });
};

export const notificationSuccess = (message: string) => {
  return openNotificationWithIcon(NotificationTypeEnum.SUCCESS, message);
};

export const notificationError = (message: string) => {
  return openNotificationWithIcon(NotificationTypeEnum.ERROR, message);
};

export const notificationInfo = (message: string) => {
  return openNotificationWithIcon(NotificationTypeEnum.INFO, message);
};

export const notificationWarning = (message: string) => {
  return openNotificationWithIcon(NotificationTypeEnum.WARNING, message);
};
