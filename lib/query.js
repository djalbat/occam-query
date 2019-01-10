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
  function Query(significantTokenTypes, infiniteDescent, ruleNames, spread, subQuery, maximumDepth) {
    _classCallCheck(this, Query);

    this.significantTokenTypes = significantTokenTypes;
    this.infiniteDescent = infiniteDescent;
    this.ruleNames = ruleNames;
    this.spread = spread;
    this.subQuery = subQuery;
    this.maximumDepth = maximumDepth;
  }

  _createClass(Query, [{
    key: 'execute',
    value: function execute(node) {
      var _this = this;

      var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var nodes = [];

      if (depth <= this.maximumDepth) {
        depth++;

        var nodeTerminalNode = node.isTerminalNode();

        if (nodeTerminalNode) {
          var terminalNode = node,
              ///
          terminalNodeEpsilonNode = terminalNode.isEpsilonNode();

          if (!terminalNodeEpsilonNode) {
            var significantToken = terminalNode.getSignificantToken(),
                significantTokenType = significantToken.getType(),
                found = includes(this.significantTokenTypes, significantTokenType, WILDCARD_CHARACTER);

            if (found) {
              if (this.spread.isBetween()) {
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
            if (this.spread.isBetween()) {
              if (this.subQuery === null) {
                nodes = [nonTerminalNode];
              } else {
                childNodes.forEach(function (childNode) {
                  var childNodeNodes = _this.subQuery.execute(childNode, depth);

                  nodes = nodes.concat(childNodeNodes);
                });
              }
            }

            this.spread.incrementIndex();
          }

          if (this.infiniteDescent) {
            childNodes.forEach(function (childNode) {
              var childNodeNodes = _this.execute(childNode, depth);

              nodes = nodes.concat(childNodeNodes);
            });
          }
        }
      }

      return nodes;
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
      significantTokenTypes = significantTokenTypesFromSelectors(selectors),
          significantTokenTypesLength = significantTokenTypes.length,
          infiniteDescent = secondMatch === '/',
          ///
      ruleNames = significantTokenTypesLength === 0 ? ruleNamesFromSelectors(selectors) : [],
          spread = Spread.fromExpression(spreadExpression),
          subQuery = significantTokenTypesLength === 0 ? Query.fromExpression(subExpression) : null,
          query = new Query(significantTokenTypes, infiniteDescent, ruleNames, spread, subQuery, maximumDepth);

      return query;
    }
  }]);

  return Query;
}();

module.exports = Query;

function significantTokenTypesFromSelectors(selectors) {
  var significantTokenTypes = [];

  selectors.forEach(function (selector) {
    var selectorTokenTypeSelector = isSelectorTokenTypeSelector(selector);

    if (selectorTokenTypeSelector) {
      var tokenType = selector.substring(1);

      significantTokenTypes.push(tokenType);
    }
  });

  return significantTokenTypes;
}

function isSelectorTokenTypeSelector(selector) {
  return (/^@/.test(selector)
  );
}

function ruleNamesFromSelectors(selectors) {
  return selectors.filter(isSelectorRuleName);
}

function isSelectorRuleName(selector) {
  return (/^[^@]/.test(selector)
  );
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9xdWVyeS5qcyJdLCJuYW1lcyI6WyJTcHJlYWQiLCJyZXF1aXJlIiwiY29uc3RhbnRzIiwiYXJyYXlVdGlsaXRpZXMiLCJXSUxEQ0FSRF9DSEFSQUNURVIiLCJpbmNsdWRlcyIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwiZmlmdGgiLCJRdWVyeSIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsImluZmluaXRlRGVzY2VudCIsInJ1bGVOYW1lcyIsInNwcmVhZCIsInN1YlF1ZXJ5IiwibWF4aW11bURlcHRoIiwibm9kZSIsImRlcHRoIiwibm9kZXMiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVFcHNpbG9uTm9kZSIsImlzRXBzaWxvbk5vZGUiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW5UeXBlIiwiZ2V0VHlwZSIsImZvdW5kIiwiaXNCZXR3ZWVuIiwiaW5jcmVtZW50SW5kZXgiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlTm9kZXMiLCJleGVjdXRlIiwiY29uY2F0IiwiZXhwcmVzc2lvbiIsIkluZmluaXR5IiwidW5kZWZpbmVkIiwicmVnRXhwIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJ0aGlyZE1hdGNoIiwiZm91cnRoTWF0Y2giLCJmaWZ0aE1hdGNoIiwic2VsZWN0b3JzIiwic3BsaXQiLCJzcHJlYWRFeHByZXNzaW9uIiwic3ViRXhwcmVzc2lvbiIsInNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21TZWxlY3RvcnMiLCJzaWduaWZpY2FudFRva2VuVHlwZXNMZW5ndGgiLCJsZW5ndGgiLCJydWxlTmFtZXNGcm9tU2VsZWN0b3JzIiwiZnJvbUV4cHJlc3Npb24iLCJxdWVyeSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzZWxlY3RvciIsInNlbGVjdG9yVG9rZW5UeXBlU2VsZWN0b3IiLCJpc1NlbGVjdG9yVG9rZW5UeXBlU2VsZWN0b3IiLCJ0b2tlblR5cGUiLCJzdWJzdHJpbmciLCJwdXNoIiwidGVzdCIsImZpbHRlciIsImlzU2VsZWN0b3JSdWxlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsVUFBUixDQUFmO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxhQUFSLENBRGxCO0FBQUEsSUFFTUUsaUJBQWlCRixRQUFRLG1CQUFSLENBRnZCOztBQUlNLElBQUVHLGtCQUFGLEdBQXlCRixTQUF6QixDQUFFRSxrQkFBRjtBQUFBLElBQ0VDLFFBREYsR0FDNkNGLGNBRDdDLENBQ0VFLFFBREY7QUFBQSxJQUNZQyxNQURaLEdBQzZDSCxjQUQ3QyxDQUNZRyxNQURaO0FBQUEsSUFDb0JDLEtBRHBCLEdBQzZDSixjQUQ3QyxDQUNvQkksS0FEcEI7QUFBQSxJQUMyQkMsTUFEM0IsR0FDNkNMLGNBRDdDLENBQzJCSyxNQUQzQjtBQUFBLElBQ21DQyxLQURuQyxHQUM2Q04sY0FEN0MsQ0FDbUNNLEtBRG5DOztJQUdBQyxLO0FBQ0osaUJBQVlDLHFCQUFaLEVBQW1DQyxlQUFuQyxFQUFvREMsU0FBcEQsRUFBK0RDLE1BQS9ELEVBQXVFQyxRQUF2RSxFQUFpRkMsWUFBakYsRUFBK0Y7QUFBQTs7QUFDN0YsU0FBS0wscUJBQUwsR0FBNkJBLHFCQUE3QjtBQUNBLFNBQUtDLGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Q7Ozs7NEJBRU9DLEksRUFBaUI7QUFBQTs7QUFBQSxVQUFYQyxLQUFXLHVFQUFILENBQUc7O0FBQ3ZCLFVBQUlD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UixRQUE1QixFQUFzQztBQUFFLFNBQU8sU0FBUU0sSUFBUixDQUFhTixRQUFiO0FBQVA7QUFBZ0MiLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNwcmVhZCA9IHJlcXVpcmUoJy4vc3ByZWFkJyksXG4gICAgICBjb25zdGFudHMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IFdJTERDQVJEX0NIQVJBQ1RFUiB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBpbmNsdWRlcywgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBmaWZ0aCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFF1ZXJ5IHtcbiAgY29uc3RydWN0b3Ioc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBpbmZpbml0ZURlc2NlbnQsIHJ1bGVOYW1lcywgc3ByZWFkLCBzdWJRdWVyeSwgbWF4aW11bURlcHRoKSB7XG4gICAgdGhpcy5zaWduaWZpY2FudFRva2VuVHlwZXMgPSBzaWduaWZpY2FudFRva2VuVHlwZXM7XG4gICAgdGhpcy5pbmZpbml0ZURlc2NlbnQgPSBpbmZpbml0ZURlc2NlbnQ7XG4gICAgdGhpcy5ydWxlTmFtZXMgPSBydWxlTmFtZXM7XG4gICAgdGhpcy5zcHJlYWQgPSBzcHJlYWQ7XG4gICAgdGhpcy5zdWJRdWVyeSA9IHN1YlF1ZXJ5O1xuICAgIHRoaXMubWF4aW11bURlcHRoID0gbWF4aW11bURlcHRoO1xuICB9XG4gIFxuICBleGVjdXRlKG5vZGUsIGRlcHRoID0gMCkge1xuICAgIGxldCBub2RlcyA9IFtdO1xuXG4gICAgaWYgKGRlcHRoIDw9IHRoaXMubWF4aW11bURlcHRoKSB7XG4gICAgICBkZXB0aCsrO1xuXG4gICAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1pbmFsTm9kZUVwc2lsb25Ob2RlID0gdGVybWluYWxOb2RlLmlzRXBzaWxvbk5vZGUoKTtcblxuICAgICAgICBpZiAoIXRlcm1pbmFsTm9kZUVwc2lsb25Ob2RlKSB7XG4gICAgICAgICAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCksXG4gICAgICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGUgPSBzaWduaWZpY2FudFRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICBmb3VuZCA9IGluY2x1ZGVzKHRoaXMuc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBzaWduaWZpY2FudFRva2VuVHlwZSwgV0lMRENBUkRfQ0hBUkFDVEVSKTtcblxuICAgICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3ByZWFkLmlzQmV0d2VlbigpKSB7XG4gICAgICAgICAgICAgIG5vZGVzID0gW25vZGVdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNwcmVhZC5pbmNyZW1lbnRJbmRleCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBmb3VuZCA9IGluY2x1ZGVzKHRoaXMucnVsZU5hbWVzLCBydWxlTmFtZSwgV0lMRENBUkRfQ0hBUkFDVEVSKTtcblxuICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICBpZiAodGhpcy5zcHJlYWQuaXNCZXR3ZWVuKCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN1YlF1ZXJ5ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIG5vZGVzID0gW25vblRlcm1pbmFsTm9kZV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZU5vZGVzID0gdGhpcy5zdWJRdWVyeS5leGVjdXRlKGNoaWxkTm9kZSwgZGVwdGgpO1xuXG4gICAgICAgICAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQoY2hpbGROb2RlTm9kZXMpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNwcmVhZC5pbmNyZW1lbnRJbmRleCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaW5maW5pdGVEZXNjZW50KSB7XG4gICAgICAgICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZU5vZGVzID0gdGhpcy5leGVjdXRlKGNoaWxkTm9kZSwgZGVwdGgpO1xuXG4gICAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChjaGlsZE5vZGVOb2Rlcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgbWF4aW11bURlcHRoID0gSW5maW5pdHkpIHtcbiAgICBpZiAoZXhwcmVzc2lvbiA9PT0gdW5kZWZpbmVkKSB7IC8vL1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJlZ0V4cCA9IC9eXFwvKFxcLyk/KFteL1xcW10rKShcXFtbXlxcXV0rXSk/KFxcLy4qKT8kLyxcbiAgICAgICAgICBtYXRjaGVzID0gZXhwcmVzc2lvbi5tYXRjaChyZWdFeHApLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSxcbiAgICAgICAgICBmb3VydGhNYXRjaCA9IGZvdXJ0aChtYXRjaGVzKSxcbiAgICAgICAgICBmaWZ0aE1hdGNoID0gZmlmdGgobWF0Y2hlcyksXG4gICAgICAgICAgc2VsZWN0b3JzID0gdGhpcmRNYXRjaC5zcGxpdCgnfCcpLCAgLy8vXG4gICAgICAgICAgc3ByZWFkRXhwcmVzc2lvbiA9IGZvdXJ0aE1hdGNoLCAgLy8vXG4gICAgICAgICAgc3ViRXhwcmVzc2lvbiA9IGZpZnRoTWF0Y2gsICAvLy9cbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZXMgPSBzaWduaWZpY2FudFRva2VuVHlwZXNGcm9tU2VsZWN0b3JzKHNlbGVjdG9ycyksXG4gICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGVzTGVuZ3RoID0gc2lnbmlmaWNhbnRUb2tlblR5cGVzLmxlbmd0aCxcbiAgICAgICAgICBpbmZpbml0ZURlc2NlbnQgPSAoc2Vjb25kTWF0Y2ggPT09ICcvJyksICAvLy9cbiAgICAgICAgICBydWxlTmFtZXMgPSAoc2lnbmlmaWNhbnRUb2tlblR5cGVzTGVuZ3RoID09PSAwKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlTmFtZXNGcm9tU2VsZWN0b3JzKHNlbGVjdG9ycykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICBzcHJlYWQgPSBTcHJlYWQuZnJvbUV4cHJlc3Npb24oc3ByZWFkRXhwcmVzc2lvbiksXG4gICAgICAgICAgc3ViUXVlcnkgPSAoc2lnbmlmaWNhbnRUb2tlblR5cGVzTGVuZ3RoID09PSAwKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIFF1ZXJ5LmZyb21FeHByZXNzaW9uKHN1YkV4cHJlc3Npb24pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgIHF1ZXJ5ID0gbmV3IFF1ZXJ5KHNpZ25pZmljYW50VG9rZW5UeXBlcywgaW5maW5pdGVEZXNjZW50LCBydWxlTmFtZXMsIHNwcmVhZCwgc3ViUXVlcnksIG1heGltdW1EZXB0aCk7XG4gICAgXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUXVlcnk7XG5cbmZ1bmN0aW9uIHNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKSB7XG4gIGNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IFtdO1xuXG4gIHNlbGVjdG9ycy5mb3JFYWNoKGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JUb2tlblR5cGVTZWxlY3RvciA9IGlzU2VsZWN0b3JUb2tlblR5cGVTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoc2VsZWN0b3JUb2tlblR5cGVTZWxlY3Rvcikge1xuICAgICAgY29uc3QgdG9rZW5UeXBlID0gc2VsZWN0b3Iuc3Vic3RyaW5nKDEpO1xuXG4gICAgICBzaWduaWZpY2FudFRva2VuVHlwZXMucHVzaCh0b2tlblR5cGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5UeXBlcztcbn1cblxuZnVuY3Rpb24gaXNTZWxlY3RvclRva2VuVHlwZVNlbGVjdG9yKHNlbGVjdG9yKSB7IHJldHVybiAvXkAvLnRlc3Qoc2VsZWN0b3IpOyB9XG5cbmZ1bmN0aW9uIHJ1bGVOYW1lc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKSB7IHJldHVybiBzZWxlY3RvcnMuZmlsdGVyKGlzU2VsZWN0b3JSdWxlTmFtZSk7IH1cblxuZnVuY3Rpb24gaXNTZWxlY3RvclJ1bGVOYW1lKHNlbGVjdG9yKSB7IHJldHVybiAvXlteQF0vLnRlc3Qoc2VsZWN0b3IpOyB9XG4iXX0=