import moment, { Moment } from 'moment';
import dayjs from 'dayjs';
import { DATE_TIME } from '@app/constants';
moment.locale('vi');

export const toDateTime = (value: any) => moment(value, DATE_TIME.YEAR_MONTH_DATE);

export const toDateData = (value: any) => moment(new Date(value)).format(DATE_TIME.YEAR_MONTH_DATE);

export const fDate = (value: Date | Moment | null | string | undefined) =>
  moment(value).format(DATE_TIME.DAY_MONTH_YEAR);

export const fYearMonthDayTime = (value: Date | Moment | null) =>
  moment(value).format(DATE_TIME.FULL_YEAR_MONTH_DATE_TIME);

export const fYear = (value: string) => moment(value).format(DATE_TIME.YEAR);

export const fDateTime = (value: string | Moment) =>
  moment(value).format(DATE_TIME.DAY_MONTH_YEAR_TIME);

export const fTime = (value: string | Date | Moment) =>
  moment(value).format(DATE_TIME.FULL_DATE_TIME);

export const fTimeHour = (value: string) => moment(value).format(DATE_TIME.TIME_HH_MM);

export const subtractTime = (date: Date, hours: number) => {
  date.setHours(date.getHours() - hours);
  return date;
};

export const fDatePicker = (value: Date | Moment | null | undefined | string) =>
  dayjs(fDate(value), DATE_TIME.DAY_MONTH_YEAR);
