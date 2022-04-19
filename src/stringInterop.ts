import { printSync, parseSync } from "@swc/wasm-web";
import type {
  Expression,
  ModuleItem,
  Options,
  Program,
  Statement,
} from "@swc/core";
import { defaultParserConfig } from "./jsxTransform.js";
import { emitBlockStatement } from "./emitters.js";

const expressionTypes = [
  "ThisExpression",
  "ArrayExpression",
  "ObjectExpression",
  "FunctionExpression",
  "UnaryExpression",
  "UpdateExpression",
  "BinaryExpression",
  "AssignmentExpression",
  "MemberExpression",
  "SuperPropExpression",
  "ConditionalExpression",
  "CallExpression",
  "NewExpression",
  "SequenceExpression",
  "Identifier",
  "Literal",
  "TemplateLiteral",
  "TaggedTemplateExpression",
  "ArrowFunctionExpression",
  "ClassExpression",
  "YieldExpression",
  "MetaProperty",
  "AwaitExpression",
  "ParenthesisExpression",
  "JSXMemberExpression",
  "JSXNamespacedName",
  "JSXEmptyExpression",
  "JSXElement",
  "JSXFragment",
  "TsTypeAssertion",
  "TsConstAssertion",
  "TsNonNullExpression",
  "TsAsExpression",
  "PrivateName",
  "OptionalChainingExpression",
  "Invalid",
];

const toStatement = (ast: Expression | Statement): Statement =>
  // @ts-expect-error god help me
  expressionTypes.includes(ast.type) ? emitBlockStatement(ast) : ast;

export const stringify = (
  ast: Statement | Statement[] | Expression | Expression
) =>
  printSync(Array.isArray(ast) ? ast.filter(toStatement) : toStatement(ast), {
    jsc: defaultParserConfig,
  } as Options);

export const astIfy = (code: string): ModuleItem[] =>
  parseSync(code, {
    jsc: defaultParserConfig,
  } as Options).body;
