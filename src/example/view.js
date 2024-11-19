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
import ContentParseTreeTextarea from "./view/textarea/parseTree/content";
import ExpressionParseTreeTextarea from "./view/textarea/parseTree/expression";

const cssLexer = CSSLexer.fromNothing(),
      cssParser = CSSParser.fromNothing();

const { queryByExpressionString } = queryUtilities;

class View extends Element {
  keyUpHandler = (event, element) => {
    this.clearNodes();

    this.clearContentParseTree();

    this.clearExpressionParseTree();

    const content = this.getContent(),
          tokens = cssLexer.tokenise(content),
          node = cssParser.parse(tokens);

    if (node === null) {
      return;
    }

    const abridged = true,
          parseTree = node.asParseTree(tokens, abridged);

    if (parseTree === null) {
      return;
    }

    const expressionString = this.getExpressionString(),
          maximumDepth = this.getMaximumDepth(),
          nodes = queryByExpressionString(node, expressionString, maximumDepth);

    if (nodes !== null) {
      const contentParseTree = parseTree; ///

      this.setNodes(nodes, tokens); ///

      this.setContentParseTree(contentParseTree);
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
            <SubHeading>
              Expression parse tree
            </SubHeading>
            <ExpressionParseTreeTextarea />
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
  background: red;
}
`;

  static _initialExpressionString = "/*//@special[2...4]";

  static initialExpressionString = "/*";

  static initialMaximumDepth = 5;

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  padding: 1rem;
  
`;
