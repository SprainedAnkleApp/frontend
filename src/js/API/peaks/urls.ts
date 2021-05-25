export const getPeaksUrl = (): string =>
  `${process.env.REACT_APP_API_URL}api/public/peaks`;
export const getPeakCompletionUrl = (): string =>
  `${process.env.REACT_APP_API_URL}api/public/peakCompletions`;

export const getPeakUrl = (id: string): string =>
  `${process.env.REACT_APP_API_URL}api/public/peaks/${id}`;

export const getFirstConquerorUrl = (peakId: string): string =>
  `${process.env.REACT_APP_API_URL}api/public/peakCompletions/${peakId}/first`;

export const getNumberOfPeakConquerorsUrl = (peakId: string): string =>
  `${process.env.REACT_APP_API_URL}api/public/peakCompletions/${peakId}/totalCompletions`;

export const getPeakAverageTimeCompletionUrl = (peakId: string): string =>
  `${process.env.REACT_APP_API_URL}api/public/peakCompletions/${peakId}/averageTime`;
