declare module '*.scss';
declare module '*.svg';
declare module '*.jpg';

declare namespace NodeJS {
  interface ProcessEnv {
    readonly GATSBY_FACEBOOK_APP_ID: string;
  }
}
