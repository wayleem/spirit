export const is_Response: (obj: Object) => obj is Object;

export class Response {
  status: number;
  headers: { [key: string]: string | string[] | undefined };
  body: any;

  constructor(body: any);

  set(k: string, v: string): this;
  get(k: string): string | undefined;
  status_(n: number | string): this;
  body_(body: any): this;
  type(content_type: string): this;
  cookie(
    name: string,
    value: string,
    opts?: {
      path?: string;
      domain?: string;
      httponly?: boolean;
      maxage?: string;
      secure?: boolean;
      expires?: Date;
      encode?: (value: string) => string;
    },
  ): this;
  len(size?: number): this;
  attachment(filename?: string): this;

  static field(response: Response, k: string): string | undefined;
  static get(response: Response, k: string): string | undefined;
  static set(response: Response, k: string, v: string): Response;
}
