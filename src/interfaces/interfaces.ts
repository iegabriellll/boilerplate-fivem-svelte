export interface NuiMessageFrame<T = unknown> {
  action: string;
  payload: T;
}

export interface NuiDebugEventFrame {
  action: string;
  payload: any;
}
