"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { CSSLexer, CSSParser } from "with-style";
import { queryUtilities, expressionUtilities } from "../index";  ///
import { RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv } from "easy-layout";

import SubHeading from "./view/subHeading";
import SizeableDiv from "./view/div/sizeable";
import NodesTextarea from "./view/textarea/nodes";
import ContentTextarea from "./view/textarea/content";
import MaximumDepthInput from "./view/input/maximumDepth";
import ExpressionStringInput from "./view/input/expressionString";
import ContentParseTreeTextarea from "./view/textarea/parseTree/content";
import ExpressionParseTreeTextarea from "./view/textarea/parseTree/expression";

const cssLexer = CSSLexer.fromNothing(),
      cssParser = CSSParser.fromNothing();

const { queryByExpressionString } = queryUtilities,
      { tokensFromContent, nodeFromTokens } = expressionUtilities;

class View extends Element {
  keyUpHandler = (event, element) => {
    const expressionString = this.getExpressionString(),
          maximumDepth = this.getMaximumDepth(),
          content = this.getContent(),
          tokens = cssLexer.tokenise(content),
          node = cssParser.parse(tokens);

    this.updateExpressionParseTree(expressionString);

    this.updateContentParseTree(node, tokens);

    this.updateNodes(node, tokens, expressionString, maximumDepth);
  }

  updateNodes(node, tokens, expressionString, maximumDepth) {
    this.clearNodes();

    if (node === null) {
      return;
    }

    const nodes = queryByExpressionString(node, expressionString, maximumDepth);

    if (nodes !== null) {
      this.setNodes(nodes, tokens); ///
    }
  }

  updateContentParseTree(node, tokens) {
    this.clearContentParseTree();

    if (node === null) {
      return;
    }

    const abridged = true,
          contentParseTree = node.asParseTree(tokens, abridged);

    this.setContentParseTree(contentParseTree);
  }

  updateExpressionParseTree(expressionString) {
    this.clearExpressionParseTree();

    const content = expressionString, ///
          tokens = tokensFromContent(content),
          node = nodeFromTokens(tokens);

    if (node === null) {
      return;
    }

    const parseTree = node.asParseTree(tokens),
          expressionParseTree = parseTree;  ///

    this.setExpressionParseTree(expressionParseTree);
  }

  childElements() {
    return ([

      <ColumnsDiv>
        <SizeableDiv>
          <RowsDiv>
            <SubHeading>
              Expression
            </SubHeading>
            <ExpressionStringInput onKeyUp={this.keyUpHandler} />
            <SubHeading>
              Content
            </SubHeading>
            <ContentTextarea onKeyUp={this.keyUpHandler} />
            <SubHeading>
              Maximum depth
            </SubHeading>
            <MaximumDepthInput onKeyUp={this.keyUpHandler} />
          </RowsDiv>
        </SizeableDiv>
        <VerticalSplitterDiv />
        <ColumnDiv>
          <RowsDiv>
            <SubHeading>
              Expression parse tree
            </SubHeading>
            <ExpressionParseTreeTextarea />
            <SubHeading>
              Content parse tree
            </SubHeading>
            <ContentParseTreeTextarea />
            <SubHeading>
              Nodes
            </SubHeading>
            <NodesTextarea />
          </RowsDiv>
        </ColumnDiv>
      </ColumnsDiv>

    ]);
  }

  initialise() {
    this.assignContext();

    const { initialContent, initialExpressionString, initialMaximumDepth } = this.constructor,
          content = initialContent,  ///
          maximumDepth = initialMaximumDepth,  ///
          expressionString = initialExpressionString;  ///

    this.setContent(content);

    this.setMaximumDepth(maximumDepth);

    this.setExpressionString(expressionString);

    this.keyUpHandler();  ///
  }

  static initialContent = `.view {
  display: none;
  background: red;
}
`;

  static initialExpressionString = "/*/*/declaration[1]//@identifier[0]";

  static initialMaximumDepth = 10;

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  padding: 1rem;
  
`;
