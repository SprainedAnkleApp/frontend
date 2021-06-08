export const getLoginUrl = (): string =>
  `${process.env.REACT_APP_API_URL}login`;
export const getSignUpUrl = (): string =>
  `${process.env.REACT_APP_API_URL}signup`;

export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect';

export const GOOGLE_AUTH_URL =
  process.env.REACT_APP_API_URL +
  'oauth2/authorize/google?redirect_uri=' +
  OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL =
  process.env.REACT_APP_API_URL +
  'oauth2/authorize/facebook?redirect_uri=' +
  OAUTH2_REDIRECT_URI;
