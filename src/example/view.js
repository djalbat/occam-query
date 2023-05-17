"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { queryUtilities } from "../index";  ///
import { CSSLexer, CSSParser } from "with-style";
import { RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv } from "easy-layout";

import SubHeading from "./view/subHeading";
import SizeableDiv from "./view/div/sizeable";
import NodesTextarea from "./view/textarea/nodes";
import ExpressionInput from "./view/input/expression";
import ContentTextarea from "./view/textarea/content";
import MaximumDepthInput from "./view/input/maximumDepth";
import ParseTreeTextarea from "./view/textarea/parseTree";

const cssLexer = CSSLexer.fromNothing(),
      cssParser = CSSParser.fromNothing();

const { queryByExpression } = queryUtilities;

class View extends Element {
  keyUpHandler = (event, element) => {
    try {
      const content = this.getContent(),
            tokens = cssLexer.tokenise(content),
            node = cssParser.parse(tokens),
            abridged = true,
            parseTree = node.asParseTree(tokens, abridged),
            expression = this.getExpression(),
            maximumDepth = this.getMaximumDepth(),
            nodes = queryByExpression(node, expression, maximumDepth);

      this.setNodes(nodes, tokens); ///

      this.setParseTree(parseTree);
    } catch (error) {
      console.log(error);

      this.clearNodes();
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
            <ExpressionInput onKeyUp={this.keyUpHandler} />
            <SubHeading>
              Maximum depth
            </SubHeading>
            <MaximumDepthInput onKeyUp={this.keyUpHandler} />
            <SubHeading>
              Nodes
            </SubHeading>
            <NodesTextarea />
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
          </RowsDiv>
        </ColumnDiv>
      </ColumnsDiv>

    ]);
  }

  initialise() {
    this.assignContext();

    const { initialContent, initialExpression, initialMaximumDepth } = this.constructor,
          content = initialContent,  ///
          expression = initialExpression,  ///
          maximumDepth = initialMaximumDepth;  ///

    this.setContent(content);

    this.setExpression(expression);

    this.setMaximumDepth(maximumDepth);

    this.keyUpHandler();  ///
  }

  static initialContent = `.view {
  background: red;
}
`;

  static initialExpression = "//@special[2...4]";

  static initialMaximumDepth = 5;

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  padding: 1rem;
  
`;