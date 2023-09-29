import { authorizeClient } from '@app/config/api-instance';
import { API_URL } from '@app/constants/url';
import { GetNotificationsParams, GetOneByAnchorId } from '@app/interfaces';

export const GetNotificationsApi = async (params: GetNotificationsParams) =>
  await authorizeClient.get(API_URL.NOTIFICATIONS, { params });

export const ReadNotificationsApi = async (id: string) =>
  await authorizeClient.patch(`${API_URL.NOTIFICATIONS}/${id}`);

export const GetNotificationApi = async (id: string) =>
  await authorizeClient.get(`${API_URL.NOTIFICATIONS}/${id}`);

export const GetAllNotificationsApi = async (params: GetOneByAnchorId) =>
  await authorizeClient.get(API_URL.ALL_NOTIFICATIONS, { params });
