import type { Options, ParserConfig } from "@swc/core";
import { printSync, parseSync } from "@swc/wasm-web";

export const defaultParserConfig: ParserConfig = {
  syntax: "ecmascript",
  jsx: true,
};

export default (code: string, opts?: Options) => {
  const ast = parseSync(code, opts?.jsc?.parser ?? defaultParserConfig);
  const transformed = opts?.plugin?.(ast) ?? ast;
  return printSync(transformed, opts);
};
