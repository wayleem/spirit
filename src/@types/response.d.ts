import { Response } from "./response-class";
import { Transform } from "stream";

export const is_response: (resp: any) => Boolean;

export const response: (body: any) => Response;

export const make_stream: () => Transform;

export const file_response: (
  file: string | { path: string; pipe: Function },
) => Promise<Response>;

export const redirect: (status: number, url?: string) => Response;

export const err_response: (err: any) => Response;
