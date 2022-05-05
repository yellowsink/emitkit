import type { Options, ParserConfig } from "@swc/core";
import type { SwcApi } from "./swcApi";

export const defaultParserConfig: ParserConfig = {
  syntax: "ecmascript",
  jsx: true,
};

export default ({ parseSync, printSync }: SwcApi) =>
  (code: string, opts?: Options) => {
    const ast = parseSync(code, opts?.jsc?.parser ?? defaultParserConfig);
    const transformed = opts?.plugin?.(ast) ?? ast;
    return printSync(transformed, opts);
  };
