import { ContactGroup } from './common.interface';

export interface LeadInterface {
  id: string;
  name: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  notes: string;
  address: string;
  customerGroup: ContactGroup;
}
export interface CreateLeadInterface {
  id?: string;
  name: string;
  email: string;
  phone: string;
  gender: string;
  noteContent: string;
  anchorId: string;
  customerGroupId: string;
}

export interface UpdateLeadInterface {
  id: string;
  name: string;
  email: string;
  gender: string;
  phone: string;
}

export interface GetLeadDetails {
  id: string;
  face: string;
  anchorId: string;
  frame: string;
  score: number;
  time: string;
  locationName: string;
}
[];
