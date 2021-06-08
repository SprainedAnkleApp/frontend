export const getPeaksUrl = (): string =>
  `${process.env.REACT_APP_API_URL}api/public/peaks`;

export const getPeaksNamesUrl = (): string =>
  `${process.env.REACT_APP_API_URL}api/public/peaks/names`;

export const getPeakCompletionUrl = (): string =>
  `${process.env.REACT_APP_API_URL}api/public/peakCompletions`;

export const getPeakUrl = (id: string): string =>
  `${process.env.REACT_APP_API_URL}api/public/peaks/${id}`;

export const getPeakPostsUrl = (peakId: string): string =>
  `${process.env.REACT_APP_API_URL}api/public/peak/${peakId}/posts`;

export const getPagePeakPostsUrl = (
  peakId: string,
  page: number,
  pageSize: number
): string =>
  getPeakPostsUrl(peakId) + `?pageNumber=${page}&pageSize=${pageSize}`;
