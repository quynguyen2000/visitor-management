import { authorizeClient } from '@app/config/api-instance';
import { API_URL } from '@app/constants/url';
import { GetVisitorSnapshot } from '@app/interfaces';

export const GetFaceFrameApi = async (id: string) =>
  await authorizeClient.get(`${API_URL.FACE_FRAMES}?visitorId=${id}`);

export const GetFaceClusterApi = async (id: string) =>
  await authorizeClient.get(`${API_URL.FACE_CLUSTERS}?visitorId=${id}&count=10`);

export const GetVisitorSnapShotApi = async (params: GetVisitorSnapshot) =>
  await authorizeClient.get(`${API_URL.VISITOR_SNAPSHOT}`, { params });
