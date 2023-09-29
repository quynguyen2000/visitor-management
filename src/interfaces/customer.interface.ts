import { RcFile } from 'antd/es/upload';
import { ContactGroup, GetListParams } from './common.interface';

export interface GetOrderParams extends GetListParams {
  kiotVietCustomerCode: string | null;
}
export interface GetCustomersParams extends GetListParams {
  search: string | null;
  ContactGroupNames: string[] | null;
}

export interface CustomerListType {
  id: string;
  name: string;
  contactGroupName: ContactGroup;
  phone: string;
  dayOfBirth: string;
  staffName: string;
}

export interface OrderDataType {
  key: string;
  code: number | string;
  purchaseDate: string;
  branchName: string;
  total: string;
  notes?: string;
  statusValue?: string;
  totalPayment?: number;
}
export interface CreateNoteInterface {
  contactId: string;
  content: string;
}

export interface CustomerInterface {
  id: string;
  name: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  notes: string;
  address: string;
  customerGroup: ContactGroup;
}

export interface CreateCustomerInterface {
  name: string;
  email: string;
  phone: string;
  note: string;
  gender: string;
  anchorId: string;
  customerGroupId: string;
  img: RcFile;
}
export interface UpdateCustomerInterface {
  id: string;
  name: string;
  phone: string;
  gender: string;
  customerGroupId: string;
  email: string;
  dateOfBirth: string;
  address: string;
}
