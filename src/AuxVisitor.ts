/*\
|*| Like Visitor.ts, but with a load of aux functions that you can call instead
|*| without breaking the internal routing of the visitor.
|*| 
|*| i suggest you read this file from the bottom up
|*| if your code editor supports it, collapse the import and class.
\*/

import type {
  Program,
  Module,
  Script,
  ModuleItem,
  ModuleDeclaration,
  TsNamespaceExportDeclaration,
  TsExportAssignment,
  TsImportEqualsDeclaration,
  TsModuleReference,
  TsExternalModuleReference,
  ExportAllDeclaration,
  ExportDefaultExpression,
  ExportNamedDeclaration,
  ExportSpecifier,
  NamedExportSpecifier,
  ExportNamespaceSpecifier,
  ExportDefaultSpecifier,
  StringLiteral,
  ExportDefaultDeclaration,
  DefaultDecl,
  FunctionExpression,
  ClassExpression,
  ExportDeclaration,
  ArrayExpression,
  Expression,
  ExprOrSpread,
  SpreadElement,
  ArrowFunctionExpression,
  BlockStatement,
  Statement,
  SwitchStatement,
  SwitchCase,
  IfStatement,
  BreakStatement,
  WhileStatement,
  TryStatement,
  CatchClause,
  ThrowStatement,
  ReturnStatement,
  LabeledStatement,
  ForStatement,
  ForOfStatement,
  ForInStatement,
  EmptyStatement,
  DoWhileStatement,
  DebuggerStatement,
  WithStatement,
  Declaration,
  VariableDeclaration,
  VariableDeclarator,
  TsTypeAliasDeclaration,
  TsModuleDeclaration,
  TsModuleName,
  TsNamespaceBody,
  TsNamespaceDeclaration,
  TsModuleBlock,
  TsInterfaceDeclaration,
  TsInterfaceBody,
  TsTypeElement,
  TsEnumDeclaration,
  TsEnumMember,
  TsEnumMemberId,
  FunctionDeclaration,
  ClassDeclaration,
  ClassMember,
  TsIndexSignature,
  TsFnParameter,
  PrivateProperty,
  PrivateMethod,
  PrivateName,
  Constructor,
  Param,
  TsParameterProperty,
  TsParameterPropertyParameter,
  PropertyName,
  Accessibility,
  ClassProperty,
  ClassMethod,
  ComputedPropName,
  Class,
  Fn,
  TsExpressionWithTypeArguments,
  TsTypeParameterInstantiation,
  TsType,
  TsEntityName,
  TsQualifiedName,
  Decorator,
  ExpressionStatement,
  ContinueStatement,
  OptionalChainingExpression,
  AssignmentExpression,
  Pattern,
  YieldExpression,
  UpdateExpression,
  UnaryExpression,
  TsTypeAssertion,
  TsConstAssertion,
  TsNonNullExpression,
  TsAsExpression,
  ThisExpression,
  TemplateLiteral,
  TaggedTemplateExpression,
  SequenceExpression,
  RegExpLiteral,
  ParenthesisExpression,
  ObjectExpression,
  Property,
  SetterProperty,
  MethodProperty,
  KeyValueProperty,
  GetterProperty,
  AssignmentProperty,
  NullLiteral,
  NewExpression,
  Argument,
  MetaProperty,
  MemberExpression,
  SuperPropExpression,
  Super,
  Import,
  JSXText,
  JSXNamespacedName,
  JSXMemberExpression,
  JSXObject,
  JSXFragment,
  JSXClosingFragment,
  JSXElementChild,
  JSXExpressionContainer,
  JSXSpreadChild,
  JSXOpeningFragment,
  JSXEmptyExpression,
  JSXElement,
  JSXClosingElement,
  JSXElementName,
  JSXOpeningElement,
  JSXAttributeOrSpread,
  JSXAttribute,
  JSXAttrValue,
  JSXAttributeName,
  ConditionalExpression,
  CallExpression,
  BooleanLiteral,
  BinaryExpression,
  AwaitExpression,
  TsTypeParameterDeclaration,
  TsTypeParameter,
  TsTypeAnnotation,
  ImportDeclaration,
  ImportSpecifier,
  NamedImportSpecifier,
  ImportNamespaceSpecifier,
  ImportDefaultSpecifier,
  Identifier,
  NumericLiteral,
  BigIntLiteral,
  RestElement,
  AssignmentPattern,
  ObjectPattern,
  ObjectPatternProperty,
  KeyValuePatternProperty,
  AssignmentPatternProperty,
  ArrayPattern,
} from "@swc/core";
import { Visitor } from "@swc/core/Visitor.js";

