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
  function Query(significantTokenTypes, ruleNames, spread, subQuery, maximumDepth, infiniteDescent) {
    _classCallCheck(this, Query);

    this.significantTokenTypes = significantTokenTypes;
    this.ruleNames = ruleNames;
    this.spread = spread;
    this.subQuery = subQuery;
    this.maximumDepth = maximumDepth;
    this.infiniteDescent = infiniteDescent;
  }

  _createClass(Query, [{
    key: 'execute',
    value: function execute(node) {
      var _this = this;

      var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var nodes = [];

      if (depth > this.maximumDepth) {
        ///
      } else {
        depth++;

        var nodeTerminalNode = node.isTerminalNode();

        if (false) {
          ///
        } else if (nodeTerminalNode) {
          var terminalNode = node,
              ///
          significantToken = terminalNode.getSignificantToken(),
              significantTokenType = significantToken.getType(),
              found = includes(this.significantTokenTypes, significantTokenType, WILDCARD_CHARACTER);

          if (found) {
            if (this.spread.isBetween()) {
              nodes = [node];
            }

            this.spread.incrementIndex();
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
    value: function fromExpression(expression, depth) {
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
          significantTokenTypesLength = significantTokenTypes.length;

      var ruleNames = void 0,
          subQuery = void 0;

      if (significantTokenTypesLength > 0) {
        ruleNames = [];
        subQuery = null;
      } else {
        ruleNames = ruleNamesFromSelectors(selectors);
        subQuery = Query.fromExpression(subExpression);
      }

      var spread = Spread.fromExpression(spreadExpression),
          maximumDepth = depth || Infinity,
          infiniteDescent = secondMatch === '/',
          ///
      query = new Query(significantTokenTypes, ruleNames, spread, subQuery, maximumDepth, infiniteDescent);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9xdWVyeS5qcyJdLCJuYW1lcyI6WyJTcHJlYWQiLCJyZXF1aXJlIiwiY29uc3RhbnRzIiwiYXJyYXlVdGlsaXRpZXMiLCJXSUxEQ0FSRF9DSEFSQUNURVIiLCJpbmNsdWRlcyIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwiZmlmdGgiLCJRdWVyeSIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsInJ1bGVOYW1lcyIsInNwcmVhZCIsInN1YlF1ZXJ5IiwibWF4aW11bURlcHRoIiwiaW5maW5pdGVEZXNjZW50Iiwibm9kZSIsImRlcHRoIiwibm9kZXMiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW5UeXBlIiwiZ2V0VHlwZSIsImZvdW5kIiwiaXNCZXR3ZWVuIiwiaW5jcmVtZW50SW5kZXgiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlTm9kZXMiLCJleGVjdXRlIiwiY29uY2F0IiwiZXhwcmVzc2lvbiIsInVuZGVmaW5lZCIsInJlZ0V4cCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwidGhpcmRNYXRjaCIsImZvdXJ0aE1hdGNoIiwiZmlmdGhNYXRjaCIsInNlbGVjdG9ycyIsInNwbGl0Iiwic3ByZWFkRXhwcmVzc2lvbiIsInN1YkV4cHJlc3Npb24iLCJzaWduaWZpY2FudFRva2VuVHlwZXNGcm9tU2VsZWN0b3JzIiwic2lnbmlmaWNhbnRUb2tlblR5cGVzTGVuZ3RoIiwibGVuZ3RoIiwicnVsZU5hbWVzRnJvbVNlbGVjdG9ycyIsImZyb21FeHByZXNzaW9uIiwiSW5maW5pdHkiLCJxdWVyeSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzZWxlY3RvciIsInNlbGVjdG9yVG9rZW5UeXBlU2VsZWN0b3IiLCJpc1NlbGVjdG9yVG9rZW5UeXBlU2VsZWN0b3IiLCJ0b2tlblR5cGUiLCJzdWJzdHJpbmciLCJwdXNoIiwidGVzdCIsImZpbHRlciIsImlzU2VsZWN0b3JSdWxlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsVUFBUixDQUFmO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxhQUFSLENBRGxCO0FBQUEsSUFFTUUsaUJBQWlCRixRQUFRLG1CQUFSLENBRnZCOztBQUlNLElBQUVHLGtCQUFGLEdBQXlCRixTQUF6QixDQUFFRSxrQkFBRjtBQUFBLElBQ0VDLFFBREYsR0FDNkNGLGNBRDdDLENBQ0VFLFFBREY7QUFBQSxJQUNZQyxNQURaLEdBQzZDSCxjQUQ3QyxDQUNZRyxNQURaO0FBQUEsSUFDb0JDLEtBRHBCLEdBQzZDSixjQUQ3QyxDQUNvQkksS0FEcEI7QUFBQSxJQUMyQkMsTUFEM0IsR0FDNkNMLGNBRDdDLENBQzJCSyxNQUQzQjtBQUFBLElBQ21DQyxLQURuQyxHQUM2Q04sY0FEN0MsQ0FDbUNNLEtBRG5DOztJQUdBQyxLO0FBQ0osaUJBQVlDLHFCQUFaLEVBQW1DQyxTQUFuQyxFQUE4Q0MsTUFBOUMsRUFBc0RDLFFBQXRELEVBQWdFQyxZQUFoRSxFQUE4RUMsZUFBOUUsRUFBK0Y7QUFBQTs7QUFDN0YsU0FBS0wscUJBQUwsR0FBNkJBLHFCQUE3QjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CQSxZQUFwQjtBQUNBLFNBQUtDLGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0Q7Ozs7NEJBRU9DLEksRUFBaUI7QUFBQTs7QUFBQSxVQUFYQyxLQUFXLHVFQUFILENBQUc7O0FBQ3ZCLFVBQUlDLFFBQVEsRUFBWjs7QUFFQSxVQUFJRCxRQUFRLEtBQUtILFlBQWpCLEVB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QUFFLFNBQU8sU0FBUU0sSUFBUixDQUFhTixRQUFiO0FBQVA7QUFBZ0MiLCJmaWxlIjoicXVlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IFNwcmVhZCA9IHJlcXVpcmUoJy4vc3ByZWFkJyksXG4gICAgICBjb25zdGFudHMgPSByZXF1aXJlKCcuL2NvbnN0YW50cycpLFxuICAgICAgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdGllcy9hcnJheScpO1xuXG5jb25zdCB7IFdJTERDQVJEX0NIQVJBQ1RFUiB9ID0gY29uc3RhbnRzLFxuICAgICAgeyBpbmNsdWRlcywgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBmaWZ0aCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFF1ZXJ5IHtcbiAgY29uc3RydWN0b3Ioc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBydWxlTmFtZXMsIHNwcmVhZCwgc3ViUXVlcnksIG1heGltdW1EZXB0aCwgaW5maW5pdGVEZXNjZW50KSB7XG4gICAgdGhpcy5zaWduaWZpY2FudFRva2VuVHlwZXMgPSBzaWduaWZpY2FudFRva2VuVHlwZXM7XG4gICAgdGhpcy5ydWxlTmFtZXMgPSBydWxlTmFtZXM7XG4gICAgdGhpcy5zcHJlYWQgPSBzcHJlYWQ7XG4gICAgdGhpcy5zdWJRdWVyeSA9IHN1YlF1ZXJ5O1xuICAgIHRoaXMubWF4aW11bURlcHRoID0gbWF4aW11bURlcHRoO1xuICAgIHRoaXMuaW5maW5pdGVEZXNjZW50ID0gaW5maW5pdGVEZXNjZW50O1xuICB9XG4gIFxuICBleGVjdXRlKG5vZGUsIGRlcHRoID0gMCkge1xuICAgIGxldCBub2RlcyA9IFtdO1xuXG4gICAgaWYgKGRlcHRoID4gdGhpcy5tYXhpbXVtRGVwdGgpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBkZXB0aCsrO1xuXG4gICAgICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcblx0XHRcdFx0Ly8vXG4gICAgICB9IGVsc2UgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGUgPSBzaWduaWZpY2FudFRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgZm91bmQgPSBpbmNsdWRlcyh0aGlzLnNpZ25pZmljYW50VG9rZW5UeXBlcywgc2lnbmlmaWNhbnRUb2tlblR5cGUsIFdJTERDQVJEX0NIQVJBQ1RFUik7XG5cbiAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3ByZWFkLmlzQmV0d2VlbigpKSB7XG4gICAgICAgICAgICBub2RlcyA9IFtub2RlXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNwcmVhZC5pbmNyZW1lbnRJbmRleCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIGZvdW5kID0gaW5jbHVkZXModGhpcy5ydWxlTmFtZXMsIHJ1bGVOYW1lLCBXSUxEQ0FSRF9DSEFSQUNURVIpO1xuXG4gICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgIGlmICh0aGlzLnNwcmVhZC5pc0JldHdlZW4oKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3ViUXVlcnkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgbm9kZXMgPSBbbm9uVGVybWluYWxOb2RlXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlTm9kZXMgPSB0aGlzLnN1YlF1ZXJ5LmV4ZWN1dGUoY2hpbGROb2RlLCBkZXB0aCk7XG5cbiAgICAgICAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChjaGlsZE5vZGVOb2Rlcyk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc3ByZWFkLmluY3JlbWVudEluZGV4KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pbmZpbml0ZURlc2NlbnQpIHtcbiAgICAgICAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlTm9kZXMgPSB0aGlzLmV4ZWN1dGUoY2hpbGROb2RlLCBkZXB0aCk7XG5cbiAgICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KGNoaWxkTm9kZU5vZGVzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRXhwcmVzc2lvbihleHByZXNzaW9uLCBkZXB0aCkge1xuICAgIGlmIChleHByZXNzaW9uID09PSB1bmRlZmluZWQpIHsgLy8vXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcmVnRXhwID0gL15cXC8oXFwvKT8oW14vXFxbXSspKFxcW1teXFxdXStdKT8oXFwvLiopPyQvLFxuICAgICAgICAgIG1hdGNoZXMgPSBleHByZXNzaW9uLm1hdGNoKHJlZ0V4cCksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgdGhpcmRNYXRjaCA9IHRoaXJkKG1hdGNoZXMpLFxuICAgICAgICAgIGZvdXJ0aE1hdGNoID0gZm91cnRoKG1hdGNoZXMpLFxuICAgICAgICAgIGZpZnRoTWF0Y2ggPSBmaWZ0aChtYXRjaGVzKSxcbiAgICAgICAgICBzZWxlY3RvcnMgPSB0aGlyZE1hdGNoLnNwbGl0KCd8JyksICAvLy9cbiAgICAgICAgICBzcHJlYWRFeHByZXNzaW9uID0gZm91cnRoTWF0Y2gsICAvLy9cbiAgICAgICAgICBzdWJFeHByZXNzaW9uID0gZmlmdGhNYXRjaCwgIC8vL1xuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IHNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZXNMZW5ndGggPSBzaWduaWZpY2FudFRva2VuVHlwZXMubGVuZ3RoO1xuXG4gICAgbGV0IHJ1bGVOYW1lcyxcbiAgICAgICAgc3ViUXVlcnk7XG5cbiAgICBpZiAoc2lnbmlmaWNhbnRUb2tlblR5cGVzTGVuZ3RoID4gMCkge1xuICAgICAgcnVsZU5hbWVzID0gW107XG4gICAgICBzdWJRdWVyeSA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJ1bGVOYW1lcyA9IHJ1bGVOYW1lc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKTtcbiAgICAgIHN1YlF1ZXJ5ID0gUXVlcnkuZnJvbUV4cHJlc3Npb24oc3ViRXhwcmVzc2lvbik7XG4gICAgfVxuXG4gICAgY29uc3Qgc3ByZWFkID0gU3ByZWFkLmZyb21FeHByZXNzaW9uKHNwcmVhZEV4cHJlc3Npb24pLFxuICAgICAgICAgIG1heGltdW1EZXB0aCA9IGRlcHRoIHx8IEluZmluaXR5LFxuICAgICAgICAgIGluZmluaXRlRGVzY2VudCA9IChzZWNvbmRNYXRjaCA9PT0gJy8nKSwgIC8vL1xuICAgICAgICAgIHF1ZXJ5ID0gbmV3IFF1ZXJ5KHNpZ25pZmljYW50VG9rZW5UeXBlcywgcnVsZU5hbWVzLCBzcHJlYWQsIHN1YlF1ZXJ5LCBtYXhpbXVtRGVwdGgsIGluZmluaXRlRGVzY2VudCk7XG4gICAgXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUXVlcnk7XG5cbmZ1bmN0aW9uIHNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKSB7XG4gIGNvbnN0IHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IFtdO1xuXG4gIHNlbGVjdG9ycy5mb3JFYWNoKGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JUb2tlblR5cGVTZWxlY3RvciA9IGlzU2VsZWN0b3JUb2tlblR5cGVTZWxlY3RvcihzZWxlY3Rvcik7XG5cbiAgICBpZiAoc2VsZWN0b3JUb2tlblR5cGVTZWxlY3Rvcikge1xuICAgICAgY29uc3QgdG9rZW5UeXBlID0gc2VsZWN0b3Iuc3Vic3RyaW5nKDEpO1xuXG4gICAgICBzaWduaWZpY2FudFRva2VuVHlwZXMucHVzaCh0b2tlblR5cGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHNpZ25pZmljYW50VG9rZW5UeXBlcztcbn1cblxuZnVuY3Rpb24gaXNTZWxlY3RvclRva2VuVHlwZVNlbGVjdG9yKHNlbGVjdG9yKSB7IHJldHVybiAvXkAvLnRlc3Qoc2VsZWN0b3IpOyB9XG5cbmZ1bmN0aW9uIHJ1bGVOYW1lc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKSB7IHJldHVybiBzZWxlY3RvcnMuZmlsdGVyKGlzU2VsZWN0b3JSdWxlTmFtZSk7IH1cblxuZnVuY3Rpb24gaXNTZWxlY3RvclJ1bGVOYW1lKHNlbGVjdG9yKSB7IHJldHVybiAvXlteQF0vLnRlc3Qoc2VsZWN0b3IpOyB9XG4iXX0=