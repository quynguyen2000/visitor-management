import { authorizeClient } from '@app/config/api-instance';
import { API_URL } from '@app/constants';

export const GetGroupsApi = async () => await authorizeClient.get(API_URL.GROUPS);
