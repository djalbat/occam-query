'use strict';

const easy = require('easy'),
      lexers = require('occam-lexers'),
      parsers = require('occam-parsers'),
      easyLayout = require('easy-layout');

const NodesTextarea = require('./textarea/nodes'),
      exampleContent = require('../example/content'),
      queryUtilities = require('../utilities/query'),
      ExpressionInput = require('./input/expression'),
      ContentTextarea = require('./textarea/content'),
      ParseTreeTextarea = require('./textarea/parseTree'),
      exampleExpression = require('../example/expression'),
      MainVerticalSplitter = require('./verticalSplitter/main');

const { Element } = easy,
      { FlorenceLexer } = lexers,
      { FlorenceParser } = parsers,
      { SizeableElement } = easyLayout,
      { queryByExpression } = queryUtilities;

const florenceLexer = FlorenceLexer.fromNothing(),
      florenceParser = FlorenceParser.fromNothing();

class View extends Element {
  contentKeyUpHandler() {
    const content = this.getContent(),
          tokens = florenceLexer.tokenise(content),
          node = florenceParser.parse(tokens),
          parseTree = (node !== null) ?
                        node.asParseTree(tokens) :
                          null;

    this.setParseTree(parseTree);
  }

  expressionKeyUpHandler() {
    try {
      const content = this.getContent(),
            tokens = florenceLexer.tokenise(content),
            node = florenceParser.parse(tokens),
            expression = this.getExpression(),
            nodes = queryByExpression(node, expression);

      this.hideError();

      this.setNodes(nodes, tokens); ///
    } catch (error) {
      this.clearNodes();

      this.showError();
    }
  }

  childElements(properties) {
    const contentKeyUpHandler = this.contentKeyUpHandler.bind(this),
          expressionKeyUpHandler = this.expressionKeyUpHandler.bind(this);

    return (

      <div className="columns">
        <SizeableElement>
          <h2>
            Expression
          </h2>
          <ExpressionInput onKeyUp={expressionKeyUpHandler} />
          <h2>
            Content
          </h2>
          <ContentTextarea onKeyUp={contentKeyUpHandler} />
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

    this.contentKeyUpHandler();  ///

    this.expressionKeyUpHandler();  ///
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
