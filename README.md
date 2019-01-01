# Custom DOM

[Occam](https://github.com/jecs-imperial/occam)'s DOM related functionality.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
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
* `//term` matches both the topmost and nested non-terminal nodes of that name.
* `/*/*` matches all second-level non-terminal nodes, in this case the `constructorName` and `parenthesisedTerms` nodes.
* `//constructorName[1]` matches the second of all `constructorName` non-terminal nodes at an arbitrary depth
* `//constructorName/@*` matches any immediate, descendant terminal nodes of all `constructorName` nodes.

And so on. Further details are given in the example.

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-custom-grammars

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/jecs-imperial/occam-custom-grammars.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the example.

## Example

To come.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@openmathematics.org
* http://djalbat.com
