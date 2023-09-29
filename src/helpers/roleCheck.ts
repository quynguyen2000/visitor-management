import { ContactGroup, NotificationsInterface, PersonInfoInterface } from '@app/interfaces';

export const getName = (item: NotificationsInterface) => {
  if (item?.isUnknown === true) {
    return item?.userName;
  } else if (item?.customer !== null) {
    return item?.customer?.name;
  } else if (item?.lead !== null) {
    return item.lead?.name;
  } else {
    return '';
  }
};

export const getType = (item: NotificationsInterface) => {
  if (item?.isUnknown === true) {
    return 'unknown';
  } else if (item?.customer?.customerGroup) {
    return item?.customer?.customerGroup.name;
  } else {
    return item?.lead?.customerGroup.name;
  }
};

export const getGroup = (groups: ContactGroup[], type: string | undefined): string => {
  const groupType = type === 'customer_create' || type === 'customer_update' ? 'vip' : 'lead';
  const value = groups?.find((item: ContactGroup) => item.name === groupType);
  return `${value?.id}`;
};

export const getNotifyByAnchorId = (data: NotificationsInterface[], anchorId: string) => {
  return data?.filter((notification: NotificationsInterface) => notification.anchorId === anchorId);
};
