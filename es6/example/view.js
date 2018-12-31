'use strict';

const easy = require('easy'),
      easyLayout = require('easy-layout');

const ExpressionInput = require('./input/expression'),
      ContentTextarea = require('./textarea/content'),
      ParseTreeTextarea = require('./textarea/parseTree'),
      MainVerticalSplitter = require('./verticalSplitter/main');

const { Element } = easy,
      { SizeableElement } = easyLayout;

class View extends Element {
  keyUpHandler() {
    try {
      ///

      this.hideError();
    } catch (error) {
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
        </div>
      </div>

    );
  }

  initialise() {
    this.assignContext();

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
