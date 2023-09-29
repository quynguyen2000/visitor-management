export interface GetListParams {
  pageNumber: number;
  pageSize: number;
}

export interface ContactGroup {
  name: string;
  id: string;
}
export interface InitialValueInterface {
  id: string;
  name: string;
  staffName: string;
  email: string;
  phone: string;
  note: string;
  gender: string;
  anchorId: string;
  customerGroupId: string;
  dateOfBirth: string;
  address: string;
}

export interface PaginateProp {
  page: number;
  size: number;
}
export interface PaginateOptions {
  table: PaginateProp;
  setTable: (value: any) => void;
  total: number;
  pageCount: number;
}
