declare module '*.scss';
declare module '*.svg';

declare namespace NodeJS {
  interface ProcessEnv {
    readonly GATSBY_FACEBOOK_APP_ID: string;
  }
}
