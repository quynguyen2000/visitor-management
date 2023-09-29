import { QUERY_KEY } from '@app/constants/query';
import { GetGroupsApi } from '@app/services';

import { useQuery } from '@tanstack/react-query';

export const useGetGroups = () =>
  useQuery([QUERY_KEY.CUSTOMERS], async () => {
    const { data } = await GetGroupsApi();
    return data.data;
  });
