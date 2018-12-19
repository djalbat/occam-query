'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var necessary = require('necessary');

var Spread = require('./spread');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first,
    second = arrayUtilities.second,
    third = arrayUtilities.third,
    fourth = arrayUtilities.fourth,
    fifth = arrayUtilities.fifth;

var Query = function () {
  function Query(infiniteDescent, ruleNames, subQuery, spread, maximumDepth) {
    _classCallCheck(this, Query);

    this.infiniteDescent = infiniteDescent;
    this.ruleNames = ruleNames;
    this.subQuery = subQuery;
    this.spread = spread;
    this.maximumDepth = maximumDepth;
  }

  _createClass(Query, [{
    key: 'execute',
    value: function execute(node) {
      var _this = this;

      var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var nodes = [];

      if (depth > this.maximumDepth) {} else {
        depth++;

        var nodeTerminalNode = node.isTerminalNode(),
            firstRuleName = first(this.ruleNames),
            wildcard = firstRuleName === '*'; ///

        if (false) {
          ///
        } else if (nodeTerminalNode) {
          if (wildcard) {
            if (this.spread.isBetween()) {
              if (this.subQuery === null) {
                nodes = [node];
              }
            }

            this.spread.incrementIndex();
          }
        } else {
          var childNodes = node.getChildNodes(),
              ruleName = node.getRuleName(),
              found = this.ruleNames.includes(ruleName);

          if (wildcard || found) {
            if (this.spread.isBetween()) {
              if (this.subQuery === null) {
                nodes = [node];
              } else {
                nodes = childNodes.reduce(function (nodes, childNode) {
                  var childNodeNodes = _this.subQuery.execute(childNode, depth);

                  nodes = nodes.concat(childNodeNodes);

                  return nodes;
                }, nodes);
              }
            }

            this.spread.incrementIndex();
          }

          if (this.infiniteDescent) {
            nodes = childNodes.reduce(function (nodes, childNode) {
              var childNodeNodes = _this.execute(childNode, depth);

              nodes = nodes.concat(childNodeNodes);

              return nodes;
            }, nodes);
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
          infiniteDescent = secondMatch === '/',
          ///
      ruleNames = thirdMatch.split('|'),
          ///
      subExpression = fifthMatch,
          ///
      spreadExpression = fourthMatch,
          ///
      subQuery = Query.fromExpression(subExpression),
          spread = Spread.fromExpression(spreadExpression),
          query = new Query(infiniteDescent, ruleNames, subQuery, spread, maximumDepth);

      return query;
    }
  }]);

  return Query;
}();

module.exports = Query;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9xdWVyeS5qcyJdLCJuYW1lcyI6WyJuZWNlc3NhcnkiLCJyZXF1aXJlIiwiU3ByZWFkIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwiZmlmdGgiLCJRdWVyeSIsImluZmluaXRlRGVzY2VudCIsInJ1bGVOYW1lcyIsInN1YlF1ZXJ5Iiwic3ByZWFkIiwibWF4aW11bURlcHRoIiwibm9kZSIsImRlcHRoIiwibm9kZXMiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJmaXJzdFJ1bGVOYW1lIiwid2lsZGNhcmQiLCJpc0JldHdlZW4iLCJpbmNyZW1lbnRJbmRleCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsImZvdW5kIiwiaW5jbHVkZXMiLCJyZWR1Y2UiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVOb2RlcyIsImV4ZWN1dGUiLCJjb25jYXQiLCJleHByZXNzaW9uIiwiSW5maW5pdHkiLCJ1bmRlZmluZWQiLCJyZWdFeHAiLCJtYXRjaGVzIiwibWF0Y2giLCJzZWNvbmRNYXRjaCIsInRoaXJkTWF0Y2giLCJmb3VydGhNYXRjaCIsImZpZnRoTWF0Y2giLCJzcGxpdCIsInN1YkV4cHJlc3Npb24iLCJzcHJlYWRFeHByZXNzaW9uIiwiZnJvbUV4cHJlc3Npb24iLCJxdWVyeSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZQyxRQUFRLFdBQVIsQ0FBbEI7O0FBRUEsSUFBTUMsU0FBU0QsUUFBUSxVQUFSLENBQWY7O0FBRU0sSUFBRUUsY0FBRixHQUFxQkgsU0FBckIsQ0FBRUcsY0FBRjtBQUFBLElBQ0VDLEtBREYsR0FDMENELGNBRDFDLENBQ0VDLEtBREY7QUFBQSxJQUNTQyxNQURULEdBQzBDRixjQUQxQyxDQUNTRSxNQURUO0FBQUEsSUFDaUJDLEtBRGpCLEdBQzBDSCxj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QUFmO0FBQUEsVUFDTUMsVUFBVUosV0FBV0ssS0FBWCxDQUFpQkYsTUFBakIsQ0FEaEI7QUFBQSxVQUVNRyxjQUFjcEMsT0FBT2tDLE9BQVAsQ0FGcEI7QUFBQSxVQUdNRyxhQUFhcEMsTUFBTWlDLE9BQU4sQ0FIbkI7QUFBQSxVQUlNSSxjQUFjcEMsT0FBT2dDLE9BQVAsQ0FKcEI7QUFBQSxVQUtNSyxhQUFhcEMsTUFBTStCLE9BQU4sQ0FMbkI7QUFBQSxVQU1NN0Isa0JBQW1CK0IsZ0JBQWdCLEdBTnpDO0FBQUEsVUFNZ0Q7QUFDMUM5QixrQkFBWStCLFdBQVdHLEtBQVgsQ0FBaUIsR0FBakIsQ0FQbEI7QUFBQSxVQU8wQztBQUNwQ0Msc0JBQWdCRixVQVJ0QjtBQUFBLFVBUW1DO0FBQzdCRyx5QkFBbUJKLFdBVHpCO0FBQUEsVUFTdUM7QUFDakMvQixpQkFBV0gsTUFBTXVDLGNBQU4sQ0FBcUJGLGFBQXJCLENBVmpCO0FBQUEsVUFXTWpDLFNBQVNYLE9BQU84QyxjQUFQLENBQXNCRCxnQkFBdEIsQ0FYZjtBQUFBLFVBWU1FLFFBQVEsSUFBSXhDLEtBQUosQ0FBVUMsZUFBVixFQUEyQkMsU0FBM0IsRUFBc0NDLFFBQXRDLEVBQWdEQyxNQUFoRCxFQUF3REMsWUFBeEQsQ0FaZDs7QUFjQSxhQUFPbUMsS0FBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQjFDLEtBQWpCIiwiZmlsZSI6InF1ZXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKCduZWNlc3NhcnknKTtcblxuY29uc3QgU3ByZWFkID0gcmVxdWlyZSgnLi9zcHJlYWQnKTtcblxuY29uc3QgeyBhcnJheVV0aWxpdGllcyB9ID0gbmVjZXNzYXJ5LFxuICAgICAgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBmaWZ0aCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFF1ZXJ5IHtcbiAgY29uc3RydWN0b3IoaW5maW5pdGVEZXNjZW50LCBydWxlTmFtZXMsIHN1YlF1ZXJ5LCBzcHJlYWQsIG1heGltdW1EZXB0aCkge1xuICAgIHRoaXMuaW5maW5pdGVEZXNjZW50ID0gaW5maW5pdGVEZXNjZW50O1xuICAgIHRoaXMucnVsZU5hbWVzID0gcnVsZU5hbWVzO1xuICAgIHRoaXMuc3ViUXVlcnkgPSBzdWJRdWVyeTtcbiAgICB0aGlzLnNwcmVhZCA9IHNwcmVhZDtcbiAgICB0aGlzLm1heGltdW1EZXB0aCA9IG1heGltdW1EZXB0aDtcbiAgfVxuICBcbiAgZXhlY3V0ZShub2RlLCBkZXB0aCA9IDApIHtcbiAgICBsZXQgbm9kZXMgPSBbXTtcblxuICAgIGlmIChkZXB0aCA+IHRoaXMubWF4aW11bURlcHRoKSB7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgZGVwdGgrKztcblxuICAgICAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKSxcbiAgICAgICAgICAgIGZpcnN0UnVsZU5hbWUgPSBmaXJzdCh0aGlzLnJ1bGVOYW1lcyksXG4gICAgICAgICAgICB3aWxkY2FyZCA9IChmaXJzdFJ1bGVOYW1lID09PSAnKicpOyAvLy9cblxuICAgICAgaWYgKGZhbHNlKSB7XG5cdFx0XHRcdC8vL1xuICAgICAgfSBlbHNlIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgICAgIGlmICh3aWxkY2FyZCkge1xuICAgICAgICAgIGlmICh0aGlzLnNwcmVhZC5pc0JldHdlZW4oKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3ViUXVlcnkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgbm9kZXMgPSBbbm9kZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zcHJlYWQuaW5jcmVtZW50SW5kZXgoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IG5vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICAgICAgICBydWxlTmFtZSA9IG5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgZm91bmQgPSB0aGlzLnJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgICAgaWYgKHdpbGRjYXJkIHx8IGZvdW5kKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3ByZWFkLmlzQmV0d2VlbigpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdWJRdWVyeSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICBub2RlcyA9IFtub2RlXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5vZGVzID0gY2hpbGROb2Rlcy5yZWR1Y2UoKG5vZGVzLCBjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVOb2RlcyA9IHRoaXMuc3ViUXVlcnkuZXhlY3V0ZShjaGlsZE5vZGUsIGRlcHRoKTtcblxuICAgICAgICAgICAgICAgIG5vZGVzID0gbm9kZXMuY29uY2F0KGNoaWxkTm9kZU5vZGVzKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBub2RlcztcbiAgICAgICAgICAgICAgfSwgbm9kZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc3ByZWFkLmluY3JlbWVudEluZGV4KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pbmZpbml0ZURlc2NlbnQpIHtcbiAgICAgICAgICBub2RlcyA9IGNoaWxkTm9kZXMucmVkdWNlKChub2RlcywgY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVOb2RlcyA9IHRoaXMuZXhlY3V0ZShjaGlsZE5vZGUsIGRlcHRoKTtcblxuICAgICAgICAgICAgbm9kZXMgPSBub2Rlcy5jb25jYXQoY2hpbGROb2RlTm9kZXMpO1xuXG4gICAgICAgICAgICByZXR1cm4gbm9kZXM7XG4gICAgICAgICAgfSwgbm9kZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21FeHByZXNzaW9uKGV4cHJlc3Npb24sIG1heGltdW1EZXB0aCA9IEluZmluaXR5KSB7XG4gICAgaWYgKGV4cHJlc3Npb24gPT09IHVuZGVmaW5lZCkgeyAvLy9cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCByZWdFeHAgPSAvXlxcLyhcXC8pPyhbXi9cXFtdKykoXFxbW15cXF1dK10pPyhcXC8uKik/JC8sXG4gICAgICAgICAgbWF0Y2hlcyA9IGV4cHJlc3Npb24ubWF0Y2gocmVnRXhwKSxcbiAgICAgICAgICBzZWNvbmRNYXRjaCA9IHNlY29uZChtYXRjaGVzKSxcbiAgICAgICAgICB0aGlyZE1hdGNoID0gdGhpcmQobWF0Y2hlcyksXG4gICAgICAgICAgZm91cnRoTWF0Y2ggPSBmb3VydGgobWF0Y2hlcyksXG4gICAgICAgICAgZmlmdGhNYXRjaCA9IGZpZnRoKG1hdGNoZXMpLFxuICAgICAgICAgIGluZmluaXRlRGVzY2VudCA9IChzZWNvbmRNYXRjaCA9PT0gJy8nKSwgIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lcyA9IHRoaXJkTWF0Y2guc3BsaXQoJ3wnKSwgIC8vL1xuICAgICAgICAgIHN1YkV4cHJlc3Npb24gPSBmaWZ0aE1hdGNoLCAgLy8vXG4gICAgICAgICAgc3ByZWFkRXhwcmVzc2lvbiA9IGZvdXJ0aE1hdGNoLCAgLy8vXG4gICAgICAgICAgc3ViUXVlcnkgPSBRdWVyeS5mcm9tRXhwcmVzc2lvbihzdWJFeHByZXNzaW9uKSxcbiAgICAgICAgICBzcHJlYWQgPSBTcHJlYWQuZnJvbUV4cHJlc3Npb24oc3ByZWFkRXhwcmVzc2lvbiksXG4gICAgICAgICAgcXVlcnkgPSBuZXcgUXVlcnkoaW5maW5pdGVEZXNjZW50LCBydWxlTmFtZXMsIHN1YlF1ZXJ5LCBzcHJlYWQsIG1heGltdW1EZXB0aCk7XG4gICAgXG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUXVlcnk7XG4iXX0=