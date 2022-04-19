import { printSync, parseSync } from "@swc/wasm-web";
import type { Options, Program } from "@swc/core";
import { defaultParserConfig } from "./jsxTransform";

export const stringify = (ast: Program) =>
  printSync(ast, {
    jsc: defaultParserConfig,
  } as Options);

export const astIfy = (code: string): Program =>
  parseSync(code, {
    jsc: defaultParserConfig,
  } as Options);
