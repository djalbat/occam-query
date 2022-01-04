"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { FlorenceLexer } from "occam-grammars";
import { FlorenceParser } from "occam-grammars";
import { queryUtilities } from "../index";  ///
import { RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv } from "easy-layout";

import SubHeading from "./subHeading";
import SizeableDiv from "./div/sizeable";
import NodesTextarea from "./textarea/nodes";
import ExpressionInput from "./input/expression";
import ContentTextarea from "./textarea/content";
import MaximumDepthInput from "./input/maximumDepth";
import ParseTreeTextarea from "./textarea/parseTree";

const florenceLexer = FlorenceLexer.fromNothing(),
      florenceParser = FlorenceParser.fromNothing();

const { queryByExpression } = queryUtilities;

class View extends Element {
  initialContent = `Type NaturalNumber

Constructor zero:NaturalNumber
`;

  initialExpression = "//declaration//@name";

  initialMaximumDepth = 5;

  keyUpHandler() {
    try {
      const content = this.getContent(),
            tokens = florenceLexer.tokenise(content),
            node = florenceParser.parse(tokens),
            parseTree = node.asParseTree(tokens),
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
    const keyUpHandler = this.keyUpHandler.bind(this);

    return ([

      <ColumnsDiv>
        <SizeableDiv>
          <RowsDiv>
            <SubHeading>
              Expression
            </SubHeading>
            <ExpressionInput onKeyUp={keyUpHandler} />
            <SubHeading>
              Maximum depth
            </SubHeading>
            <MaximumDepthInput onKeyUp={keyUpHandler} />
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
            <ContentTextarea onKeyUp={keyUpHandler} />
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

    const content = this.initialContent,  ///
          expression = this.initialExpression,  ///
          maximumDepth = this.initialMaximumDepth;  ///

    this.setContent(content);

    this.setExpression(expression);

    this.setMaximumDepth(maximumDepth);

    this.keyUpHandler();  ///
  }

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  padding: 1rem;
  
`;