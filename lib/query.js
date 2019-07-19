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
  function Query(ruleNames, types, spread, subQuery, infiniteDescent, maximumDepth) {
    _classCallCheck(this, Query);

    this.ruleNames = ruleNames;
    this.types = types;
    this.spread = spread;
    this.subQuery = subQuery;
    this.infiniteDescent = infiniteDescent;
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
            var type = terminalNode.getType(),
                found = includes(this.types, type, WILDCARD_CHARACTER);

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
      types = typesFromSelectors(selectors),
          typesLength = types.length,
          ruleNames = typesLength === 0 ? ruleNamesFromSelectors(selectors) : [],
          spread = Spread.fromExpression(spreadExpression),
          subQuery = typesLength === 0 ? Query.fromExpression(subExpression) : null,
          infiniteDescent = secondMatch === '/',
          ///
      query = new Query(ruleNames, types, spread, subQuery, infiniteDescent, maximumDepth);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9xdWVyeS5qcyJdLCJuYW1lcyI6WyJTcHJlYWQiLCJyZXF1aXJlIiwiY29uc3RhbnRzIiwiYXJyYXlVdGlsaXRpZXMiLCJXSUxEQ0FSRF9DSEFSQUNURVIiLCJpbmNsdWRlcyIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwiZmlmdGgiLCJRdWVyeSIsInJ1bGVOYW1lcyIsInR5cGVzIiwic3ByZWFkIiwic3ViUXVlcnkiLCJpbmZpbml0ZURlc2NlbnQiLCJtYXhpbXVtRGVwdGgiLCJub2RlIiwiZGVwdGgiLCJub2RlcyIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUVwc2lsb25Ob2RlIiwiaXNFcHNpbG9uTm9kZSIsInR5cGUiLCJnZXRUeXBlIiwiZm91bmQiLCJpc0JldHdlZW4iLCJpbmNyZW1lbnRJbmRleCIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVOb2RlcyIsImV4ZWN1dGUiLCJjb25jYXQiLCJleHByZXNzaW9uIiwiSW5maW5pdHkiLCJ1bmRlZmluZWQiLCJyZWdFeHAiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInRoaXJkTWF0Y2giLCJmb3VydGhNYXRjaCIsImZpZnRoTWF0Y2giLCJzZWxlY3RvcnMiLCJzcGxpdCIsInNwcmVhZEV4cHJlc3Npb24iLCJzdWJFeHByZXNzaW9uIiwidHlwZXNGcm9tU2VsZWN0b3JzIiwidHlwZXNMZW5ndGgiLCJsZW5ndGgiLCJydWxlTmFtZXNGcm9tU2VsZWN0b3JzIiwiZnJvbUV4cHJlc3Npb24iLCJxdWVyeSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzZWxlY3RvciIsInNlbGVjdG9yVHlwZVNlbGVjdG9yIiwiaXNTZWxlY3RvclR5cGVTZWxlY3RvciIsInN1YnN0cmlu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QixDQURGLEdBRUksSUFqQnJCO0FBQUEsVUFrQk10QyxrQkFBbUIrQixnQkFBZ0IsR0FsQnpDO0FBQUEsVUFrQmdEO0FBQzFDYSxjQUFRLElBQUlqRCxLQUFKLENBQVVDLFNBQVYsRUFBcUJDLEtBQXJCLEVBQTRCQyxNQUE1QixFQUFvQ0MsUUFBcEMsRUFBOENDLGVBQTlDLEVBQStEQyxZQUEvRCxDQW5CZDs7QUFxQkEsYUFBTzJDLEtBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJuRCxLQUFqQjs7QUFFQSxTQUFTNEMsa0JBQVQsQ0FBNEJKLFNBQTVCLEVBQXVDO0FBQ3JDLE1BQU10QyxRQUFRLEVBQWQ7O0FBRUFzQyxZQUFVZixPQUFWLENBQWtCLFVBQVMyQixRQUFULEVBQW1CO0FBQ25DLFFBQU1DLHVCQUF1QkMsdUJBQXVCRixRQUF2QixDQUE3Qjs7QUFFQSxRQUFJQyxvQkFBSixFQUEwQjtBQUN4QixVQUFNdEMsT0FBT3FDLFNBQVNHLFNBQVQsQ0FBbUIsQ0FBbkIsQ0FBYjs7QUFFQXJELFlBQU1zRCxJQUFOLENBQVd6QyxJQUFYO0FBQ0Q7QUFDRixHQVJEOztBQVVBLFNBQU9iLEtBQVA7QUFDRDs7QUFFRCxTQUFTb0Qsc0JBQVQsQ0FBZ0NGLFFBQWhDLEVBQTBDO0FBQUUsU0FBTyxNQUFLSyxJQUFMLENBQVVMLFFBQVY7QUFBUDtBQUE2Qjs7QUFFekUsU0FBU0wsc0JBQVQsQ0FBZ0NQLFNBQWhDLEVBQTJDO0FBQUUsU0FBT0EsVUFBVWtCLE1BQVYsQ0FBaUJDLDBCQUFqQixDQUFQO0FBQXNEOztBQUVuRyxTQUFTQSwwQkFBVCxDQUFvQ1AsUUFBcEMsRUFBOEM7QUFBRSxTQUFPLFNBQVFLLElBQVIsQ0FBYUwsUUFBYjtBQUFQO0FBQWdDIiwiZmlsZSI6InF1ZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBTcHJlYWQgPSByZXF1aXJlKCcuL3NwcmVhZCcpLFxuICAgICAgY29uc3RhbnRzID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKSxcbiAgICAgIGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvYXJyYXknKTtcblxuY29uc3QgeyBXSUxEQ0FSRF9DSEFSQUNURVIgfSA9IGNvbnN0YW50cyxcbiAgICAgIHsgaW5jbHVkZXMsIHNlY29uZCwgdGhpcmQsIGZvdXJ0aCwgZmlmdGggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jbGFzcyBRdWVyeSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lcywgdHlwZXMsIHNwcmVhZCwgc3ViUXVlcnksIGluZmluaXRlRGVzY2VudCwgbWF4aW11bURlcHRoKSB7XG4gICAgdGhpcy5ydWxlTmFtZXMgPSBydWxlTmFtZXM7XG4gICAgdGhpcy50eXBlcyA9IHR5cGVzO1xuICAgIHRoaXMuc3ByZWFkID0gc3ByZWFkO1xuICAgIHRoaXMuc3ViUXVlcnkgPSBzdWJRdWVyeTtcbiAgICB0aGlzLmluZmluaXRlRGVzY2VudCA9IGluZmluaXRlRGVzY2VudDtcbiAgICB0aGlzLm1heGltdW1EZXB0aCA9IG1heGltdW1EZXB0aDtcbiAgfVxuICBcbiAgZXhlY3V0ZShub2RlLCBkZXB0aCA9IDApIHtcbiAgICBsZXQgbm9kZXMgPSBbXTtcblxuICAgIGlmIChkZXB0aCA8PSB0aGlzLm1heGltdW1EZXB0aCkge1xuICAgICAgZGVwdGgrKztcblxuICAgICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKG5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgICAgICB0ZXJtaW5hbE5vZGVFcHNpbG9uTm9kZSA9IHRlcm1pbmFsTm9kZS5pc0Vwc2lsb25Ob2RlKCk7XG5cbiAgICAgICAgaWYgKCF0ZXJtaW5hbE5vZGVFcHNpbG9uTm9kZSkge1xuICAgICAgICAgIGNvbnN0IHR5cGUgPSB0ZXJtaW5hbE5vZGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgIGZvdW5kID0gaW5jbHVkZXModGhpcy50eXBlcywgdHlwZSwgV0lMRENBUkRfQ0hBUkFDVEVSKTtcblxuICAgICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3ByZWFkLmlzQmV0d2VlbigpKSB7XG4gICAgICAgICAgICAgIG5vZGVzID0gW25vZGVdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNwcmVhZC5pbmNyZW1lbnRJbmRleCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgIGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICBydWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICBmb3VuZCA9IGluY2x1ZGVzKHRoaXMucnVsZU5hbWVzLCBydWxlTmFtZSwgV0lMRENBUkRfQ0hBUkFDVEVSKTtcblxuICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICBpZiAodGhpcy5zcHJlYWQuaXNCZXR3ZWVuKCkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN1YlF1ZXJ5ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIG5vZGVzID0gW25vblRlcm1pbmFsTm9kZV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZU5vZGVzID0gdGhpcy5zdWJRdWVyeS5leGVjdXRlKGNoaWxkTm9kZSwgZGVwdGgpO1xuXG4gICAgICAgICAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQoY2hpbGROb2RlTm9kZXMpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNwcmVhZC5pbmNyZW1lbnRJbmRleCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaW5maW5pdGVEZXNjZW50KSB7XG4gICAgICAgICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZU5vZGVzID0gdGhpcy5leGVjdXRlKGNoaWxkTm9kZSwgZGVwdGgpO1xuXG4gICAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChjaGlsZE5vZGVOb2Rlcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgbWF4aW11bURlcHRoID0gSW5maW5pdHkpIHtcbiAgICBpZiAoZXhwcmVzc2lvbiA9PT0gdW5kZWZpbmVkKSB7IC8vL1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJlZ0V4cCA9IC9eXFwvKFxcLyk/KFteL1xcW10rKShcXFtbXlxcXV0rXSk/KFxcLy4qKT8kLyxcbiAgICAgICAgICBtYXRjaGVzID0gZXhwcmVzc2lvbi5tYXRjaChyZWdFeHApLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSxcbiAgICAgICAgICBmb3VydGhNYXRjaCA9IGZvdXJ0aChtYXRjaGVzKSxcbiAgICAgICAgICBmaWZ0aE1hdGNoID0gZmlmdGgobWF0Y2hlcyksXG4gICAgICAgICAgc2VsZWN0b3JzID0gdGhpcmRNYXRjaC5zcGxpdCgnfCcpLCAgLy8vXG4gICAgICAgICAgc3ByZWFkRXhwcmVzc2lvbiA9IGZvdXJ0aE1hdGNoLCAgLy8vXG4gICAgICAgICAgc3ViRXhwcmVzc2lvbiA9IGZpZnRoTWF0Y2gsICAvLy9cbiAgICAgICAgICB0eXBlcyA9IHR5cGVzRnJvbVNlbGVjdG9ycyhzZWxlY3RvcnMpLFxuICAgICAgICAgIHR5cGVzTGVuZ3RoID0gdHlwZXMubGVuZ3RoLFxuICAgICAgICAgIHJ1bGVOYW1lcyA9ICh0eXBlc0xlbmd0aCA9PT0gMCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZU5hbWVzRnJvbVNlbGVjdG9ycyhzZWxlY3RvcnMpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW10sXG4gICAgICAgICAgc3ByZWFkID0gU3ByZWFkLmZyb21FeHByZXNzaW9uKHNwcmVhZEV4cHJlc3Npb24pLFxuICAgICAgICAgIHN1YlF1ZXJ5ID0gKHR5cGVzTGVuZ3RoID09PSAwKSA/XG4gICAgICAgICAgICAgICAgICAgICAgIFF1ZXJ5LmZyb21FeHByZXNzaW9uKHN1YkV4cHJlc3Npb24pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgIGluZmluaXRlRGVzY2VudCA9IChzZWNvbmRNYXRjaCA9PT0gJy8nKSwgIC8vL1xuICAgICAgICAgIHF1ZXJ5ID0gbmV3IFF1ZXJ5KHJ1bGVOYW1lcywgdHlwZXMsIHNwcmVhZCwgc3ViUXVlcnksIGluZmluaXRlRGVzY2VudCwgbWF4aW11bURlcHRoKTtcbiAgICBcbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBRdWVyeTtcblxuZnVuY3Rpb24gdHlwZXNGcm9tU2VsZWN0b3JzKHNlbGVjdG9ycykge1xuICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gIHNlbGVjdG9ycy5mb3JFYWNoKGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG4gICAgY29uc3Qgc2VsZWN0b3JUeXBlU2VsZWN0b3IgPSBpc1NlbGVjdG9yVHlwZVNlbGVjdG9yKHNlbGVjdG9yKTtcblxuICAgIGlmIChzZWxlY3RvclR5cGVTZWxlY3Rvcikge1xuICAgICAgY29uc3QgdHlwZSA9IHNlbGVjdG9yLnN1YnN0cmluZygxKTtcblxuICAgICAgdHlwZXMucHVzaCh0eXBlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB0eXBlcztcbn1cblxuZnVuY3Rpb24gaXNTZWxlY3RvclR5cGVTZWxlY3RvcihzZWxlY3RvcikgeyByZXR1cm4gL15ALy50ZXN0KHNlbGVjdG9yKTsgfVxuXG5mdW5jdGlvbiBydWxlTmFtZXNGcm9tU2VsZWN0b3JzKHNlbGVjdG9ycykgeyByZXR1cm4gc2VsZWN0b3JzLmZpbHRlcihpc1NlbGVjdG9yUnVsZU5hbWVTZWxlY3Rvcik7IH1cblxuZnVuY3Rpb24gaXNTZWxlY3RvclJ1bGVOYW1lU2VsZWN0b3Ioc2VsZWN0b3IpIHsgcmV0dXJuIC9eW15AXS8udGVzdChzZWxlY3Rvcik7IH1cbiJdfQ==