export const getAchievementsShortUrl = (): string =>
  `${process.env.REACT_APP_API_URL}api/public/achievements/short`;

export const getUserAchievementsUrl = (userId: string): string =>
  `${process.env.REACT_APP_API_URL}api/public/achievements/${userId}`;
