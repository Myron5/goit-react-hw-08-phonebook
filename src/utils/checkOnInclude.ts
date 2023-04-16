import { normalize } from './normalize';

export const checkOnInclude = (txt: string, value: string) =>
  normalize(txt).includes(normalize(value));

export const checkOnFullInclude = (txt: string, value: string) =>
  normalize(txt).includes(normalize(value)) &&
  Math.abs(txt.length - value.length) < 4;
