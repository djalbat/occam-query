# Occam DOM

[Occam](https://github.com/jecs-imperial/occam)'s DOM related functionality.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)
- [Building](#building)
- [Contact](#contact)

## Introduction

This package provides a simple, [XPath](https://en.wikipedia.org/wiki/XPath)-like query language for selecting nodes from document object models returned by Occam's [parsers](https://github.com/jecs-imperial/occam-parsers).

A query expression consists of a leading, forward slash `/` followed by an optional forward slash to signify arbitrary depth, followed by a list of either non-terminal node rule names or terminal node significant token types, finally followed by an optional spread expression and a sub-query. You cannot mix rule names and significant token types and the sub-queries of query expressions with significant token types are ignored. Further explanation would likely just confuse. It is best simply to play around with the expression in the example to select different nodes.

Here is an example DOM together with some query expressions and their meaning, to help clarify:
```
                                                                  document(0-7)
                                                                        |
                                               --------------------------------------------------
                                               |                                                |
                                       declaration(0-5)                                 verticalSpace(7)
                                               |                                                |
           ---------------------------------------------------------------------        [end-of-line](7)
           |                                   |                               |
Constructor[keyword](0)           constructorDeclaration(2-4)          [end-of-line](5)
                                               |
                           ----------------------------------------
                           |                |                     |
                        term(2)       :[special](3)          typeName(4)
                           |                                      |
                        name(2)                     NaturalNumber[unassigned](4)
                           |
                  zero[unassigned](2)

```
* `/document` matches the topmost non-terminal node of that name.
* `//term` matches all non-terminal nodes of that name.
* `//@end-of-line[1]` matches the second of all terminal nodes of type `end-of-line`.
* `/*/*` matches all second-level non-terminal nodes, in this case the `declaration` and `verticalSpace` nodes.

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-dom

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/jecs-imperial/occam-dom.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the example.

## Usage

The collection of query utility functions is exported as a plain old JavaScript object. The only one of use is the `queryByExpression(...)` function:

```
import { queryUtilities } from "occam-dom";

const { queryByExpression } = queryUtilities;

const node = ...,
      expression = "...",
      maximumDepth = 10,
      nodes = queryByExpression(node, expression, maximumDepth);

...
```
The `maximumDepth` argument is optional, the default is `Infinity`.

If repeatedly using the same query expression, build a `query` object and make use of its `execute(...)` method:

```
import { Query } from "occam-dom";

const node = ...,
      expression = "...",
      query = Query.fromExpression(expression)
      nodes = query.execute(node);

...
```
This is quicker than using the `queryByExpression()` function, which will create such an object each time it is invoked. Again there is an optional last `maximumDepth` argument, left out here.

## Example

There is one example with a given DOM and starting query expression. To view it, open the `example.html` file in the root of the repository. All the nodes matching the expression are given. You can change the content, which will update the parse tree; the expression, which will update the selected nodes; or the maximum depth, which will also affect the selected nodes.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@openmathematics.org
* http://djalbat.com
