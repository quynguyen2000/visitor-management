import { authorizeClient } from '@app/config/api-instance';
import { exportName } from '@app/constants';
import { API_URL } from '@app/constants/url';
import {
  CreateNoteInterface,
  GetCustomersParams,
  GetOrderParams,
  UpdateCustomerInterface,
} from '@app/interfaces';

export const GetCustomersApi = async (params: GetCustomersParams) =>
  await authorizeClient.get(API_URL.CUSTOMERS, { params });

export const GetOrdersApi = async (params: GetOrderParams) =>
  await authorizeClient.get(API_URL.KIOT_VIET_ORDERS, { params });

export const GetCustomerApi = async (id: string) =>
  await authorizeClient.get(`${API_URL.CUSTOMERS}/${id}`);

export const CustomerCreateApi = async (customer: FormData) =>
  await authorizeClient.post(API_URL.CUSTOMERS, customer, {
    headers: { 'Content-Type': 'multipart/form-data' },
    timeout: 30000,
  });

export const CreateContactNoteApi = async (params: CreateNoteInterface) =>
  await authorizeClient.post(`${API_URL.CUSTOMERS}/${params.contactId}/notes`, params.content);

export const UpdateContactApi = (params: UpdateCustomerInterface) =>
  authorizeClient.put(`${API_URL.CUSTOMERS}/${params.id}`, params);

export const ExportCustomersApi = async (params: GetCustomersParams) =>
  await authorizeClient
    .get(`${API_URL.CUSTOMERS}${API_URL.EXPORT}`, {
      params,
      method: 'GET',
      responseType: 'blob',
    })
    .then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', exportName);
      document.body.appendChild(link);
      link.click();
    });
