import { queryOptions } from '@app/config/query-option';
import { QUERY_KEY } from '@app/constants/query';
import { SubscribeToTopicInterface } from '@app/interfaces/topic.interface';
import { GetTopicsApi, SubscribeTopic, UnSubscribeTopic } from '@app/services';
import { useMutation, useQuery } from '@tanstack/react-query';
import { notification } from 'antd';

export const useGetTopics = () =>
  useQuery(
    [QUERY_KEY.TOPICS],
    async () => {
      const { data } = await GetTopicsApi();
      return data;
    },
    {
      ...queryOptions,
    },
  );

export const useSubscribeToTopic = () =>
  useMutation(
    async (params: SubscribeToTopicInterface) => {
      await SubscribeTopic(params);
    },
    {
      onSuccess: (_data) => {
        notification.success({
          message: 'Subscribe successfully',
        });
      },
    },
  );

export const useUnSubscribeToTopic = () =>
  useMutation(
    async (params: SubscribeToTopicInterface) => {
      await UnSubscribeTopic(params);
    },
    {
      onSuccess: (_data) => {
        notification.success({
          message: 'Unsubscribe successfully',
        });
      },
    },
  );
