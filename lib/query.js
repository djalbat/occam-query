"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _spread = _interopRequireDefault(require("./spread"));

var _constants = require("./constants");

var _array = require("./utilities/array");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Query = /*#__PURE__*/function () {
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
    key: "execute",
    value: function execute(node) {
      var _this = this;

      var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var maximumDepth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.maximumDepth;
      var resetSpreadsIndexes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      var nodes = [];

      if (resetSpreadsIndexes) {
        this.resetSpreadsIndexes();
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
                found = (0, _array.includes)(this.types, type, _constants.WILDCARD_CHARACTER);

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
              _found = (0, _array.includes)(this.ruleNames, ruleName, _constants.WILDCARD_CHARACTER);

          if (_found) {
            var _between = this.spread.isBetween();

            if (_between) {
              if (this.subQuery === null) {
                nodes = [nonTerminalNode];
              } else {
                childNodes.forEach(function (childNode) {
                  var resetSpreadsIndexes = false,
                      childNodeNodes = _this.subQuery.execute(childNode, depth, maximumDepth, resetSpreadsIndexes);

                  nodes = nodes.concat(childNodeNodes);
                });
              }
            }

            this.spread.incrementIndex();
          }

          if (this.infiniteDescent) {
            childNodes.forEach(function (childNode) {
              var resetSpreadsIndexes = false,
                  childNodeNodes = _this.execute(childNode, depth, maximumDepth, resetSpreadsIndexes);

              nodes = nodes.concat(childNodeNodes);
            });
          }
        }
      }

      return nodes;
    }
  }, {
    key: "resetSpreadsIndexes",
    value: function resetSpreadsIndexes() {
      this.spread.resetIndex();

      if (this.subQuery !== null) {
        this.subQuery.resetSpreadsIndexes();
      }
    }
  }], [{
    key: "fromExpression",
    value: function fromExpression(expression) {
      var maximumDepth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;

      if (expression === undefined) {
        ///
        return null;
      }

      var regExp = /^\/(\/)?([^/\[]+)(\[[^\]]+])?(\/.*)?$/,
          matches = expression.match(regExp),
          secondMatch = (0, _array.second)(matches),
          thirdMatch = (0, _array.third)(matches),
          fourthMatch = (0, _array.fourth)(matches),
          fifthMatch = (0, _array.fifth)(matches),
          selectors = thirdMatch.split("|"),
          ///
      spreadExpression = fourthMatch,
          ///
      subExpression = fifthMatch,
          ///
      types = typesFromSelectors(selectors),
          typesLength = types.length,
          ruleNames = typesLength === 0 ? ruleNamesFromSelectors(selectors) : [],
          spread = _spread["default"].fromExpression(spreadExpression),
          subQuery = typesLength === 0 ? Query.fromExpression(subExpression) : null,
          infiniteDescent = secondMatch === "/",
          ///
      query = new Query(ruleNames, types, spread, subQuery, maximumDepth, infiniteDescent);

      return query;
    }
  }]);

  return Query;
}();

exports["default"] = Query;

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
  return /^@/.test(selector);
}

function ruleNamesFromSelectors(selectors) {
  return selectors.filter(isSelectorRuleNameSelector);
}

