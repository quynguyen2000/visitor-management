import i18n from '@app/config/i18n';

export function formatTimeAgo(timestamp: string) {
  const currentTime = new Date();

  const formattedTimestamp = new Date(timestamp).toISOString().replace('T', ' ').replace('Z', '');

  const timestampObj = new Date(formattedTimestamp);

  const timeDifference = currentTime.getTime() - timestampObj.getTime();

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months =
    currentTime.getMonth() -
    new Date(timestamp).getMonth() +
    12 * (currentTime.getFullYear() - new Date(timestamp).getFullYear());
  const years = Math.floor(months / 12);

  if (years > 0) {
    return `${i18n.t('DATE.YEARS', { value: years })}`;
  } else if (months > 0) {
    return `${i18n.t('DATE.MONTHS', { value: months })}`;
  } else if (weeks > 0) {
    return `${i18n.t('DATE.WEEKS', { value: weeks })}`;
  } else if (days > 0) {
    return `${i18n.t('DATE.DAYS', { value: days })}`;
  } else if (hours > 0) {
    return `${i18n.t('DATE.HOURS', { value: hours })}`;
  } else if (minutes > 0) {
    return `${i18n.t('DATE.MINUTES', { value: minutes })}`;
  } else {
    return `${i18n.t('DATE.SECONDS', { value: seconds })}`;
  }
}

export function hoursAgo(timestamp: string) {
  const currentTime = new Date();

  const formattedTimestamp = new Date(timestamp).toISOString().replace('T', ' ').replace('Z', '');

  const timestampObj = new Date(formattedTimestamp);

  const timeDifference = currentTime.getTime() - timestampObj.getTime();

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  return hours;
}
