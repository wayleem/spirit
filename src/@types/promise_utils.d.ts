export const is_promise: (p: any) => Boolean;

export const call_p: <T>(fn: (...args: any[]) => T, args: any[]) => Promise<T>;

export const callp_response: <T>(
  fn: (...args: any[]) => T,
  args: any[],
) => Promise<T>;
