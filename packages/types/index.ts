// copy
export interface CopyEl extends HTMLElement {
  copyValue: string;
  callback?: any;
}
export interface CopyCallBack {
  isSupported: boolean;
  copied: boolean;
  copyValue: string;
}

// longpress
export interface LongpressEl extends HTMLElement {
  pressTime?: number;
  callback: () => void;
}

// tooltip
export interface ToolTipEl extends HTMLElement {
  offset?: number;
}
