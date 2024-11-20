"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { queryUtilities } from "../index";  ///
import { CSSLexer, CSSParser } from "with-style";
import { RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv } from "easy-layout";

import SubHeading from "./view/subHeading";
import SizeableDiv from "./view/div/sizeable";
import NodesTextarea from "./view/textarea/nodes";
import ContentTextarea from "./view/textarea/content";
import MaximumDepthInput from "./view/input/maximumDepth";
import ExpressionStringInput from "./view/input/expressionString";
import ParseTreeTextarea from "./view/textarea/parseTree";

const cssLexer = CSSLexer.fromNothing(),
      cssParser = CSSParser.fromNothing();

const { queryByExpressionString } = queryUtilities;

class View extends Element {
  keyUpHandler = (event, element) => {
    this.clearNodes();

    this.clearParseTree();

    const content = this.getContent(),
          tokens = cssLexer.tokenise(content),
          node = cssParser.parse(tokens);

    if (node === null) {
      return;
    }

    const abridged = true,
          parseTree = node.asParseTree(tokens, abridged),
          expressionString = this.getExpressionString(),
          maximumDepth = this.getMaximumDepth(),
          nodes = queryByExpressionString(node, expressionString, maximumDepth);

    if (nodes !== null) {
      this.setNodes(nodes, tokens); ///

      this.setParseTree(parseTree);
    }
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
              Maximum depth
            </SubHeading>
            <MaximumDepthInput onKeyUp={this.keyUpHandler} />
          </RowsDiv>
        </SizeableDiv>
        <VerticalSplitterDiv />
        <ColumnDiv>
          <RowsDiv>
            <SubHeading>
              Content
            </SubHeading>
            <ContentTextarea onKeyUp={this.keyUpHandler} />
            <SubHeading>
              Parse tree
            </SubHeading>
            <ParseTreeTextarea />
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
  background: red;
}
`;

  static initialExpressionString = "/*//@special[2...4]";

  static initialMaximumDepth = 5;

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  padding: 1rem;
  
`;
