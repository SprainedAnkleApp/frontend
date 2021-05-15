import { useState, useEffect } from 'react';

export type Fetcher<T> = (
  page: number
) => Promise<{ pages: number; data: T[] }>;

const usePaginatedData = function <T>(fetcher: Fetcher<T>) {
  const [currentPage, setCurrentPage] = useState(0);
  //TODO add checking if posts were all loaded
  const [hasMore] = useState(true);
  const [data, setData] = useState<T[]>([]);

  const nextPage = async () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  useEffect(() => {
    const fetchNewPage = async () => {
      try {
        const result = await fetcher(currentPage);
        setData(data.concat(result.data));
        // eslint-disable-next-line no-empty
      } catch (e) {}
    };
    fetchNewPage();
  }, [currentPage]);
  return {
    nextPage,
    hasMore,
    data,
  };
};

export default usePaginatedData;