function isSelectorRuleNameSelector(selector) {
  return /^[^@]/.test(selector);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXJ5LmpzIl0sIm5hbWVzIjpbIlF1ZXJ5IiwicnVsZU5hbWVzIiwidHlwZXMiLCJzcHJlYWQiLCJzdWJRdWVyeSIsIm1heGltdW1EZXB0aCIsImluZmluaXRlRGVzY2VudCIsIm5vZGUiLCJkZXB0aCIsInJlc2V0U3ByZWFkc0luZGV4ZXMiLCJub2RlcyIsIm5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZUVwc2lsb25Ob2RlIiwiaXNFcHNpbG9uTm9kZSIsInR5cGUiLCJnZXRUeXBlIiwiZm91bmQiLCJXSUxEQ0FSRF9DSEFSQUNURVIiLCJiZXR3ZWVuIiwiaXNCZXR3ZWVuIiwiaW5jcmVtZW50SW5kZXgiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJmb3JFYWNoIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlTm9kZXMiLCJleGVjdXRlIiwiY29uY2F0IiwicmVzZXRJbmRleCIsImV4cHJlc3Npb24iLCJJbmZpbml0eSIsInVuZGVmaW5lZCIsInJlZ0V4cCIsIm1hdGNoZXMiLCJtYXRjaCIsInNlY29uZE1hdGNoIiwidGhpcmRNYXRjaCIsImZvdXJ0aE1hdGNoIiwiZmlmdGhNYXRjaCIsInNlbGVjdG9ycyIsInNwbGl0Iiwic3ByZWFkRXhwcmVzc2lvbiIsInN1YkV4cHJlc3Npb24iLCJ0eXBlc0Zyb21TZWxlY3RvcnMiLCJ0eXBlc0xlbmd0aCIsImxlbmd0aCIsInJ1bGVOYW1lc0Zyb21TZWxlY3RvcnMiLCJTcHJlYWQiLCJmcm9tRXhwcmVzc2lvbiIsInF1ZXJ5Iiwic2VsZWN0b3IiLCJzZWxlY3RvclR5cGVTZWxlY3RvciIsImlzU2VsZWN0b3JUeXBlU2VsZWN0b3IiLCJzdWJzdHJpbmciLCJwdXNoIiwidGVzdCIsImZpbHRlciIsImlzU2VsZWN0b3JSdWxlTmFtZVNlbGVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUNBOzs7Ozs7Ozs7O0lBRXFCQSxLO0FBQ25CLGlCQUFZQyxTQUFaLEVBQXVCQyxLQUF2QixFQUE4QkMsTUFBOUIsRUFBc0NDLFFBQXRDLEVBQWdEQyxZQUFoRCxFQUE4REMsZUFBOUQsRUFBK0U7QUFBQTs7QUFDN0UsU0FBS0wsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0EsU0FBS0MsZUFBTCxHQUF1QkEsZUFBdkI7QUFDRDs7Ozs0QkFFT0MsSSxFQUErRTtBQUFBOztBQUFBLFVBQXpFQyxLQUF5RSx1RUFBakUsQ0FBaUU7QUFBQSxVQUE5REgsWUFBOEQsdUVBQS9DLEtBQUtBLFlBQTBDO0FBQUEsVUFBNUJJLG1CQUE0Qix1RUFBTixJQUFNO0FBQ3JGLFVBQUlDLEtBQUssR0FBRyxFQUFaOztBQUVBLFVBQUlELG1CQUFKLEVBQXlCO0FBQ3ZCLGFBQUtBLG1CQUFMO0FBQ0Q7O0FBRUQsVUFBSUQsS0FBSyxJQUFJSCxZQUFiLEVBQTJCO0FBQ3pCRyxRQUFBQSxLQUFLO0FBRUwsWUFBTUcsZ0JBQWdCLEdBQUdKLElBQUksQ0FBQ0ssY0FBTCxFQUF6Qjs7QUFFQSxZQUFJRCxnQkFBSixFQUFzQjtBQUNwQixjQUFNRSxZQUFZLEdBQUdOLElBQXJCO0FBQUEsY0FBNEI7QUFDdEJPLFVBQUFBLHVCQUF1QixHQUFHRCxZQUFZLENBQUNFLGFBQWIsRUFEaEM7O0FBR0EsY0FBSSxDQUFDRCx1QkFBTCxFQUE4QjtBQUM1QixnQkFBTUUsSUFBSSxHQUFHSCxZQUFZLENBQUNJLE9BQWIsRUFBYjtBQUFBLGdCQUNNQyxLQUFLLEdBQUcscUJBQVMsS0FBS2hCLEtBQWQsRUFBcUJjLElBQXJCLEVBQTJCRyw2QkFBM0IsQ0FEZDs7QUFHQSxnQkFBSUQsS0FBSixFQUFXO0FBQ1Qsa0JBQU1FLE9BQU8sR0FBRyxLQUFLakIsTUFBTCxDQUFZa0IsU0FBWixFQUFoQjs7QUFFQSxrQkFBSUQsT0FBSixFQUFhO0FBQ1hWLGdCQUFBQSxLQUFLLEdBQUcsQ0FBQ0gsSUFBRCxDQUFSO0FBQ0Q7O0FBRUQsbUJBQUtKLE1BQUwsQ0FBWW1CLGNBQVo7QUFDRDtBQUNGO0FBQ0YsU0FsQkQsTUFrQk87QUFDTCxjQUFNQyxlQUFlLEdBQUdoQixJQUF4QjtBQUFBLGNBQThCO0FBQ3hCaUIsVUFBQUEsVUFBVSxHQUFHRCxlQUFlLENBQUNFLGFBQWhCLEVBRG5CO0FBQUEsY0FFTUMsUUFBUSxHQUFHSCxlQUFlLENBQUNJLFdBQWhCLEVBRmpCO0FBQUEsY0FHTVQsTUFBSyxHQUFHLHFCQUFTLEtBQUtqQixTQUFkLEVBQXlCeUIsUUFBekIsRUFBbUNQLDZCQUFuQyxDQUhkOztBQUtBLGNBQUlELE1BQUosRUFBVztBQUNULGdCQUFNRSxRQUFPLEdBQUcsS0FBS2pCLE1BQUwsQ0FBWWtCLFNBQVosRUFBaEI7O0FBRUEsZ0JBQUlELFFBQUosRUFBYTtBQUNYLGtCQUFJLEtBQUtoQixRQUFMLEtBQWtCLElBQXRCLEVBQTRCO0FBQzFCTSxnQkFBQUEsS0FBSyxHQUFHLENBQUNhLGVBQUQsQ0FBUjtBQUNELGVBRkQsTUFFTztBQUNMQyxnQkFBQUEsVUFBVSxDQUFDSSxPQUFYLENBQW1CLFVBQUNDLFNBQUQsRUFBZTtBQUNoQyxzQkFBTXBCLG1CQUFtQixHQUFHLEtBQTVCO0FBQUEsc0JBQ01xQixjQUFjLEdBQUcsS0FBSSxDQUFDMUIsUUFBTCxDQUFjMkIsT0FBZCxDQUFzQkYsU0FBdEIsRUFBaUNyQixLQUFqQyxFQUF3Q0gsWUFBeEMsRUFBc0RJLG1CQUF0RCxDQUR2Qjs7QUFHQUMsa0JBQUFBLEtBQUssR0FBR0EsS0FBSyxDQUFDc0IsTUFBTixDQUFhRixjQUFiLENBQVI7QUFDRCxpQkFMRDtBQU1EO0FBQ0Y7O0FBRUQsaUJBQUszQixNQUFMLENBQVltQixjQUFaO0FBQ0Q7O0FBRUQsY0FBSSxLQUFLaEIsZUFBVCxFQUEwQjtBQUN4QmtCLFlBQUFBLFVBQVUsQ0FBQ0ksT0FBWCxDQUFtQixVQUFDQyxTQUFELEVBQWU7QUFDaEMsa0JBQU1wQixtQkFBbUIsR0FBRyxLQUE1QjtBQUFBLGtCQUNNcUIsY0FBYyxHQUFHLEtBQUksQ0FBQ0MsT0FBTCxDQUFhRixTQUFiLEVBQXdCckIsS0FBeEIsRUFBK0JILFlBQS9CLEVBQTZDSSxtQkFBN0MsQ0FEdkI7O0FBR0FDLGNBQUFBLEtBQUssR0FBR0EsS0FBSyxDQUFDc0IsTUFBTixDQUFhRixjQUFiLENBQVI7QUFDRCxhQUxEO0FBTUQ7QUFDRjtBQUNGOztBQUVELGFBQU9wQixLQUFQO0FBQ0Q7OzswQ0FFcUI7QUFDcEIsV0FBS1AsTUFBTCxDQUFZOEIsVUFBWjs7QUFFQSxVQUFJLEtBQUs3QixRQUFMLEtBQWtCLElBQXRCLEVBQTRCO0FBQzFCLGFBQUtBLFFBQUwsQ0FBY0ssbUJBQWQ7QUFDRDtBQUNGOzs7bUNBRXFCeUIsVSxFQUFxQztBQUFBLFVBQXpCN0IsWUFBeUIsdUVBQVY4QixRQUFVOztBQUN6RCxVQUFJRCxVQUFVLEtBQUtFLFNBQW5CLEVBQThCO0FBQUU7QUFDOUIsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBTUMsTUFBTSxHQUFHLHVDQUFmO0FBQUEsVUFDTUMsT0FBTyxHQUFHSixVQUFVLENBQUNLLEtBQVgsQ0FBaUJGLE1BQWpCLENBRGhCO0FBQUEsVUFFTUcsV0FBVyxHQUFHLG1CQUFPRixPQUFQLENBRnBCO0FBQUEsVUFHTUcsVUFBVSxHQUFHLGtCQUFNSCxPQUFOLENBSG5CO0FBQUEsVUFJTUksV0FBVyxHQUFHLG1CQUFPSixPQUFQLENBSnBCO0FBQUEsVUFLTUssVUFBVSxHQUFHLGtCQUFNTCxPQUFOLENBTG5CO0FBQUEsVUFNTU0sU0FBUyxHQUFHSCxVQUFVLENBQUNJLEtBQVgsQ0FBaUIsR0FBakIsQ0FObEI7QUFBQSxVQU0wQztBQUNwQ0MsTUFBQUEsZ0JBQWdCLEdBQUdKLFdBUHpCO0FBQUEsVUFPdUM7QUFDakNLLE1BQUFBLGFBQWEsR0FBR0osVUFSdEI7QUFBQSxVQVFtQztBQUM3QnpDLE1BQUFBLEtBQUssR0FBRzhDLGtCQUFrQixDQUFDSixTQUFELENBVGhDO0FBQUEsVUFVTUssV0FBVyxHQUFHL0MsS0FBSyxDQUFDZ0QsTUFWMUI7QUFBQSxVQVdNakQsU0FBUyxHQUFJZ0QsV0FBVyxLQUFLLENBQWpCLEdBQ0VFLHNCQUFzQixDQUFDUCxTQUFELENBRHhCLEdBRUksRUFidEI7QUFBQSxVQWNNekMsTUFBTSxHQUFHaUQsbUJBQU9DLGNBQVAsQ0FBc0JQLGdCQUF0QixDQWRmO0FBQUEsVUFlTTFDLFFBQVEsR0FBSTZDLFdBQVcsS0FBSyxDQUFqQixHQUNFakQsS0FBSyxDQUFDcUQsY0FBTixDQUFxQk4sYUFBckIsQ0FERixHQUVJLElBakJyQjtBQUFBLFVBa0JNekMsZUFBZSxHQUFJa0MsV0FBVyxLQUFLLEdBbEJ6QztBQUFBLFVBa0JnRDtBQUMxQ2MsTUFBQUEsS0FBSyxHQUFHLElBQUl0RCxLQUFKLENBQVVDLFNBQVYsRUFBcUJDLEtBQXJCLEVBQTRCQyxNQUE1QixFQUFvQ0MsUUFBcEMsRUFBOENDLFlBQTlDLEVBQTREQyxlQUE1RCxDQW5CZDs7QUFxQkEsYUFBT2dELEtBQVA7QUFDRDs7Ozs7Ozs7QUFHSCxTQUFTTixrQkFBVCxDQUE0QkosU0FBNUIsRUFBdUM7QUFDckMsTUFBTTFDLEtBQUssR0FBRyxFQUFkO0FBRUEwQyxFQUFBQSxTQUFTLENBQUNoQixPQUFWLENBQWtCLFVBQUMyQixRQUFELEVBQWM7QUFDOUIsUUFBTUMsb0JBQW9CLEdBQUdDLHNCQUFzQixDQUFDRixRQUFELENBQW5EOztBQUVBLFFBQUlDLG9CQUFKLEVBQTBCO0FBQ3hCLFVBQU14QyxJQUFJLEdBQUd1QyxRQUFRLENBQUNHLFNBQVQsQ0FBbUIsQ0FBbkIsQ0FBYjtBQUVBeEQsTUFBQUEsS0FBSyxDQUFDeUQsSUFBTixDQUFXM0MsSUFBWDtBQUNEO0FBQ0YsR0FSRDtBQVVBLFNBQU9kLEtBQVA7QUFDRDs7QUFFRCxTQUFTdUQsc0JBQVQsQ0FBZ0NGLFFBQWhDLEVBQTBDO0FBQUUsU0FBTyxLQUFLSyxJQUFMLENBQVVMLFFBQVYsQ0FBUDtBQUE2Qjs7QUFFekUsU0FBU0osc0JBQVQsQ0FBZ0NQLFNBQWhDLEVBQTJDO0FBQUUsU0FBT0EsU0FBUyxDQUFDaUIsTUFBVixDQUFpQkMsMEJBQWpCLENBQVA7QUFBc0Q7O0FBRW5HLFNBQVNBLDBCQUFULENBQW9DUCxRQUFwQyxFQUE4QztBQUFFLFNBQU8sUUFBUUssSUFBUixDQUFhTCxRQUFiLENBQVA7QUFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFNwcmVhZCBmcm9tIFwiLi9zcHJlYWRcIjtcblxuaW1wb3J0IHsgV0lMRENBUkRfQ0hBUkFDVEVSIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBpbmNsdWRlcywgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBmaWZ0aCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRdWVyeSB7XG4gIGNvbnN0cnVjdG9yKHJ1bGVOYW1lcywgdHlwZXMsIHNwcmVhZCwgc3ViUXVlcnksIG1heGltdW1EZXB0aCwgaW5maW5pdGVEZXNjZW50KSB7XG4gICAgdGhpcy5ydWxlTmFtZXMgPSBydWxlTmFtZXM7XG4gICAgdGhpcy50eXBlcyA9IHR5cGVzO1xuICAgIHRoaXMuc3ByZWFkID0gc3ByZWFkO1xuICAgIHRoaXMuc3ViUXVlcnkgPSBzdWJRdWVyeTtcbiAgICB0aGlzLm1heGltdW1EZXB0aCA9IG1heGltdW1EZXB0aDtcbiAgICB0aGlzLmluZmluaXRlRGVzY2VudCA9IGluZmluaXRlRGVzY2VudDtcbiAgfVxuICBcbiAgZXhlY3V0ZShub2RlLCBkZXB0aCA9IDAsIG1heGltdW1EZXB0aCA9IHRoaXMubWF4aW11bURlcHRoLCByZXNldFNwcmVhZHNJbmRleGVzID0gdHJ1ZSkge1xuICAgIGxldCBub2RlcyA9IFtdO1xuXG4gICAgaWYgKHJlc2V0U3ByZWFkc0luZGV4ZXMpIHtcbiAgICAgIHRoaXMucmVzZXRTcHJlYWRzSW5kZXhlcygpO1xuICAgIH1cblxuICAgIGlmIChkZXB0aCA8PSBtYXhpbXVtRGVwdGgpIHtcbiAgICAgIGRlcHRoKys7XG5cbiAgICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICAgICAgdGVybWluYWxOb2RlRXBzaWxvbk5vZGUgPSB0ZXJtaW5hbE5vZGUuaXNFcHNpbG9uTm9kZSgpO1xuXG4gICAgICAgIGlmICghdGVybWluYWxOb2RlRXBzaWxvbk5vZGUpIHtcbiAgICAgICAgICBjb25zdCB0eXBlID0gdGVybWluYWxOb2RlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICBmb3VuZCA9IGluY2x1ZGVzKHRoaXMudHlwZXMsIHR5cGUsIFdJTERDQVJEX0NIQVJBQ1RFUik7XG5cbiAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgIGNvbnN0IGJldHdlZW4gPSB0aGlzLnNwcmVhZC5pc0JldHdlZW4oKTtcblxuICAgICAgICAgICAgaWYgKGJldHdlZW4pIHtcbiAgICAgICAgICAgICAgbm9kZXMgPSBbbm9kZV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc3ByZWFkLmluY3JlbWVudEluZGV4KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICAgICAgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgICAgIHJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIGZvdW5kID0gaW5jbHVkZXModGhpcy5ydWxlTmFtZXMsIHJ1bGVOYW1lLCBXSUxEQ0FSRF9DSEFSQUNURVIpO1xuXG4gICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgIGNvbnN0IGJldHdlZW4gPSB0aGlzLnNwcmVhZC5pc0JldHdlZW4oKTtcblxuICAgICAgICAgIGlmIChiZXR3ZWVuKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdWJRdWVyeSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBub2RlcyA9IFtub25UZXJtaW5hbE5vZGVdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNldFNwcmVhZHNJbmRleGVzID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgY2hpbGROb2RlTm9kZXMgPSB0aGlzLnN1YlF1ZXJ5LmV4ZWN1dGUoY2hpbGROb2RlLCBkZXB0aCwgbWF4aW11bURlcHRoLCByZXNldFNwcmVhZHNJbmRleGVzKTtcblxuICAgICAgICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KGNoaWxkTm9kZU5vZGVzKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zcHJlYWQuaW5jcmVtZW50SW5kZXgoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmluZmluaXRlRGVzY2VudCkge1xuICAgICAgICAgIGNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXNldFNwcmVhZHNJbmRleGVzID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgICBjaGlsZE5vZGVOb2RlcyA9IHRoaXMuZXhlY3V0ZShjaGlsZE5vZGUsIGRlcHRoLCBtYXhpbXVtRGVwdGgsIHJlc2V0U3ByZWFkc0luZGV4ZXMpO1xuXG4gICAgICAgICAgICBub2RlcyA9IG5vZGVzLmNvbmNhdChjaGlsZE5vZGVOb2Rlcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9kZXM7XG4gIH1cblxuICByZXNldFNwcmVhZHNJbmRleGVzKCkge1xuICAgIHRoaXMuc3ByZWFkLnJlc2V0SW5kZXgoKTtcblxuICAgIGlmICh0aGlzLnN1YlF1ZXJ5ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnN1YlF1ZXJ5LnJlc2V0U3ByZWFkc0luZGV4ZXMoKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb24oZXhwcmVzc2lvbiwgbWF4aW11bURlcHRoID0gSW5maW5pdHkpIHtcbiAgICBpZiAoZXhwcmVzc2lvbiA9PT0gdW5kZWZpbmVkKSB7IC8vL1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJlZ0V4cCA9IC9eXFwvKFxcLyk/KFteL1xcW10rKShcXFtbXlxcXV0rXSk/KFxcLy4qKT8kLyxcbiAgICAgICAgICBtYXRjaGVzID0gZXhwcmVzc2lvbi5tYXRjaChyZWdFeHApLFxuICAgICAgICAgIHNlY29uZE1hdGNoID0gc2Vjb25kKG1hdGNoZXMpLFxuICAgICAgICAgIHRoaXJkTWF0Y2ggPSB0aGlyZChtYXRjaGVzKSxcbiAgICAgICAgICBmb3VydGhNYXRjaCA9IGZvdXJ0aChtYXRjaGVzKSxcbiAgICAgICAgICBmaWZ0aE1hdGNoID0gZmlmdGgobWF0Y2hlcyksXG4gICAgICAgICAgc2VsZWN0b3JzID0gdGhpcmRNYXRjaC5zcGxpdChcInxcIiksICAvLy9cbiAgICAgICAgICBzcHJlYWRFeHByZXNzaW9uID0gZm91cnRoTWF0Y2gsICAvLy9cbiAgICAgICAgICBzdWJFeHByZXNzaW9uID0gZmlmdGhNYXRjaCwgIC8vL1xuICAgICAgICAgIHR5cGVzID0gdHlwZXNGcm9tU2VsZWN0b3JzKHNlbGVjdG9ycyksXG4gICAgICAgICAgdHlwZXNMZW5ndGggPSB0eXBlcy5sZW5ndGgsXG4gICAgICAgICAgcnVsZU5hbWVzID0gKHR5cGVzTGVuZ3RoID09PSAwKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlTmFtZXNGcm9tU2VsZWN0b3JzKHNlbGVjdG9ycykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXSxcbiAgICAgICAgICBzcHJlYWQgPSBTcHJlYWQuZnJvbUV4cHJlc3Npb24oc3ByZWFkRXhwcmVzc2lvbiksXG4gICAgICAgICAgc3ViUXVlcnkgPSAodHlwZXNMZW5ndGggPT09IDApID9cbiAgICAgICAgICAgICAgICAgICAgICAgUXVlcnkuZnJvbUV4cHJlc3Npb24oc3ViRXhwcmVzc2lvbikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgaW5maW5pdGVEZXNjZW50ID0gKHNlY29uZE1hdGNoID09PSBcIi9cIiksICAvLy9cbiAgICAgICAgICBxdWVyeSA9IG5ldyBRdWVyeShydWxlTmFtZXMsIHR5cGVzLCBzcHJlYWQsIHN1YlF1ZXJ5LCBtYXhpbXVtRGVwdGgsIGluZmluaXRlRGVzY2VudCk7XG4gICAgXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG59XG5cbmZ1bmN0aW9uIHR5cGVzRnJvbVNlbGVjdG9ycyhzZWxlY3RvcnMpIHtcbiAgY29uc3QgdHlwZXMgPSBbXTtcblxuICBzZWxlY3RvcnMuZm9yRWFjaCgoc2VsZWN0b3IpID0+IHtcbiAgICBjb25zdCBzZWxlY3RvclR5cGVTZWxlY3RvciA9IGlzU2VsZWN0b3JUeXBlU2VsZWN0b3Ioc2VsZWN0b3IpO1xuXG4gICAgaWYgKHNlbGVjdG9yVHlwZVNlbGVjdG9yKSB7XG4gICAgICBjb25zdCB0eXBlID0gc2VsZWN0b3Iuc3Vic3RyaW5nKDEpO1xuXG4gICAgICB0eXBlcy5wdXNoKHR5cGUpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHR5cGVzO1xufVxuXG5mdW5jdGlvbiBpc1NlbGVjdG9yVHlwZVNlbGVjdG9yKHNlbGVjdG9yKSB7IHJldHVybiAvXkAvLnRlc3Qoc2VsZWN0b3IpOyB9XG5cbmZ1bmN0aW9uIHJ1bGVOYW1lc0Zyb21TZWxlY3RvcnMoc2VsZWN0b3JzKSB7IHJldHVybiBzZWxlY3RvcnMuZmlsdGVyKGlzU2VsZWN0b3JSdWxlTmFtZVNlbGVjdG9yKTsgfVxuXG5mdW5jdGlvbiBpc1NlbGVjdG9yUnVsZU5hbWVTZWxlY3RvcihzZWxlY3RvcikgeyByZXR1cm4gL15bXkBdLy50ZXN0KHNlbGVjdG9yKTsgfVxuIl19