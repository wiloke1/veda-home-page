export interface PostMessageOptions {
  is: 'parent' | 'children';
  url?: string;
  iframeSelector?: string;
}
export type PostMessageListener<T> = (payload: T) => void;
export type PostMessageOff = () => void;

export type EmitMessage = Record<string, any>;
export type OnMessage = Record<string, any>;

interface InterfacePostMessage<EmitMessageT extends EmitMessage, OnMessageT extends OnMessage> {
  emit?<K extends keyof EmitMessageT>(eventType: K, payload?: EmitMessageT[K]): void;
  on<K extends keyof OnMessageT>(eventType: K, listener: PostMessageListener<OnMessageT[K]>): void;
}

class PostMessage<EmitMessageT extends EmitMessage, OnMessageT extends OnMessage> implements InterfacePostMessage<EmitMessageT, OnMessageT> {
  private w: Window | null | undefined;
  private readonly iframeSelector: string | undefined;
  private readonly url: string;
  private readonly is: PostMessageOptions['is'];

  constructor({ is, url = '*', iframeSelector }: PostMessageOptions) {
    this.w = null;
    this.is = is;
    this.url = url;
    this.iframeSelector = iframeSelector;
  }

  public setPopup = (url: string) => {
    if (typeof window === 'undefined') {
      return null;
    }
    if (!this.w || this.w?.closed) {
      this.w = window.open(url);
    } else {
      this.w.focus();
    }
    return this.w;
  };

  public emit = <K extends keyof EmitMessageT>(eventType: K, payload?: EmitMessageT[K]) => {
    if (typeof window === 'undefined') {
      return;
    }
    if (!!this.iframeSelector) {
      const iframeEl: HTMLIFrameElement | null = document.querySelector(this.iframeSelector);
      this.w = iframeEl?.contentWindow;
    }
    const message = {
      type: eventType,
      payload,
    };
    if (!!this.w && this.is === 'parent') {
      this.w.postMessage(message, this.url);
    } else {
      window.opener?.postMessage(message, this.url);
      window.parent?.postMessage(message, this.url);
    }
  };

  public on = <K extends keyof OnMessageT>(eventType: K, listener: PostMessageListener<OnMessageT[K]>): PostMessageOff => {
    if (typeof window === 'undefined') {
      return () => {};
    }
    const handler = (event: MessageEvent) => {
      if (event.data?.type === eventType) {
        listener(event.data.payload);
      }
    };
    window.addEventListener('message', handler, false);
    return () => {
      window.removeEventListener('message', handler, false);
    };
  };
}

export function createPostMessage<EmitMessageT extends EmitMessage, OnMessageT extends OnMessage>({
  is,
  url = '*',
  iframeSelector,
}: PostMessageOptions) {
  const pm = new PostMessage<EmitMessageT, OnMessageT>({
    is,
    url,
    iframeSelector,
  });

  return pm;
}
