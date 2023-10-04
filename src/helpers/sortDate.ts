import { GetLeadDetails } from '@app/interfaces';

export function customSort(a: GetLeadDetails, b: GetLeadDetails): number {
  const dateA = new Date(a.time);
  const dateB = new Date(b.time);
  if (dateA < dateB) {
    return -1;
  } else if (dateA > dateB) {
    return 1;
  } else {
    return 0;
  }
}
