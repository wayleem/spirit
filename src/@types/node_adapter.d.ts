import { ServerResponse, IncomingMessage } from "http";
import { Stream } from "stream";

interface ResponseMap {
  status: number;
  headers: NodeJS.Dict<string | number | string[] | undefined>;
  body?: string | Buffer | Stream;
}

export const content_length: (
  resp: ResponseMap,
) => NodeJS.Dict<string | number>;

export const strip: (
  headers: NodeJS.Dict<string | number | string[] | undefined>,
) => NodeJS.Dict<string | number | string[]>;

export const send: (res: ServerResponse, resp: ResponseMap) => void;

export const adapter: (
  handler: Function,
  middleware?: Function | Function[],
) => (req: IncomingMessage, res: ServerResponse) => void;
