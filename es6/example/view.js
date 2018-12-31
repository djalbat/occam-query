'use strict';

const easy = require('easy'),
      lexers = require('occam-lexers'),
      parsers = require('occam-parsers'),
      easyLayout = require('easy-layout');

const NodesTextarea = require('./textarea/nodes'),
      exampleContent = require('../example/content'),
      ExpressionInput = require('./input/expression'),
      ContentTextarea = require('./textarea/content'),
      queryUtilities = require('../utilities/query'),
      exampleExpression = require('../example/expression'),
      ParseTreeTextarea = require('./textarea/parseTree'),
      MainVerticalSplitter = require('./verticalSplitter/main');

const { Element } = easy,
      { FlorenceLexer } = lexers,
      { FlorenceParser } = parsers,
      { SizeableElement } = easyLayout,
      { queryByExpression } = queryUtilities;

const florenceLexer = FlorenceLexer.fromNothing(),
      florenceParser = FlorenceParser.fromNothing();

class View extends Element {
  keyUpHandler() {
    try {
      const content = this.getContent(),
            tokens = florenceLexer.tokenise(content),
            node = florenceParser.parse(tokens),
            parseTree = node.asParseTree(tokens),
            expression = this.getExpression(),
            nodes = queryByExpression(node, expression);

      this.hideError();

      this.setNodes(nodes, tokens); ///

      this.setParseTree(parseTree);
    } catch (error) {
      this.clearParseTree();

      this.clearNodes();

      this.showError();
    }
  }

  childElements(properties) {
    const keyUpHandler = this.keyUpHandler.bind(this);

    return (

      <div className="columns">
        <SizeableElement>
          <h2>
            Expression
          </h2>
          <ExpressionInput onKeyUp={keyUpHandler} />
          <h2>
            Content
          </h2>
          <ContentTextarea onKeyUp={keyUpHandler} />
        </SizeableElement>
        <MainVerticalSplitter />
        <div className="column">
          <h2>
            Parse tree
          </h2>
          <ParseTreeTextarea />
          <h2>
            Nodes
          </h2>
          <NodesTextarea />
        </div>
      </div>

    );
  }

  initialise() {
    this.assignContext();

    const content = exampleContent, ///
          expression = exampleExpression; ///

    this.setContent(content);

    this.setExpression(expression);

    this.keyUpHandler();  ///
  }

  static fromProperties(properties) {
    const view = Element.fromProperties(View, properties);

    view.initialise();

    return view
  }
}

Object.assign(View, {
  tagName: 'div',
  defaultProperties: {
    className: 'view'
  }
});

module.exports = View;
