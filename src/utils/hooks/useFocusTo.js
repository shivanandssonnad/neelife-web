/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  FOCUS_TO_SEARCH_PARAM,
  FOCUS_TO_TIMEOUT,
  FOCUS_TO_TOP_OFFSET,
} from '@app/constants';

function useFocusTo(param = FOCUS_TO_SEARCH_PARAM) {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(param);

  const scrollToElement = useCallback(() => {
    const element = document.getElementById(value);
    if (!element) return;
    const offsetTop = element.offsetTop - FOCUS_TO_TOP_OFFSET;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  }, [value]);

  useEffect(() => {
    let timer = null;
    if (value) {
      setTimeout(() => {
        scrollToElement();
        searchParams.delete(param);
        setSearchParams(searchParams, { replace: true });
      }, FOCUS_TO_TIMEOUT);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [value]);
}

export default useFocusTo;
