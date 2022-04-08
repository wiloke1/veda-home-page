declare module '*.scss';
declare module '*.svg';
declare module '*.jpg';
declare module '*.png';

declare namespace NodeJS {
  interface ProcessEnv {
    readonly GATSBY_FACEBOOK_APP_ID: string;
  }
}

declare interface Window {
  builderMode: boolean;
}
