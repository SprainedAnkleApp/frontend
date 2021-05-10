export const getPeaksUrl = (): string =>
  `${process.env.REACT_APP_API_URL}api/public/peaks`;
export const getPeakCompletionUrl = (): string =>
  `${process.env.REACT_APP_API_URL}api/public/peakCompletions`;

export const getPeakUrl = (id: string): string =>
  `${process.env.REACT_APP_API_URL}api/public/peaks/${id}`;
