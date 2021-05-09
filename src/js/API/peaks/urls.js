export const getPeaksUrl = () => `${process.env.REACT_APP_API_URL}api/public/peaks`;
export const getPeakUrl = (id) => `${process.env.REACT_APP_API_URL}api/public/peaks/${id}`;
export const getPeakCompletionUrl = () =>
  `${process.env.REACT_APP_API_URL}api/public/peakCompletions`;
