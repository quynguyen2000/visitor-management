import { useState, useEffect } from 'react';

import { REQUEST_DEBOUNCE_DEFAULT_TIME } from '@app/constants';

export const useDebounce = (value: any, delay = REQUEST_DEBOUNCE_DEFAULT_TIME) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
