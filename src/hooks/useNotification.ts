import { QUERY_KEY } from '@app/constants/query';
import { GetNotificationsParams, GetOneByAnchorId } from '@app/interfaces';
import {
  GetAllNotificationsApi,
  GetNotificationApi,
  GetNotificationsApi,
  ReadNotificationsApi,
} from '@app/services';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useGetNotifications = (params: GetNotificationsParams) =>
  useQuery(
    [QUERY_KEY.NOTIFICATIONS],
    async () => {
      const { data } = await GetNotificationsApi(params);
      return data;
    },
    { cacheTime: 0 },
  );

export const useReadNotification = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (id: string) => {
      const response = await ReadNotificationsApi(id);
      return response.data;
    },
    {
      onSuccess() {
        queryClient.refetchQueries([QUERY_KEY.NOTIFICATIONS]);
      },
    },
  );
};

export const useGetNotification = (id: string) =>
  useQuery([QUERY_KEY.NOTIFICATIONS, id], async () => {
    const { data } = await GetNotificationApi(id);
    return data.data;
  });

export const useGetAllNotification = (params: GetOneByAnchorId) =>
  useQuery([QUERY_KEY.ALL_NOTIFICATIONS], async () => {
    const { data } = await GetAllNotificationsApi(params);
    return data.data;
  });
