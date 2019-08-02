'use strict';

const easy = require('easy'),
      lexers = require('occam-lexers'),
      parsers = require('occam-parsers'),
      easyLayout = require('easy-layout');

const NodesTextarea = require('./textarea/nodes'),
      queryUtilities = require('../utilities/query'),
      ExpressionInput = require('./input/expression'),
      ContentTextarea = require('./textarea/content'),
      ParseTreeTextarea = require('./textarea/parseTree'),
      MaximumDepthInput = require('./input/maximumDepth'),
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
            expression = this.getExpression(),
            maximumDepth = this.getMaximumDepth(),
            nodes = queryByExpression(node, expression, maximumDepth);

      this.hideError();

      this.setNodes(nodes, tokens); ///
    } catch (error) {
      this.clearNodes();

      this.showError();
    }
  }

  contentKeyUpHandler() {
    const content = this.getContent(),
          tokens = florenceLexer.tokenise(content),
          node = florenceParser.parse(tokens),
          parseTree = (node !== null) ?
                        node.asParseTree(tokens) :
                          null;

    this.setParseTree(parseTree);
  }

  childElements(properties) {
    const contentKeyUpHandler = this.contentKeyUpHandler.bind(this),
          keyUpHandler = this.keyUpHandler.bind(this);

    return (

      <div className="columns">
        <SizeableElement>
          <h2>
            Expression
          </h2>
          <ExpressionInput onKeyUp={keyUpHandler} />
          <h2>
            Maximum depth
          </h2>
          <MaximumDepthInput onKeyUp={keyUpHandler} />
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

    const content = `

Type NaturalNumber

Constructor zero:NaturalNumber
  
`,
          expression = '//constructorDeclaration/term//@unassigned',
          maximumDepth = 5;

    this.setContent(content);

    this.setExpression(expression);

    this.setMaximumDepth(maximumDepth);

    this.contentKeyUpHandler();  ///

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
