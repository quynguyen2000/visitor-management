import { GetListParams } from './common.interface';
import { CustomerInterface } from './customer.interface';
import { LeadInterface } from './lead.interface';

export interface GetNotificationsParams extends GetListParams {
  storeIds: number[];
  anchorId?: string;
}
export interface GetOneByAnchorId {
  anchorId?: string;
}

export interface NotificationsInterface {
  id: string;
  storeName: string;
  timestamp: string;
  visitorId: string;
  age: null;
  anchorId: string;
  alertType: number;
  subjectId: string;
  storeId: number;
  userName?: string;
  role: string;
  isRead: boolean;
  isUnknown: boolean;
  lead?: LeadInterface;
  customer?: CustomerInterface;
  facesImage: string;
  frameImage: string;
}
export interface PersonInfoInterface {
  id: string;
  name: string;
  phone: string;
  dateOfBirth: string;
  email: string;
  address: string;
  gender: string;
}
