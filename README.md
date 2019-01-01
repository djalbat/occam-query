# Custom DOM

[Occam](https://github.com/jecs-imperial/occam)'s DOM related functionality.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)
- [Building](#building)
- [Contact](#contact)

## Introduction

This package provides the means to query the document object model return by Occam's [parsers](https://github.com/jecs-imperial/occam-parsers). Consider the following parse tree, essentially the document's stringified DOM:

```
                                         term
                                           |
                            ------------------------------
                            |                            |
                     constructorName             parenthesisedTerms
                            |                            |
                      s[unassigned]         ----------------------------
                                            |            |             |
                                       ([special]      terms      )[special]
                                                                       |
                                                                     term
                                                                       |
                                                                constructorName
                                                                       |
                                                                 k[unassigned]
```
Here are some example query expressions and their meaning:

* `/term` matches the topmost non-terminal node of that name.
* `//term` matches both the topmost and lower level non-terminal nodes of that name.
* `/*/*` matches all second-level non-terminal nodes, in this case the `constructorName` and `parenthesisedTerms` nodes.
* `//constructorName[1]` matches the second of all `constructorName` non-terminal nodes at an arbitrary level.
* `//constructorName/@*` matches any immediate descendant terminal nodes of all `constructorName` nodes.

And so on. Further details are given in the example.

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-custom-grammars

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/jecs-imperial/occam-custom-grammars.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the example.

## Usage

```js
const dom = require('occam-dom');

const { queryUtilities } = dom,
      { queryByExpression } = queryUtilities;

const node = ...,
      expression = '...',
      nodes = queryByExpression(node);

...
```
If you are going to repeatedly use the same query expression, build a `query` object and make use of its `execute()` method:

```js
const dom = require('occam-dom');

const { Query } = dom;

const node = ...,
      expression = '...',
      query = Query.fromExpression(expression)
      nodes = query.execute(node);

...
```
This is quicker than using the `queryByExpression()` function, which will create such an object each time it is invoked.

## Example

There is one example with a given DOM and starting query expression. To view it, open the `example.html` file in the root of the repository. All the nodes matching the expression are given. You can change the content, which will update the parse tree, or the expression, which will update the nodes. The spread of the tokens that the nodes enclose are given in parenthesis, which should allow you to locate any nodes returned in the DOM.

A query consists of a leading, forward slash `/` followed by an optional forward slash to signify infinte descent, followed by a list of either non-terminal node rule names or terminal node significant token types, finally followed by an optional spread expression and a sub-query. You cannot mix rule names and significant token types and the sub-queries of query expressions with significant token types are ignored. Further explanation would likely just confuse. It is best simply to play around with the expression to pick out different sets of nodes from the DOM.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@openmathematics.org
* http://djalbat.com
