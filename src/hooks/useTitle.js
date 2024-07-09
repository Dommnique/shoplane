import { useEffect } from 'react';

export const useTitle = (title) => {

  useEffect(() => {
    document.title = `${title} / Shoplane`
  },[title])

  return null;
}
