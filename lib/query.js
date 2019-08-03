'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Spread = require('./spread'),
    constants = require('./constants'),
    arrayUtilities = require('./utilities/array');

var WILDCARD_CHARACTER = constants.WILDCARD_CHARACTER,
    includes = arrayUtilities.includes,
    second = arrayUtilities.second,
    third = arrayUtilities.third,
    fourth = arrayUtilities.fourth,
    fifth = arrayUtilities.fifth;

var Query = function () {
  function Query(ruleNames, types, spread, subQuery, maximumDepth, infiniteDescent) {
    _classCallCheck(this, Query);

    this.ruleNames = ruleNames;
    this.types = types;
    this.spread = spread;
    this.subQuery = subQuery;
    this.maximumDepth = maximumDepth;
    this.infiniteDescent = infiniteDescent;
  }

  _createClass(Query, [{
    key: 'execute',
    value: function execute(node) {
      var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var _this = this;

      var maximumDepth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.maximumDepth;
      var resetSpreadIndexes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      var nodes = [];

      if (resetSpreadIndexes) {
        this.resetSpreadIndexes();
      }

      if (depth <= maximumDepth) {
        depth++;

        var nodeTerminalNode = node.isTerminalNode();

        if (nodeTerminalNode) {
          var terminalNode = node,
              ///
          terminalNodeEpsilonNode = terminalNode.isEpsilonNode();

          if (!terminalNodeEpsilonNode) {
            var type = terminalNode.getType(),
                found = includes(this.types, type, WILDCARD_CHARACTER);

            if (found) {
              var between = this.spread.isBetween();

              if (between) {
                nodes = [node];
              }

              this.spread.incrementIndex();
            }
          }
        } else {
          var nonTerminalNode = node,
              ///
          childNodes = nonTerminalNode.getChildNodes(),
              ruleName = nonTerminalNode.getRuleName(),
              _found = includes(this.ruleNames, ruleName, WILDCARD_CHARACTER);

          if (_found) {
            var _between = this.spread.isBetween();

            if (_between) {
              if (this.subQuery === null) {
                nodes = [nonTerminalNode];
              } else {
                childNodes.forEach(function (childNode) {
                  var resetSpreadIndexes = false,
                      childNodeNodes = _this.subQuery.execute(childNode, depth, maximumDepth, resetSpreadIndexes);

                  nodes = nodes.concat(childNodeNodes);
                });
              }
            }

            this.spread.incrementIndex();
          }

          if (this.infiniteDescent) {
            childNodes.forEach(function (childNode) {
              var resetSpreadIndexes = false,
                  childNodeNodes = _this.execute(childNode, depth, maximumDepth, resetSpreadIndexes);

              nodes = nodes.concat(childNodeNodes);
            });
          }
        }
      }

      return nodes;
    }
  }, {
    key: 'resetSpreadIndexes',
    value: function resetSpreadIndexes() {
      this.spread.resetIndexes();

      if (this.subQuery !== null) {
        this.subQuery.resetSpreadIndexes();
      }
    }
  }], [{
    key: 'fromExpression',
    value: function fromExpression(expression) {
      var maximumDepth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;

      if (expression === undefined) {
        ///
        return null;
      }

      var regExp = /^\/(\/)?([^/\[]+)(\[[^\]]+])?(\/.*)?$/,
          matches = expression.match(regExp),
          secondMatch = second(matches),
          thirdMatch = third(matches),
          fourthMatch = fourth(matches),
          fifthMatch = fifth(matches),
          selectors = thirdMatch.split('|'),
          ///
      spreadExpression = fourthMatch,
          ///
      subExpression = fifthMatch,
          ///
      types = typesFromSelectors(selectors),
          typesLength = types.length,
          ruleNames = typesLength === 0 ? ruleNamesFromSelectors(selectors) : [],
          spread = Spread.fromExpression(spreadExpression),
          subQuery = typesLength === 0 ? Query.fromExpression(subExpression) : null,
          infiniteDescent = secondMatch === '/',
          ///
      query = new Query(ruleNames, types, spread, subQuery, maximumDepth, infiniteDescent);

      return query;
    }
  }]);

  return Query;
}();