export default class AuxVisitor extends Visitor {
  auxVisitProgram(n: Program): [Program, boolean] | undefined {
    return;
  }
  auxVisitModule(m: Module): [Module, boolean] | undefined {
    return;
  }
  auxVisitScript(m: Script): [Script, boolean] | undefined {
    return;
  }
  auxVisitModuleItems(
    items: ModuleItem[]
  ): [ModuleItem[], boolean] | undefined {
    return;
  }
  auxVisitModuleItem(n: ModuleItem): [ModuleItem, boolean] | undefined {
    return;
  }
  auxVisitModuleDeclaration(
    n: ModuleDeclaration
  ): [ModuleDeclaration, boolean] | undefined {
    return;
  }
  auxVisitTsNamespaceExportDeclaration(
    n: TsNamespaceExportDeclaration
  ): [ModuleDeclaration, boolean] | undefined {
    return;
  }
  auxVisitTsExportAssignment(
    n: TsExportAssignment
  ): [TsExportAssignment, boolean] | undefined {
    return;
  }
  auxVisitTsImportEqualsDeclaration(
    n: TsImportEqualsDeclaration
  ): [ModuleDeclaration, boolean] | undefined {
    return;
  }
  auxVisitTsModuleReference(
    n: TsModuleReference
  ): [TsModuleReference, boolean] | undefined {
    return;
  }
  auxVisitTsExternalModuleReference(
    n: TsExternalModuleReference
  ): [TsExternalModuleReference, boolean] | undefined {
    return;
  }
  auxVisitExportAllDeclaration(
    n: ExportAllDeclaration
  ): [ModuleDeclaration, boolean] | undefined {
    return;
  }
  auxVisitExportDefaultExpression(
    n: ExportDefaultExpression
  ): [ModuleDeclaration, boolean] | undefined {
    return;
  }
  auxVisitExportNamedDeclaration(
    n: ExportNamedDeclaration
  ): [ModuleDeclaration, boolean] | undefined {
    return;
  }
  auxVisitExportSpecifiers(
    nodes: ExportSpecifier[]
  ): [ExportSpecifier[], boolean] | undefined {
    return;
  }
  auxVisitExportSpecifier(
    n: ExportSpecifier
  ): [ExportSpecifier, boolean] | undefined {
    return;
  }
  auxVisitNamedExportSpecifier(
    n: NamedExportSpecifier
  ): [ExportSpecifier, boolean] | undefined {
    return;
  }
  auxVisitExportNamespaceSpecifier(
    n: ExportNamespaceSpecifier
  ): [ExportSpecifier, boolean] | undefined {
    return;
  }
  auxVisitExportDefaultSpecifier(
    n: ExportDefaultSpecifier
  ): [ExportSpecifier, boolean] | undefined {
    return;
  }
  auxVisitOptionalStringLiteral(
    n: StringLiteral | undefined
  ): [StringLiteral | undefined, boolean] | undefined {
    return;
  }
  auxVisitExportDefaultDeclaration(
    n: ExportDefaultDeclaration
  ): [ModuleDeclaration, boolean] | undefined {
    return;
  }
  auxVisitDefaultDeclaration(
    n: DefaultDecl
  ): [DefaultDecl, boolean] | undefined {
    return;
  }
  auxVisitFunctionExpression(
    n: FunctionExpression
  ): [FunctionExpression, boolean] | undefined {
    return;
  }
  auxVisitClassExpression(
    n: ClassExpression
  ): [ClassExpression, boolean] | undefined {
    return;
  }
  auxVisitExportDeclaration(
    n: ExportDeclaration
  ): [ModuleDeclaration, boolean] | undefined {
    return;
  }
  auxVisitArrayExpression(
    e: ArrayExpression
  ): [Expression, boolean] | undefined {
    return;
  }
  auxVisitArrayElement(
    e: ExprOrSpread | undefined
  ): [ExprOrSpread | undefined, boolean] | undefined {
    return;
  }
  auxVisitExprOrSpread(e: ExprOrSpread): [ExprOrSpread, boolean] | undefined {
    return;
  }
  auxVisitSpreadElement(
    e: SpreadElement
  ): [SpreadElement, boolean] | undefined {
    return;
  }
  auxVisitOptionalExpression(
    e: Expression | undefined
  ): [Expression | undefined, boolean] | undefined {
    return;
  }
  auxVisitArrowFunctionExpression(
    e: ArrowFunctionExpression
  ): [Expression, boolean] | undefined {
    return;
  }
  auxVisitArrowBody(
    body: BlockStatement | Expression
  ): [BlockStatement | Expression, boolean] | undefined {
    return;
  }
  auxVisitBlockStatement(
    block: BlockStatement
  ): [BlockStatement, boolean] | undefined {
    return;
  }
  auxVisitStatements(stmts: Statement[]): [Statement[], boolean] | undefined {
    return;
  }
  auxVisitStatement(stmt: Statement): [Statement, boolean] | undefined {
    return;
  }
  auxVisitSwitchStatement(
    stmt: SwitchStatement
  ): [Statement, boolean] | undefined {
    return;
  }
  auxVisitSwitchCases(
    cases: SwitchCase[]
  ): [SwitchCase[], boolean] | undefined {
    return;
  }
  auxVisitSwitchCase(c: SwitchCase): [SwitchCase, boolean] | undefined {
    return;
  }
  auxVisitIfStatement(stmt: IfStatement): [Statement, boolean] | undefined {
    return;
  }
  auxVisitOptionalStatement(
    stmt: Statement | undefined
  ): [Statement | undefined, boolean] | undefined {
    return;
  }
  auxVisitBreakStatement(
    stmt: BreakStatement
  ): [Statement, boolean] | undefined {
    return;
  }
  auxVisitWhileStatement(
    stmt: WhileStatement
  ): [Statement, boolean] | undefined {
    return;
  }
  auxVisitTryStatement(stmt: TryStatement): [Statement, boolean] | undefined {
    return;
  }
  auxVisitCatchClause(
    handler: CatchClause | undefined
  ): [CatchClause | undefined, boolean] | undefined {
    return;
  }
  auxVisitThrowStatement(
    stmt: ThrowStatement
  ): [Statement, boolean] | undefined {
    return;
  }
  auxVisitReturnStatement(
    stmt: ReturnStatement
  ): [Statement, boolean] | undefined {
    return;
  }
  auxVisitLabeledStatement(
    stmt: LabeledStatement
  ): [Statement, boolean] | undefined {
    return;
  }
  auxVisitForStatement(stmt: ForStatement): [Statement, boolean] | undefined {
    return;
  }
  auxVisitForOfStatement(
    stmt: ForOfStatement
  ): [Statement, boolean] | undefined {
    return;
  }
  auxVisitForInStatement(
    stmt: ForInStatement
  ): [Statement, boolean] | undefined {
    return;
  }
  auxVisitEmptyStatement(
    stmt: EmptyStatement
  ): [Statement, boolean] | undefined {
    return;
  }
  auxVisitDoWhileStatement(
    stmt: DoWhileStatement
  ): [Statement, boolean] | undefined {
    return;
  }
  auxVisitDebuggerStatement(
    stmt: DebuggerStatement
  ): [Statement, boolean] | undefined {
    return;
  }
  auxVisitWithStatement(stmt: WithStatement): [Statement, boolean] | undefined {
    return;
  }
  auxVisitDeclaration(decl: Declaration): [Declaration, boolean] | undefined {
    return;
  }
  auxVisitVariableDeclaration(
    n: VariableDeclaration
  ): [VariableDeclaration, boolean] | undefined {
    return;
  }
  auxVisitVariableDeclarators(
    nodes: VariableDeclarator[]
  ): [VariableDeclarator[], boolean] | undefined {
    return;
  }
  auxVisitVariableDeclarator(
    n: VariableDeclarator
  ): [VariableDeclarator, boolean] | undefined {
    return;
  }
  auxVisitTsTypeAliasDeclaration(
    n: TsTypeAliasDeclaration
  ): [Declaration, boolean] | undefined {
    return;
  }
  auxVisitTsModuleDeclaration(
    n: TsModuleDeclaration
  ): [Declaration, boolean] | undefined {
    return;
  }
  auxVisitTsModuleName(n: TsModuleName): [TsModuleName, boolean] | undefined {
    return;
  }
  auxVisitTsNamespaceBody(
    n: TsNamespaceBody
  ): [TsNamespaceBody | undefined, boolean] | undefined {
    return;
  }
  auxVisitTsNamespaceDeclaration(
    n: TsNamespaceDeclaration
  ): [TsModuleBlock | TsNamespaceDeclaration, boolean] | undefined {
    return;
  }
  auxVisitTsModuleBlock(
    n: TsModuleBlock
  ): [TsModuleBlock | TsNamespaceDeclaration, boolean] | undefined {
    return;
  }
  auxVisitTsInterfaceDeclaration(
    n: TsInterfaceDeclaration
  ): [TsInterfaceDeclaration, boolean] | undefined {
    return;
  }
  auxVisitTsInterfaceBody(
    n: TsInterfaceBody
  ): [TsInterfaceBody, boolean] | undefined {
    return;
  }
  auxVisitTsTypeElements(
    nodes: TsTypeElement[]
  ): [TsTypeElement[], boolean] | undefined {
    return;
  }
  auxVisitTsTypeElement(
    n: TsTypeElement
  ): [TsTypeElement, boolean] | undefined {
    return;
  }
  auxVisitTsEnumDeclaration(
    n: TsEnumDeclaration
  ): [Declaration, boolean] | undefined {
    return;
  }
  auxVisitTsEnumMembers(
    nodes: TsEnumMember[]
  ): [TsEnumMember[], boolean] | undefined {
    return;
  }
  auxVisitTsEnumMember(n: TsEnumMember): [TsEnumMember, boolean] | undefined {
    return;
  }
  auxVisitTsEnumMemberId(
    n: TsEnumMemberId
  ): [TsEnumMemberId, boolean] | undefined {
    return;
  }
  auxVisitFunctionDeclaration(
    decl: FunctionDeclaration
  ): [Declaration, boolean] | undefined {
    return;
  }
  auxVisitClassDeclaration(
    decl: ClassDeclaration
  ): [Declaration, boolean] | undefined {
    return;
  }
  auxVisitClassBody(
    members: ClassMember[]
  ): [ClassMember[], boolean] | undefined {
    return;
  }
  auxVisitClassMember(member: ClassMember): [ClassMember, boolean] | undefined {
    return;
  }
  auxVisitTsIndexSignature(
    n: TsIndexSignature
  ): [ClassMember, boolean] | undefined {
    return;
  }
  auxVisitTsFnParameters(
    params: TsFnParameter[]
  ): [TsFnParameter[], boolean] | undefined {
    return;
  }
  auxVisitTsFnParameter(
    n: TsFnParameter
  ): [TsFnParameter, boolean] | undefined {
    return;
  }
  auxVisitPrivateProperty(
    n: PrivateProperty
  ): [ClassMember, boolean] | undefined {
    return;
  }
  auxVisitPrivateMethod(n: PrivateMethod): [ClassMember, boolean] | undefined {
    return;
  }
  auxVisitPrivateName(n: PrivateName): [PrivateName, boolean] | undefined {
    return;
  }
  auxVisitConstructor(n: Constructor): [ClassMember, boolean] | undefined {
    return;
  }
  auxVisitConstructorParameters(
    nodes: (Param | TsParameterProperty)[]
  ): [(Param | TsParameterProperty)[], boolean] | undefined {
    return;
  }
  auxVisitConstructorParameter(
    n: Param | TsParameterProperty
  ): [Param | TsParameterProperty, boolean] | undefined {
    return;
  }
  auxVisitTsParameterProperty(
    n: TsParameterProperty
  ): [TsParameterProperty | Param, boolean] | undefined {
    return;
  }
  auxVisitTsParameterPropertyParameter(
    n: TsParameterPropertyParameter
  ): [TsParameterPropertyParameter, boolean] | undefined {
    return;
  }
  auxVisitPropertyName(key: PropertyName): [PropertyName, boolean] | undefined {
    return;
  }
  auxVisitAccessibility(
    n: Accessibility | undefined
  ): [Accessibility | undefined, boolean] | undefined {
    return;
  }
  auxVisitClassProperty(n: ClassProperty): [ClassMember, boolean] | undefined {
    return;
  }
  auxVisitClassMethod(n: ClassMethod): [ClassMember, boolean] | undefined {
    return;
  }
  auxVisitComputedPropertyKey(
    n: ComputedPropName
  ): [ComputedPropName, boolean] | undefined {
    return;
  }
  auxVisitClass<T extends Class>(n: T): [T, boolean] | undefined {
    return;
  }
  auxVisitFunction<T extends Fn>(n: T): [T, boolean] | undefined {
    return;
  }
  auxVisitTsExpressionsWithTypeArguments(
    nodes: TsExpressionWithTypeArguments[]
  ): [TsExpressionWithTypeArguments[], boolean] | undefined {
    return;
  }
  auxVisitTsExpressionWithTypeArguments(
    n: TsExpressionWithTypeArguments
  ): [TsExpressionWithTypeArguments, boolean] | undefined {
    return;
  }
  auxVisitTsTypeParameterInstantiation(
    n: TsTypeParameterInstantiation | undefined
  ): [TsTypeParameterInstantiation | undefined, boolean] | undefined {
    return;
  }
  auxVisitTsTypes(nodes: TsType[]): [TsType[], boolean] | undefined {
    return;
  }
  auxVisitTsEntityName(n: TsEntityName): [TsEntityName, boolean] | undefined {
    return;
  }
  auxVisitTsQualifiedName(
    n: TsQualifiedName
  ): [TsQualifiedName, boolean] | undefined {
    return;
  }
  auxVisitDecorators(
    nodes: Decorator[] | undefined
  ): [Decorator[] | undefined, boolean] | undefined {
    return;
  }
  auxVisitDecorator(n: Decorator): [Decorator, boolean] | undefined {
    return;
  }
  auxVisitExpressionStatement(
    stmt: ExpressionStatement
  ): [Statement, boolean] | undefined {
    return;
  }
  auxVisitContinueStatement(
    stmt: ContinueStatement
  ): [Statement, boolean] | undefined {
    return;
  }
  auxVisitExpression(n: Expression): [Expression, boolean] | undefined {
    return;
  }
  auxVisitOptionalChainingExpression(
    n: OptionalChainingExpression
  ): [Expression, boolean] | undefined {
    return;
  }
  auxVisitAssignmentExpression(
    n: AssignmentExpression
  ): [Expression, boolean] | undefined {
    return;
  }
  auxVisitPatternOrExpressison(
    n: Pattern | Expression
  ): [Pattern | Expression, boolean] | undefined {
    return;
  }
  auxVisitYieldExpression(
    n: YieldExpression
  ): [Expression, boolean] | undefined {
    return;
  }
  auxVisitUpdateExpression(
    n: UpdateExpression
  ): [Expression, boolean] | undefined {
    return;
  }
  auxVisitUnaryExpression(
    n: UnaryExpression
  ): [Expression, boolean] | undefined {
    return;
  }
  auxVisitTsTypeAssertion(
    n: TsTypeAssertion
  ): [Expression, boolean] | undefined {
    return;
  }
  auxVisitTsConstAssertion(
    n: TsConstAssertion
  ): [Expression, boolean] | undefined {
    return;
  }
  auxVisitTsNonNullExpression(
    n: TsNonNullExpression
  ): [Expression, boolean] | undefined {
    return;
  }
  auxVisitTsAsExpression(n: TsAsExpression): [Expression, boolean] | undefined {
    return;
  }
  auxVisitThisExpression(n: ThisExpression): [Expression, boolean] | undefined {
    return;
  }
  auxVisitTemplateLiteral(
    n: TemplateLiteral
  ): [Expression, boolean] | undefined {
    return;
  }
  auxVisitParameters(n: Param[]): [Param[], boolean] | undefined {
    return;
  }
  auxVisitParameter(n: Param): [Param, boolean] | undefined {
    return;
  }
  auxVisitTaggedTemplateExpression(
    n: TaggedTemplateExpression
  ): [Expression, boolean] | undefined {
    return;
  }
  auxVisitSequenceExpression(
    n: SequenceExpression
  ): [Expression, boolean] | undefined {
    return;
  }
  auxVisitRegExpLiteral(n: RegExpLiteral): [Expression, boolean] | undefined {
    return;
  }
  auxVisitParenthesisExpression(
    n: ParenthesisExpression
  ): [Expression, boolean] | undefined {
    return;
  }
  auxVisitObjectExpression(
    n: ObjectExpression
  ): [Expression, boolean] | undefined {
    return;
  }
  auxVisitObjectProperties(
    nodes: (Property | SpreadElement)[]
  ): [(Property | SpreadElement)[], boolean] | undefined {
    return;
  }
  auxVisitObjectProperty(
    n: Property | SpreadElement
  ): [Property | SpreadElement, boolean] | undefined {
    return;
  }
  auxVisitProperty(
    n: Property
  ): [Property | SpreadElement, boolean] | undefined {
    return;
  }
  auxVisitSetterProperty(
    n: SetterProperty
  ): [Property | SpreadElement, boolean] | undefined {
    return;
  }
  auxVisitMethodProperty(
    n: MethodProperty
  ): [Property | SpreadElement, boolean] | undefined {
    return;
  }
  auxVisitKeyValueProperty(
    n: KeyValueProperty
  ): [Property | SpreadElement, boolean] | undefined {
    return;
  }
  auxVisitGetterProperty(
    n: GetterProperty
  ): [Property | SpreadElement, boolean] | undefined {
    return;
  }
  auxVisitAssignmentProperty(
    n: AssignmentProperty
  ): [Property | SpreadElement, boolean] | undefined {
    return;
  }
  auxVisitNullLiteral(n: NullLiteral): [NullLiteral, boolean] | undefined {
    return;
  }
  auxVisitNewExpression(n: NewExpression): [Expression, boolean] | undefined {
    return;
  }
  auxVisitTsTypeArguments(
    n: TsTypeParameterInstantiation | undefined
  ): [TsTypeParameterInstantiation | undefined, boolean] | undefined {
    return;
  }
  auxVisitArguments(nodes: Argument[]): [Argument[], boolean] | undefined {
    return;
  }
  auxVisitArgument(n: Argument): [Argument, boolean] | undefined {
    return;
  }
  auxVisitMetaProperty(n: MetaProperty): [Expression, boolean] | undefined {
    return;
  }
  auxVisitMemberExpression(
    n: MemberExpression
  ): [Expression, boolean] | undefined {
    return;
  }
  auxVisitSuperPropExpression(
    n: SuperPropExpression
  ): [Expression, boolean] | undefined {
    return;
  }
  auxVisitCallee(
    n: Expression | Super | Import
  ): [Expression | Super | Import, boolean] | undefined {
    return;
  }
  auxVisitJSXText(n: JSXText): [JSXText, boolean] | undefined {
    return;
  }
  auxVisitJSXNamespacedName(
    n: JSXNamespacedName
  ): [JSXNamespacedName, boolean] | undefined {
    return;
  }
  auxVisitJSXMemberExpression(
    n: JSXMemberExpression
  ): [JSXMemberExpression, boolean] | undefined {
    return;
  }
  auxVisitJSXObject(n: JSXObject): [JSXObject, boolean] | undefined {
    return;
  }
  auxVisitJSXFragment(n: JSXFragment): [JSXFragment, boolean] | undefined {
    return;
  }
  auxVisitJSXClosingFragment(
    n: JSXClosingFragment
  ): [JSXClosingFragment, boolean] | undefined {
    return;
  }
  auxVisitJSXElementChildren(
    nodes: JSXElementChild[]
  ): [JSXElementChild[], boolean] | undefined {
    return;
  }
  auxVisitJSXElementChild(
    n: JSXElementChild
  ): [JSXElementChild, boolean] | undefined {
    return;
  }
  auxVisitJSXExpressionContainer(
    n: JSXExpressionContainer
  ): [JSXExpressionContainer, boolean] | undefined {
    return;
  }
  auxVisitJSXSpreadChild(
    n: JSXSpreadChild
  ): [JSXElementChild, boolean] | undefined {
    return;
  }
  auxVisitJSXOpeningFragment(
    n: JSXOpeningFragment
  ): [JSXOpeningFragment, boolean] | undefined {
    return;
  }
  auxVisitJSXEmptyExpression(
    n: JSXEmptyExpression
  ): [Expression, boolean] | undefined {
    return;
  }
  auxVisitJSXElement(n: JSXElement): [JSXElement, boolean] | undefined {
    return;
  }
  auxVisitJSXClosingElement(
    n: JSXClosingElement | undefined
  ): [JSXClosingElement | undefined, boolean] | undefined {
    return;
  }
  auxVisitJSXElementName(
    n: JSXElementName
  ): [JSXElementName, boolean] | undefined {
    return;
  }
  auxVisitJSXOpeningElement(
    n: JSXOpeningElement
  ): [JSXOpeningElement, boolean] | undefined {
    return;
  }
  auxVisitJSXAttributes(
    attrs: JSXAttributeOrSpread[] | undefined
  ): [JSXAttributeOrSpread[] | undefined, boolean] | undefined {
    return;
  }
  auxVisitJSXAttributeOrSpread(
    n: JSXAttributeOrSpread
  ): [JSXAttributeOrSpread, boolean] | undefined {
    return;
  }
  auxVisitJSXAttribute(
    n: JSXAttribute
  ): [JSXAttributeOrSpread, boolean] | undefined {
    return;
  }
  auxVisitJSXAttributeValue(
    n: JSXAttrValue | undefined
  ): [JSXAttrValue | undefined, boolean] | undefined {
    return;
  }
  auxVisitJSXAttributeName(
    n: JSXAttributeName
  ): [JSXAttributeName, boolean] | undefined {
    return;
  }
  auxVisitConditionalExpression(
    n: ConditionalExpression
  ): [Expression, boolean] | undefined {
    return;
  }
  auxVisitCallExpression(n: CallExpression): [Expression, boolean] | undefined {
    return;
  }
  auxVisitBooleanLiteral(
    n: BooleanLiteral
  ): [BooleanLiteral, boolean] | undefined {
    return;
  }
  auxVisitBinaryExpression(
    n: BinaryExpression
  ): [Expression, boolean] | undefined {
    return;
  }
  auxVisitAwaitExpression(
    n: AwaitExpression
  ): [Expression, boolean] | undefined {
    return;
  }
  auxVisitTsTypeParameterDeclaration(
    n: TsTypeParameterDeclaration | undefined
  ): [TsTypeParameterDeclaration | undefined, boolean] | undefined {
    return;
  }
  auxVisitTsTypeParameters(
    nodes: TsTypeParameter[]
  ): [TsTypeParameter[], boolean] | undefined {
    return;
  }
  auxVisitTsTypeParameter(
    n: TsTypeParameter
  ): [TsTypeParameter, boolean] | undefined {
    return;
  }
  auxVisitTsTypeAnnotation(
    a: TsTypeAnnotation | undefined
  ): [TsTypeAnnotation | undefined, boolean] | undefined {
    return;
  }
  auxVisitTsType(n: TsType): [TsType, boolean] | undefined {
    return;
  }
  auxVisitPatterns(nodes: Pattern[]): [Pattern[], boolean] | undefined {
    return;
  }
  auxVisitImportDeclaration(
    n: ImportDeclaration
  ): [ImportDeclaration, boolean] | undefined {
    return;
  }
  auxVisitImportSpecifiers(
    nodes: ImportSpecifier[]
  ): [ImportSpecifier[], boolean] | undefined {
    return;
  }
  auxVisitImportSpecifier(
    node: ImportSpecifier
  ): [ImportSpecifier, boolean] | undefined {
    return;
  }
  auxVisitNamedImportSpecifier(
    node: NamedImportSpecifier
  ): [NamedImportSpecifier, boolean] | undefined {
    return;
  }
  auxVisitImportNamespaceSpecifier(
    node: ImportNamespaceSpecifier
  ): [ImportNamespaceSpecifier, boolean] | undefined {
    return;
  }
  auxVisitImportDefaultSpecifier(
    node: ImportDefaultSpecifier
  ): [ImportSpecifier, boolean] | undefined {
    return;
  }
  auxVisitBindingIdentifier(i: Identifier): [Identifier, boolean] | undefined {
    return;
  }
  auxVisitIdentifierReference(
    i: Identifier
  ): [Identifier, boolean] | undefined {
    return;
  }
  auxVisitLabelIdentifier(
    label: Identifier
  ): [Identifier, boolean] | undefined {
    return;
  }
  auxVisitIdentifier(n: Identifier): [Identifier, boolean] | undefined {
    return;
  }
  auxVisitStringLiteral(
    n: StringLiteral
  ): [StringLiteral, boolean] | undefined {
    return;
  }
  auxVisitNumericLiteral(
    n: NumericLiteral
  ): [NumericLiteral, boolean] | undefined {
    return;
  }
  auxVisitBigIntLiteral(
    n: BigIntLiteral
  ): [BigIntLiteral, boolean] | undefined {
    return;
  }
  auxVisitPattern(n: Pattern): [Pattern, boolean] | undefined {
    return;
  }
  auxVisitRestElement(n: RestElement): [RestElement, boolean] | undefined {
    return;
  }
  auxVisitAssignmentPattern(
    n: AssignmentPattern
  ): [Pattern, boolean] | undefined {
    return;
  }
  auxVisitObjectPattern(n: ObjectPattern): [Pattern, boolean] | undefined {
    return;
  }
  auxVisitObjectPatternProperties(
    nodes: ObjectPatternProperty[]
  ): [ObjectPatternProperty[], boolean] | undefined {
    return;
  }
  auxVisitObjectPatternProperty(
    n: ObjectPatternProperty
  ): [ObjectPatternProperty, boolean] | undefined {
    return;
  }
  auxVisitKeyValuePatternProperty(
    n: KeyValuePatternProperty
  ): [ObjectPatternProperty, boolean] | undefined {
    return;
  }
  auxVisitAssignmentPatternProperty(
    n: AssignmentPatternProperty
  ): [ObjectPatternProperty, boolean] | undefined {
    return;
  }
  auxVisitArrayPattern(n: ArrayPattern): [Pattern, boolean] | undefined {
    return;
  }
  auxVisitArrayPatternElements(
    nodes: (Pattern | undefined)[]
  ): [(Pattern | undefined)[], boolean] | undefined {
    return;
  }
  auxVisitArrayPatternElement(
    n: Pattern | undefined
  ): [Pattern | undefined, boolean] | undefined {
    return;
  }
}

// madness lies above this line

// excuse this hackiness, but i don't feel like writing repetitive code almost 200 times
for (const func of Reflect.ownKeys(Visitor.prototype)) {
  if (
    typeof func === "symbol" ||
    !func.startsWith("visit") ||
    // @ts-expect-error
    typeof Visitor.prototype[func] !== "function"
  )
    continue;

  const newName = "auxV" + func.slice(1);

  // @ts-expect-error
  AuxVisitor.prototype[newName] = (n) => [n, true];

  // @ts-expect-error
  const origFunc = AuxVisitor.prototype[func];

  // @ts-expect-error
  AuxVisitor.prototype[func] = function (n) {
    // @ts-expect-error
    const maybeProcessed = this[newName](n);

    // @ts-expect-error
    if (!maybeProcessed) return Visitor.prototype[func].call(this, n);

    const [processed, keepRecursing] = maybeProcessed;

    return keepRecursing ? origFunc.call(this, processed) : processed;
  };
}
