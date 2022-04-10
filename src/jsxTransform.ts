import { Options, parse, ParserConfig, parseSync, print, printSync } from "@swc/core";

const defaultParserConfig: ParserConfig = {
  syntax: "ecmascript",
  jsx: true
}

export const jsxTrasnform = async (code: string, opts?: Options) => {
  const ast = await parse(code, opts?.jsc?.parser ?? defaultParserConfig);
  const transformed = opts?.plugin?.(ast) ?? ast;
  return await print(transformed, opts);
};

export const jsxTrasnformSync = (code: string, opts?: Options) => {
  const ast = parseSync(code, opts?.jsc?.parser ?? defaultParserConfig);
  const transformed = opts?.plugin?.(ast) ?? ast;
  return printSync(transformed, opts);
};