module.exports = Query;

function typesFromSelectors(selectors) {
  var types = [];

  selectors.forEach(function (selector) {
    var selectorTypeSelector = isSelectorTypeSelector(selector);

    if (selectorTypeSelector) {
      var type = selector.substring(1);

      types.push(type);
    }
  });

  return types;
}

function isSelectorTypeSelector(selector) {
  return (/^@/.test(selector)
  );
}

function ruleNamesFromSelectors(selectors) {
  return selectors.filter(isSelectorRuleNameSelector);
}

function isSelectorRuleNameSelector(selector) {
  return (/^[^@]/.test(selector)
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9xdWVyeS5qcyJdLCJuYW1lcyI6WyJTcHJlYWQiLCJyZXF1aXJlIiwiY29uc3RhbnRzIiwiYXJyYXlVdGlsaXRpZXMiLCJXSUxEQ0FSRF9DSEFSQUNURVIiLCJpbmNsdWRlcyIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwiZmlmdGgiLCJRdWVyeSIsInJ1bGVOYW1lcyIsInR5cGVzIiwic3ByZWFkIiwic3ViUXVlcnkiLCJtYXhpbXVtRGVwdGgiLCJpbmZpbml0ZURlc2NlbnQiLCJub2RlIiwiZGVwdGgiLCJyZXNldFNwcmVhZEluZGV4ZXMiLCJub2RlcyIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUVwc2lsb25Ob2RlIiwiaXNFcHNpbG9uTm9kZSIsInR5cGUiLCJnZXRUeXBlIiwiZm91bmQiLCJiZXR3ZWVuIiwiaXNCZXR3ZWVuIiwiaW5jcmVtZW50SW5kZXgiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlTm9kZXMiLCJleGVjdXRlIiwiY29uY2F0IiwicmVzZXRJbmRleGVzIiwiZXhwcmVzc2lvbiIsIkluZmluaXR5IiwidW5kZWZpbmVkIiwicmVnRXhwIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJ0aGlyZE1hdGNoIiwiZm91cnRoTWF0Y2giLCJmaWZ0aE1hdGNoIiwic2VsZWN0b3JzIiwic3BsaXQiLCJzcHJlYWRFeHByZXNzaW9uIiwic3ViRXhwcmVzc2lvbiIsInR5cGVzRnJvbVNlbGVjdG9ycyIsInR5cGVzTGVuZ3RoIiwibGVuZ3RoIiwicnVsZU5hbWVzRnJvbVNlbGVjdG9ycyIsImZyb21FeHByZXNzaW9uIiwicXVlcnkiLCJtb2R1bGUiLCJleHBvcnRzIiwic2VsZWN0b3IiLCJzZWxlY3RvclR5cGVTZWxlY3RvciIsImlzU2VsZWN0b3JUeXBlU2VsZWN0b3IiLCJzdWJzdHJpbmciLCJwdXNoIiwidGVzdCIsImZpbHRlciIsImlzU2VsZWN0b3JSdWxlTmFtZVNlbGVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxVQUFSLENBQWY7QUFBQSxJQUNNQyxZQUFZRCxRQUFRLGFBQVIsQ0FEbEI7QUFBQSxJQUVNRSxpQkFBaUJGLFFBQVEsbUJBQVIsQ0FGdkI7O0FBSU0sSUFBRUcsa0JBQUYsR0FBeUJGLFNBQXpCLENBQUVFLGtCQUFGO0FBQUEsSUFDRUMsUUFERixHQUM2Q0YsY0FEN0MsQ0FDRUUsUUFERjtBQUFBLElBQ1lDLE1BRFosR0FDNkNILGNBRDdDLENBQ1lHLE1BRFo7QUFBQSxJQUNvQkMsS0FEcEIsR0FDNkNKLGNBRDdDLENBQ29CSSxLQURwQjtBQUFBLElBQzJCQyxNQUQzQixHQUM2Q0wsY0FEN0MsQ0FDMkJLLE1BRDNCO0FBQUEsSUFDbUNDLEtBRG5DLEdBQzZDTixjQUQ3QyxDQUNtQ00sS0FEbkM7O0lBR0FDLEs7QUFDSixpQkFBWUMsU0FBWixFQUF1QkMsS0FBdkIsRUFBOEJDLE1BQTlCLEVBQXNDQyxRQUF0QyxFQUFnREMsWUFBaEQsRUFBOERDLGVBQTlELEVBQStFO0FBQUE7O0FBQzdFLFNBQUtMLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNBLFNBQUtDLGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0Q7Ozs7NEJBRU9DLEksRUFBOEU7QUFBQSxVQUF4RUMsS0FBd0UsdUVBQWhFLENBQWdFOztBQUFBOztBQUFBLFVBQTdESCxZQUE2RCx1RUFBOUMsS0FBS0EsWUFBeUM7QUFBQSxVQUEzQkksa0JBQTJCLHVFQUFOLElBQU07O0FBQ3BGLFVBQUlDLFFBQVEs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LElBQU4sQ0FBVzNDLElBQVg7QUFDRDtBQUNGLEdBUkQ7O0FBVUEsU0FBT2QsS0FBUDtBQUNEOztBQUVELFNBQVN1RCxzQkFBVCxDQUFnQ0YsUUFBaEMsRUFBMEM7QUFBRSxTQUFPLE1BQUtLLElBQUwsQ0FBVUwsUUFBVjtBQUFQO0FBQTZCOztBQUV6RSxTQUFTTCxzQkFBVCxDQUFnQ1AsU0FBaEMsRUFBMkM7QUFBRSxTQUFPQSxVQUFVa0IsTUFBVixDQUFpQkMsMEJBQWpCLENBQVA7QUFBc0Q7O0FBRW5HLFNBQVNBLDBCQUFULENBQW9DUCxRQUFwQyxFQUE4QztBQUFFLFNBQU8sU0FBUUssSUFBUixDQUFhTCxRQUFiO0FBQVA7QUFBZ0MiLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNwcmVhZCA9IHJlcXVpcmUoJy4vc3ByZWFkJyksXG4gICAgICBjb25zdGFudHMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IFdJTERDQVJEX0NIQVJBQ1RFUiB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBpbmNsdWRlcywgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBmaWZ0aCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFF1ZXJ5IHtcbiAgY29uc3RydWN0b3IocnVsZU5hbWVzLCB0eXBlcywgc3ByZWFkLCBzdWJRdWVyeSwgbWF4aW11bURlcHRoLCBpbmZpbml0ZURlc2NlbnQpIHtcbiAgICB0aGlzLnJ1bGVOYW1lcyA9IHJ1bGVOYW1lcztcbiAgICB0aGlzLnR5cGVzID0gdHlwZXM7XG4gICAgdGhpcy5zcHJlYWQgPSBzcHJlYWQ7XG4gICAgdGhpcy5zdWJRdWVyeSA9IHN1YlF1ZXJ5O1xuICAgIHRoaXMubWF4aW11bURlcHRoID0gbWF4aW11bURlcHRoO1xuICAgIHRoaXMuaW5maW5pdGVEZXNjZW50ID0gaW5maW5pdGVEZXNjZW50O1xuICB9XG4gIFxuICBleGVjdXRlKG5vZGUsIGRlcHRoID0gMCwgbWF4aW11bURlcHRoID0gdGhpcy5tYXhpbXVtRGVwdGgsIHJlc2V0U3ByZWFkSW5kZXhlcyA9IHRydWUpIHtcbiAgICBsZXQgbm9kZXMgPSBbXTtcblxuICAgIGlmIChyZXNldFNwcmVhZEluZGV4ZXMpIHtcbiAgICAgIHRoaXMucmVzZXRTcHJlYWRJbmRleGVzKCk7XG4gICAgfVxuXG4gICAgaWYgKGRlcHRoIDw9IG1heGltdW1EZXB0aCkge1xuICAgICAgZGVwdGgrKztcblxuICAgICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgICB0ZXJtaW5hbE5vZGVFcHNpbG9uTm9kZSA9IHRlcm1pbmFsTm9kZS5pc0Vwc2lsb25Ob2RlKCk7XG5cbiAgICAgICAgaWYgKCF0ZXJtaW5hbE5vZGVFcHNpbG9uTm9kZSkge1xuICAgICAgICAgIGNvbnN0IHR5cGUgPSB0ZXJtaW5hbE5vZGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgIGZvdW5kID0gaW5jbHVkZXModGhpcy50eXBlcywgdHlwZSwgV0lMRENBUkRfQ0hBUkFDVEVSKTtcblxuICAgICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgY29uc3QgYmV0d2VlbiA9IHRoaXMuc3ByZWFkLmlzQmV0d2VlbigpO1xuXG4gICAgICAgICAgICBpZiAoYmV0d2Vlbikge1xuICAgICAgICAgICAgICBub2RlcyA9IFtub2RlXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zcHJlYWQuaW5jcmVtZW50SW5kZXgoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgZm91bmQgPSBpbmNsdWRlcyh0aGlzLnJ1bGVOYW1lcywgcnVsZU5hbWUsIFdJTERDQVJEX0NIQVJBQ1RFUik7XG5cbiAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgY29uc3QgYmV0d2VlbiA9IHRoaXMuc3ByZWFkLmlzQmV0d2VlbigpO1xuXG4gICAgICAgICAgaWYgKGJldHdlZW4pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN1YlF1ZXJ5ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIG5vZGVzID0gW25vblRlcm1pbmFsTm9kZV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc2V0U3ByZWFkSW5kZXhlcyA9IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZU5vZGVzID0gdGhpcy5zdWJRdWVyeS5leGVjdXRlKGNoaWxkTm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCwgcmVzZXRTcHJlYWRJbmRleGVzKTtcblxuICAgICAgICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KGNoaWxkTm9kZU5vZGVzKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zcHJlYWQuaW5jcmVtZW50SW5kZXgoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmluZmluaXRlRGVzY2VudCkge1xuICAgICAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXNldFNwcmVhZEluZGV4ZXMgPSBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZU5vZGVzID0gdGhpcy5leGVjdXRlKGNoaWxkTm9kZSwgZGVwdGgsIG1heGltdW1EZXB0aCwgcmVzZXRTcHJlYWRJbmRleGVzKTtcblxuICAgICAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQoY2hpbGROb2RlTm9kZXMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgcmVzZXRTcHJlYWRJbmRleGVzKCkge1xuICAgIHRoaXMuc3ByZWFkLnJlc2V0SW5kZXhlcygpO1xuXG4gICAgaWYgKHRoaXMuc3ViUXVlcnkgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuc3ViUXVlcnkucmVzZXRTcHJlYWRJbmRleGVzKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGZyb21FeHByZXNzaW9uKGV4cHJlc3Npb24sIG1heGltdW1EZXB0aCA9IEluZmluaXR5KSB7XG4gICAgaWYgKGV4cHJlc3Npb24gPT09IHVuZGVmaW5lZCkgeyAvLy9cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCByZWdFeHAgPSAvXlxcLyhcXC8pPyhbXi9cXFtdKykoXFxbW15cXF1dK10pPyhcXC8uKik/JC8sXG4gICAgICAgICAgbWF0Y2hlcyA9IGV4cHJlc3Npb24ubWF0Y2gocmVnRXhwKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICB0aGlyZE1hdGNoID0gdGhpcmQobWF0Y2hlcyksXG4gICAgICAgICAgZm91cnRoTWF0Y2ggPSBmb3VydGgobWF0Y2hlcyksXG4gICAgICAgICAgZmlmdGhNYXRjaCA9IGZpZnRoKG1hdGNoZXMpLFxuICAgICAgICAgIHNlbGVjdG9ycyA9IHRoaXJkTWF0Y2guc3BsaXQoJ3wnKSwgIC8vL1xuICAgICAgICAgIHNwcmVhZEV4cHJlc3Npb24gPSBmb3VydGhNYXRjaCwgIC8vL1xuICAgICAgICAgIHN1YkV4cHJlc3Npb24gPSBmaWZ0aE1hdGNoLCAgLy8vXG4gICAgICAgICAgdHlwZXMgPSB0eXBlc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKSxcbiAgICAgICAgICB0eXBlc0xlbmd0aCA9IHR5cGVzLmxlbmd0aCxcbiAgICAgICAgICBydWxlTmFtZXMgPSAodHlwZXNMZW5ndGggPT09IDApID9cbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtdLFxuICAgICAgICAgIHNwcmVhZCA9IFNwcmVhZC5mcm9tRXhwcmVzc2lvbihzcHJlYWRFeHByZXNzaW9uKSxcbiAgICAgICAgICBzdWJRdWVyeSA9ICh0eXBlc0xlbmd0aCA9PT0gMCkgP1xuICAgICAgICAgICAgICAgICAgICAgICBRdWVyeS5mcm9tRXhwcmVzc2lvbihzdWJFeHByZXNzaW9uKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICBpbmZpbml0ZURlc2NlbnQgPSAoc2Vjb25kTWF0Y2ggPT09ICcvJyksICAvLy9cbiAgICAgICAgICBxdWVyeSA9IG5ldyBRdWVyeShydWxlTmFtZXMsIHR5cGVzLCBzcHJlYWQsIHN1YlF1ZXJ5LCBtYXhpbXVtRGVwdGgsIGluZmluaXRlRGVzY2VudCk7XG4gICAgXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUXVlcnk7XG5cbmZ1bmN0aW9uIHR5cGVzRnJvbVNlbGVjdG9ycyhzZWxlY3RvcnMpIHtcbiAgY29uc3QgdHlwZXMgPSBbXTtcblxuICBzZWxlY3RvcnMuZm9yRWFjaChmdW5jdGlvbihzZWxlY3Rvcikge1xuICAgIGNvbnN0IHNlbGVjdG9yVHlwZVNlbGVjdG9yID0gaXNTZWxlY3RvclR5cGVTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoc2VsZWN0b3JUeXBlU2VsZWN0b3IpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBzZWxlY3Rvci5zdWJzdHJpbmcoMSk7XG5cbiAgICAgIHR5cGVzLnB1c2godHlwZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdHlwZXM7XG59XG5cbmZ1bmN0aW9uIGlzU2VsZWN0b3JUeXBlU2VsZWN0b3Ioc2VsZWN0b3IpIHsgcmV0dXJuIC9eQC8udGVzdChzZWxlY3Rvcik7IH1cblxuZnVuY3Rpb24gcnVsZU5hbWVzRnJvbVNlbGVjdG9ycyhzZWxlY3RvcnMpIHsgcmV0dXJuIHNlbGVjdG9ycy5maWx0ZXIoaXNTZWxlY3RvclJ1bGVOYW1lU2VsZWN0b3IpOyB9XG5cbmZ1bmN0aW9uIGlzU2VsZWN0b3JSdWxlTmFtZVNlbGVjdG9yKHNlbGVjdG9yKSB7IHJldHVybiAvXlteQF0vLnRlc3Qoc2VsZWN0b3IpOyB9XG4iXX0=