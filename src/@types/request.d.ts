import { IncomingMessage } from "http";
import { Stream } from "stream";

interface RequestMap {
  port?: number;
  host?: string;
  ip?: string;
  url?: string;
  pathname?: string;
  path?: string;
  method?: string;
  protocol?: string;
  scheme?: string;
  headers: NodeJS.Dict<string | string[]>;
  query?: any;
  req(): IncomingMessage;
  //body?: Stream; TODO
}

export const urlquery: (req: IncomingMessage, request: RequestMap) => void;

export const hostport: (req: IncomingMessage, request: RequestMap) => void;

export const protocol: (req: IncomingMessage, request: RequestMap) => void;

export const create: (req: IncomingMessage) => RequestMap;
