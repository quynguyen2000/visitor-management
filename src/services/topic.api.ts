import { authorizeClient } from '@app/config/api-instance';
import { SubscribeToTopicInterface } from '@app/interfaces/topic.interface';
import { API_URL } from '@app/constants/url';

export const GetTopicsApi = async () => await authorizeClient.get(API_URL.STORES);

export const SubscribeTopic = async (params: SubscribeToTopicInterface) =>
  await authorizeClient.post(API_URL.SUBSCRIBE_TOPIC, params);

export const UnSubscribeTopic = async (params: SubscribeToTopicInterface) =>
  await authorizeClient.post(API_URL.UNSUBSCRIBE_TOPIC, params);
