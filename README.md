# Occam DOM

[Occam](https://github.com/djalbat/occam)'s DOM related functionality.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Example](#example)
- [Usage](#usage)
- [Building](#building)
- [Contact](#contact)

## Introduction

This package provides a simple, [XPath](https://en.wikipedia.org/wiki/XPath)-like query language for selecting nodes from document object models returned by Occam's [parsers](https://github.com/djalbat/occam-parsers).

A query expression consists of a leading, forward slash `/` followed by an optional forward slash to signify arbitrary depth, followed by a list of either non-terminal node rule names or terminal node significant token types, finally followed by an optional spread expression and a sub-query. You cannot mix rule names and significant token types and the sub-queries of query expressions with significant token types are ignored. Further explanation would likely just confuse. It is best simply to play around with the expression in the example to select different nodes.

Here is an example DOM together with some query expressions and their meaning, to help clarify:
```
                                                                  stylesheet                                                  
                                                                       |                                                      
                                                                    ruleSet                                                   
                                                                       |                                                      
                    ------------------------------------------------------------------------------------------------------    
                    |                            |                                      |                                |    
                selectors                   {[special]                             declaration                      }[special]
                    |                                                                   |                                     
                selector                                          ---------------------------------------------               
                    |                                             |                |            |             |               
                  class                                       property        :[special]   expression    ;[special]           
                    |                                             |                             |                             
     -------------------------------                   background[identifier]                 term                            
     |            |                |                                                            |                             
.[special] <NO_WHITESPACE> view[identifier]                                              red[identifier]                      
```
* `/stylesheet` matches the topmost `stylesheet` non-terminal node.
* `//term` matches all `term` non-terminal nodes to an arbitrary depth.
* `//@special[2...4]` matches from the third to the fifth of all `special` terminal nodes.

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-dom

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/occam-dom.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

You can also run a development server, see the section on building later on.

## Example

There is a small development server that can be run from within the project's directory with the following command:

    npm start

The example will then be available at the following URL:

http://localhost:8888

The source for the example can be found in the `src/example.js` file and corresponding `src/example` folder. You are encouraged to try the example whilst reading what follows. You can rebuild it on the fly with the following command:

    npm run watch-debug

The development server will reload the page whenever you make changes.

One last thing to bear in mind is that this package is included by way of a relative rather than a package import. If you are importing it into your own application, however, you should use the standard package import.

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

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@djalbat.com

