import { useState, useEffect } from 'react';

export type Fetcher<T> = (
  page: number
) => Promise<{ pages: number; data: T[] }>;

const usePaginatedData = function <T>(fetcher: Fetcher<T>) {
  const [currentPage, setCurrentPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [data, setData] = useState<T[]>([]);

  const nextPage = async () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  const refetch = async () => {
    const result = await fetcher(0);
    setData(result.data);
    setCurrentPage(0);
    setHasMore(0 < result.pages);
  };

  useEffect(() => {
    const fetchNewPage = async () => {
      try {
        const result = await fetcher(currentPage);
        setData(data.concat(result.data));
        console.log(fetcher, hasMore, currentPage, result.pages);
        setHasMore(currentPage + 1 < result.pages);
        // eslint-disable-next-line no-empty
      } catch (e) {}
    };
    fetchNewPage();
  }, [currentPage]);
  return {
    refetch,
    nextPage,
    hasMore,
    data,
  };
};

export default usePaginatedData;
