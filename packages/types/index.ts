export interface CopyEl extends HTMLElement {
  copyValue: string;
  callback?: any;
}
export interface CopyCallBack {
  isSupported: boolean;
  copied: boolean;
  copyValue: string;
}
