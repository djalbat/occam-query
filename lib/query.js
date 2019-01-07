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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9xdWVyeS5qcyJdLCJuYW1lcyI6WyJTcHJlYWQiLCJyZXF1aXJlIiwiY29uc3RhbnRzIiwiYXJyYXlVdGlsaXRpZXMiLCJXSUxEQ0FSRF9DSEFSQUNURVIiLCJpbmNsdWRlcyIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwiZmlmdGgiLCJRdWVyeSIsInNpZ25pZmljYW50VG9rZW5UeXBlcyIsImluZmluaXRlRGVzY2VudCIsInJ1bGVOYW1lcyIsInNwcmVhZCIsInN1YlF1ZXJ5IiwibWF4aW11bURlcHRoIiwibm9kZSIsImRlcHRoIiwibm9kZXMiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW5UeXBlIiwiZ2V0VHlwZSIsImZvdW5kIiwiaXNCZXR3ZWVuIiwiaW5jcmVtZW50SW5kZXgiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlTm9kZXMiLCJleGVjdXRlIiwiY29uY2F0IiwiZXhwcmVzc2lvbiIsIkluZmluaXR5IiwidW5kZWZpbmVkIiwicmVnRXhwIiwibWF0Y2hlcyIsIm1hdGNoIiwic2Vjb25kTWF0Y2giLCJ0aGlyZE1hdGNoIiwiZm91cnRoTWF0Y2giLCJmaWZ0aE1hdGNoIiwic2VsZWN0b3JzIiwic3BsaXQiLCJzcHJlYWRFeHByZXNzaW9uIiwic3ViRXhwcmVzc2lvbiIsInNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21TZWxlY3RvcnMiLCJzaWduaWZpY2FudFRva2VuVHlwZXNMZW5ndGgiLCJsZW5ndGgiLCJydWxlTmFtZXNGcm9tU2VsZWN0b3JzIiwiZnJvbUV4cHJlc3Npb24iLCJxdWVyeSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzZWxlY3RvciIsInNlbGVjdG9yVG9rZW5UeXBlU2VsZWN0b3IiLCJpc1NlbGVjdG9yVG9rZW5UeXBlU2VsZWN0b3IiLCJ0b2tlblR5cGUiLCJzdWJzdHJpbmciLCJwdXNoIiwidGVzdCIsImZpbHRlciIsImlzU2VsZWN0b3JSdWxlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVNDLFFBQVEsVUFBUixDQUFmO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxhQUFSLENBRGxCO0FBQUEsSUFFTUUsaUJBQWlCRixRQUFRLG1CQUFSLENBRnZCOztBQUlNLElBQUVHLGtCQUFGLEdBQXlCRixTQUF6QixDQUFFRSxrQkFBRjtBQUFBLElBQ0VDLFFBREYsR0FDNkNGLGNBRDdDLENBQ0VFLFFBREY7QUFBQSxJQUNZQyxNQURaLEdBQzZDSCxjQUQ3QyxDQUNZRyxNQURaO0FBQUEsSUFDb0JDLEtBRHBCLEdBQzZDSixjQUQ3QyxDQUNvQkksS0FEcEI7QUFBQSxJQUMyQkMsTUFEM0IsR0FDNkNMLGNBRDdDLENBQzJCSyxNQUQzQjtBQUFBLElBQ21DQyxLQURuQyxHQUM2Q04sY0FEN0MsQ0FDbUNNLEtBRG5DOztJQUdBQyxLO0FBQ0osaUJBQVlDLHFCQUFaLEVBQW1DQyxlQUFuQyxFQUFvREMsU0FBcEQsRUFBK0RDLE1BQS9ELEVBQXVFQyxRQUF2RSxFQUFpRkMsWUFBakYsRUFBK0Y7QUFBQTs7QUFDN0YsU0FBS0wscUJBQUwsR0FBNkJBLHFCQUE3QjtBQUNBLFNBQUtDLGVBQUwsR0FBdUJBLGVBQXZCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0Q7Ozs7NEJBRU9DLEksRUFBaUI7QUFBQTs7QUFBQSxVQUFYQyxLQUFXLHVFQUFILENBQUc7O0FBQ3ZCLFVBQUlDLFFBQVEsRUFBWjs7QUFFQSxVQUFJRCxTQUFTLEtBQUtGLFlBQWxCLEVB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PSByZXF1aXJlKCcuL3NwcmVhZCcpLFxuICAgICAgY29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBXSUxEQ0FSRF9DSEFSQUNURVIgfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgaW5jbHVkZXMsIHNlY29uZCwgdGhpcmQsIGZvdXJ0aCwgZmlmdGggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBRdWVyeSB7XG4gIGNvbnN0cnVjdG9yKHNpZ25pZmljYW50VG9rZW5UeXBlcywgaW5maW5pdGVEZXNjZW50LCBydWxlTmFtZXMsIHNwcmVhZCwgc3ViUXVlcnksIG1heGltdW1EZXB0aCkge1xuICAgIHRoaXMuc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gc2lnbmlmaWNhbnRUb2tlblR5cGVzO1xuICAgIHRoaXMuaW5maW5pdGVEZXNjZW50ID0gaW5maW5pdGVEZXNjZW50O1xuICAgIHRoaXMucnVsZU5hbWVzID0gcnVsZU5hbWVzO1xuICAgIHRoaXMuc3ByZWFkID0gc3ByZWFkO1xuICAgIHRoaXMuc3ViUXVlcnkgPSBzdWJRdWVyeTtcbiAgICB0aGlzLm1heGltdW1EZXB0aCA9IG1heGltdW1EZXB0aDtcbiAgfVxuICBcbiAgZXhlY3V0ZShub2RlLCBkZXB0aCA9IDApIHtcbiAgICBsZXQgbm9kZXMgPSBbXTtcblxuICAgIGlmIChkZXB0aCA8PSB0aGlzLm1heGltdW1EZXB0aCkge1xuICAgICAgZGVwdGgrKztcblxuICAgICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKSxcbiAgICAgICAgICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGUgPSBzaWduaWZpY2FudFRva2VuLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgZm91bmQgPSBpbmNsdWRlcyh0aGlzLnNpZ25pZmljYW50VG9rZW5UeXBlcywgc2lnbmlmaWNhbnRUb2tlblR5cGUsIFdJTERDQVJEX0NIQVJBQ1RFUik7XG5cbiAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3ByZWFkLmlzQmV0d2VlbigpKSB7XG4gICAgICAgICAgICBub2RlcyA9IFtub2RlXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNwcmVhZC5pbmNyZW1lbnRJbmRleCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIGZvdW5kID0gaW5jbHVkZXModGhpcy5ydWxlTmFtZXMsIHJ1bGVOYW1lLCBXSUxEQ0FSRF9DSEFSQUNURVIpO1xuXG4gICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgIGlmICh0aGlzLnNwcmVhZC5pc0JldHdlZW4oKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3ViUXVlcnkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgbm9kZXMgPSBbbm9uVGVybWluYWxOb2RlXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlTm9kZXMgPSB0aGlzLnN1YlF1ZXJ5LmV4ZWN1dGUoY2hpbGROb2RlLCBkZXB0aCk7XG5cbiAgICAgICAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChjaGlsZE5vZGVOb2Rlcyk7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc3ByZWFkLmluY3JlbWVudEluZGV4KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pbmZpbml0ZURlc2NlbnQpIHtcbiAgICAgICAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlTm9kZXMgPSB0aGlzLmV4ZWN1dGUoY2hpbGROb2RlLCBkZXB0aCk7XG5cbiAgICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KGNoaWxkTm9kZU5vZGVzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRXhwcmVzc2lvbihleHByZXNzaW9uLCBtYXhpbXVtRGVwdGggPSBJbmZpbml0eSkge1xuICAgIGlmIChleHByZXNzaW9uID09PSB1bmRlZmluZWQpIHsgLy8vXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcmVnRXhwID0gL15cXC8oXFwvKT8oW14vXFxbXSspKFxcW1teXFxdXStdKT8oXFwvLiopPyQvLFxuICAgICAgICAgIG1hdGNoZXMgPSBleHByZXNzaW9uLm1hdGNoKHJlZ0V4cCksXG4gICAgICAgICAgc2Vjb25kTWF0Y2ggPSBzZWNvbmQobWF0Y2hlcyksXG4gICAgICAgICAgdGhpcmRNYXRjaCA9IHRoaXJkKG1hdGNoZXMpLFxuICAgICAgICAgIGZvdXJ0aE1hdGNoID0gZm91cnRoKG1hdGNoZXMpLFxuICAgICAgICAgIGZpZnRoTWF0Y2ggPSBmaWZ0aChtYXRjaGVzKSxcbiAgICAgICAgICBzZWxlY3RvcnMgPSB0aGlyZE1hdGNoLnNwbGl0KCd8JyksICAvLy9cbiAgICAgICAgICBzcHJlYWRFeHByZXNzaW9uID0gZm91cnRoTWF0Y2gsICAvLy9cbiAgICAgICAgICBzdWJFeHByZXNzaW9uID0gZmlmdGhNYXRjaCwgIC8vL1xuICAgICAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlcyA9IHNpZ25pZmljYW50VG9rZW5UeXBlc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKSxcbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuVHlwZXNMZW5ndGggPSBzaWduaWZpY2FudFRva2VuVHlwZXMubGVuZ3RoLFxuICAgICAgICAgIGluZmluaXRlRGVzY2VudCA9IChzZWNvbmRNYXRjaCA9PT0gJy8nKSwgIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lcyA9IChzaWduaWZpY2FudFRva2VuVHlwZXNMZW5ndGggPT09IDApID9cbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVOYW1lc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtdLFxuICAgICAgICAgIHNwcmVhZCA9IFNwcmVhZC5mcm9tRXhwcmVzc2lvbihzcHJlYWRFeHByZXNzaW9uKSxcbiAgICAgICAgICBzdWJRdWVyeSA9IChzaWduaWZpY2FudFRva2VuVHlwZXNMZW5ndGggPT09IDApID9cbiAgICAgICAgICAgICAgICAgICAgICAgUXVlcnkuZnJvbUV4cHJlc3Npb24oc3ViRXhwcmVzc2lvbikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgcXVlcnkgPSBuZXcgUXVlcnkoc2lnbmlmaWNhbnRUb2tlblR5cGVzLCBpbmZpbml0ZURlc2NlbnQsIHJ1bGVOYW1lcywgc3ByZWFkLCBzdWJRdWVyeSwgbWF4aW11bURlcHRoKTtcbiAgICBcbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBRdWVyeTtcblxuZnVuY3Rpb24gc2lnbmlmaWNhbnRUb2tlblR5cGVzRnJvbVNlbGVjdG9ycyhzZWxlY3RvcnMpIHtcbiAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlblR5cGVzID0gW107XG5cbiAgc2VsZWN0b3JzLmZvckVhY2goZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgICBjb25zdCBzZWxlY3RvclRva2VuVHlwZVNlbGVjdG9yID0gaXNTZWxlY3RvclRva2VuVHlwZVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgIGlmIChzZWxlY3RvclRva2VuVHlwZVNlbGVjdG9yKSB7XG4gICAgICBjb25zdCB0b2tlblR5cGUgPSBzZWxlY3Rvci5zdWJzdHJpbmcoMSk7XG5cbiAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlcy5wdXNoKHRva2VuVHlwZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gc2lnbmlmaWNhbnRUb2tlblR5cGVzO1xufVxuXG5mdW5jdGlvbiBpc1NlbGVjdG9yVG9rZW5UeXBlU2VsZWN0b3Ioc2VsZWN0b3IpIHsgcmV0dXJuIC9eQC8udGVzdChzZWxlY3Rvcik7IH1cblxuZnVuY3Rpb24gcnVsZU5hbWVzRnJvbVNlbGVjdG9ycyhzZWxlY3RvcnMpIHsgcmV0dXJuIHNlbGVjdG9ycy5maWx0ZXIoaXNTZWxlY3RvclJ1bGVOYW1lKTsgfVxuXG5mdW5jdGlvbiBpc1NlbGVjdG9yUnVsZU5hbWUoc2VsZWN0b3IpIHsgcmV0dXJuIC9eW15AXS8udGVzdChzZWxlY3Rvcik7IH1cbiJdfQ==