import { QUERY_KEY } from '@app/constants/query';
import { GetVisitorSnapshot } from '@app/interfaces';
import { GetFaceClusterApi, GetFaceFrameApi, GetVisitorSnapShotApi } from '@app/services';
import { useQuery, useQueryClient } from '@tanstack/react-query';

export const useGetVisitorSnapShot = (params: GetVisitorSnapshot) =>
  useQuery([QUERY_KEY.VISITOR_SNAPSHOT, { ...params }], async () => {
    const { data } = await GetVisitorSnapShotApi(params);
    return data.data;
  });

export const useGetFaceFrame = (id: string) =>
  useQuery([QUERY_KEY.FACES, id], async () => {
    const { data } = await GetFaceFrameApi(id);
    return data.data;
  });

export const useGetFaceCluster = (id: string) =>
  useQuery([QUERY_KEY.CLUTTER, id], async () => {
    const { data } = await GetFaceClusterApi(id);
    return data.data;
  });
