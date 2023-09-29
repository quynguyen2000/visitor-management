import { GetListParams } from './common.interface';

export interface GetVisitorSnapshot {
  storeId: number;
  startTime: string;
  endTime: string;
  page?: number;
  limit?: number;
}
