"use strict";

import { Element } from "easy";
import { ColumnsDiv } from "easy-layout";
import { FlorenceLexer } from "occam-lexers";
import { FlorenceParser } from "occam-parsers";

import Heading from "./heading";
import ColumnDiv from "./div/column";
import SubHeading from "./subHeading";
import SizeableDiv from "./div/sizeable";
import NodesTextarea from "./textarea/nodes";
import ExpressionInput from "./input/expression";
import ContentTextarea from "./textarea/content";
import MaximumDepthInput from "./input/maximumDepth";
import ParseTreeTextarea from "./textarea/parseTree";
import VerticalSplitterDiv from "./div/splitter/vertical";

import { queryByExpression } from "../utilities/query";

const florenceLexer = FlorenceLexer.fromNothing(),
      florenceParser = FlorenceParser.fromNothing();

export default class View extends Element {
  initialContent = `

Type NaturalNumber

Constructor zero:NaturalNumber

`;

  initialExpression = "//constructorDeclaration/term//@unassigned";

  initialMaximumDepth = 5;

  keyUpHandler() {
    try {
      const content = this.getContent(),
            tokens = florenceLexer.tokenise(content),
            node = florenceParser.parse(tokens),
            expression = this.getExpression(),
            maximumDepth = this.getMaximumDepth(),
            nodes = queryByExpression(node, expression, maximumDepth);

      this.setNodes(nodes, tokens); ///
    } catch (error) {
      console.log(error);

      this.clearNodes();
    }
  }

  childElements(properties) {
    const keyUpHandler = this.keyUpHandler.bind(this);

    return ([

      <Heading>
        DOM example
      </Heading>,
      <ColumnsDiv>
        <SizeableDiv>
          <SubHeading>
            Expression
          </SubHeading>
          <ExpressionInput onKeyUp={keyUpHandler} />
          <SubHeading>
            Maximum depth
          </SubHeading>
          <MaximumDepthInput onKeyUp={keyUpHandler} />
        </SizeableDiv>
        <VerticalSplitterDiv />
        <ColumnDiv>
          <SubHeading>
            Content
          </SubHeading>
          <ContentTextarea onKeyUp={keyUpHandler} />
          <SubHeading>
            Parse tree
          </SubHeading>
          <ParseTreeTextarea />
          <SubHeading>
            Nodes
          </SubHeading>
          <NodesTextarea />
        </ColumnDiv>
      </ColumnsDiv>

    ]);
  }

  initialise(properties) {
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

  static fromClass(Class, properties) {
    const exampleView = Element.fromClass(Class, properties);

    exampleView.initialise(properties);

    return exampleView
  }
}
