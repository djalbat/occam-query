"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
const _easy = require("easy");
const _index = require("../index");
const _withstyle = require("with-style");
const _easylayout = require("easy-layout");
const _subHeading = /*#__PURE__*/ _interop_require_default(require("./view/subHeading"));
const _sizeable = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable"));
const _nodes = /*#__PURE__*/ _interop_require_default(require("./view/textarea/nodes"));
const _content = /*#__PURE__*/ _interop_require_default(require("./view/textarea/content"));
const _maximumDepth = /*#__PURE__*/ _interop_require_default(require("./view/input/maximumDepth"));
const _expressionString = /*#__PURE__*/ _interop_require_default(require("./view/input/expressionString"));
const _parseTree = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const cssLexer = _withstyle.CSSLexer.fromNothing(), cssParser = _withstyle.CSSParser.fromNothing();
const { queryByExpressionString } = _index.queryUtilities;
class View extends _easy.Element {
    keyUpHandler = (event, element)=>{
        this.clearNodes();
        this.clearParseTree();
        const content = this.getContent(), tokens = cssLexer.tokenise(content), node = cssParser.parse(tokens);
        if (node === null) {
            return;
        }
        const abridged = true, parseTree = node.asParseTree(tokens, abridged), expressionString = this.getExpressionString(), maximumDepth = this.getMaximumDepth(), nodes = queryByExpressionString(node, expressionString, maximumDepth);
        if (nodes !== null) {
            this.setNodes(nodes, tokens); ///
            this.setParseTree(parseTree);
        }
    };
    childElements() {
        return [
            /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_sizeable.default, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Expression"), /*#__PURE__*/ React.createElement(_expressionString.default, {
                onKeyUp: this.keyUpHandler
            }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Maximum depth"), /*#__PURE__*/ React.createElement(_maximumDepth.default, {
                onKeyUp: this.keyUpHandler
            }))), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ React.createElement(_content.default, {
                onKeyUp: this.keyUpHandler
            }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Nodes"), /*#__PURE__*/ React.createElement(_nodes.default, null))))
        ];
    }
    initialise() {
        this.assignContext();
        const { initialContent, initialExpressionString, initialMaximumDepth } = this.constructor, content = initialContent, maximumDepth = initialMaximumDepth, expressionString = initialExpressionString; ///
        this.setContent(content);
        this.setMaximumDepth(maximumDepth);
        this.setExpressionString(expressionString);
        this.keyUpHandler(); ///
    }
    static initialContent = `.view {
  background: red;
}
`;
    static initialExpressionString = "/*//@special[2...4]";
    static initialMaximumDepth = 5;
    static tagName = "div";
    static defaultProperties = {
        className: "view"
    };
}
const _default = (0, _easywithstyle.default)(View)`

  padding: 1rem;
  
`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcXVlcnlVdGlsaXRpZXMgfSBmcm9tIFwiLi4vaW5kZXhcIjsgIC8vL1xuaW1wb3J0IHsgQ1NTTGV4ZXIsIENTU1BhcnNlciB9IGZyb20gXCJ3aXRoLXN0eWxlXCI7XG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vdmlldy9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vdmlldy9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBOb2Rlc1RleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvbm9kZXNcIjtcbmltcG9ydCBDb250ZW50VGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgTWF4aW11bURlcHRoSW5wdXQgZnJvbSBcIi4vdmlldy9pbnB1dC9tYXhpbXVtRGVwdGhcIjtcbmltcG9ydCBFeHByZXNzaW9uU3RyaW5nSW5wdXQgZnJvbSBcIi4vdmlldy9pbnB1dC9leHByZXNzaW9uU3RyaW5nXCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcblxuY29uc3QgY3NzTGV4ZXIgPSBDU1NMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgY3NzUGFyc2VyID0gQ1NTUGFyc2VyLmZyb21Ob3RoaW5nKCk7XG5cbmNvbnN0IHsgcXVlcnlCeUV4cHJlc3Npb25TdHJpbmcgfSA9IHF1ZXJ5VXRpbGl0aWVzO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleVVwSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuY2xlYXJOb2RlcygpO1xuXG4gICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHRva2VucyA9IGNzc0xleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBjc3NQYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYWJyaWRnZWQgPSB0cnVlLFxuICAgICAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zLCBhYnJpZGdlZCksXG4gICAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IHRoaXMuZ2V0RXhwcmVzc2lvblN0cmluZygpLFxuICAgICAgICAgIG1heGltdW1EZXB0aCA9IHRoaXMuZ2V0TWF4aW11bURlcHRoKCksXG4gICAgICAgICAgbm9kZXMgPSBxdWVyeUJ5RXhwcmVzc2lvblN0cmluZyhub2RlLCBleHByZXNzaW9uU3RyaW5nLCBtYXhpbXVtRGVwdGgpO1xuXG4gICAgaWYgKG5vZGVzICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnNldE5vZGVzKG5vZGVzLCB0b2tlbnMpOyAvLy9cblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICB9XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEV4cHJlc3Npb25cbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxFeHByZXNzaW9uU3RyaW5nSW5wdXQgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgTWF4aW11bSBkZXB0aFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPE1heGltdW1EZXB0aElucHV0IG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9TaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBDb250ZW50XG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIE5vZGVzXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Tm9kZXNUZXh0YXJlYSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGluaXRpYWxDb250ZW50LCBpbml0aWFsRXhwcmVzc2lvblN0cmluZywgaW5pdGlhbE1heGltdW1EZXB0aCB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQsICAvLy9cbiAgICAgICAgICBtYXhpbXVtRGVwdGggPSBpbml0aWFsTWF4aW11bURlcHRoLCAgLy8vXG4gICAgICAgICAgZXhwcmVzc2lvblN0cmluZyA9IGluaXRpYWxFeHByZXNzaW9uU3RyaW5nOyAgLy8vXG5cbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldE1heGltdW1EZXB0aChtYXhpbXVtRGVwdGgpO1xuXG4gICAgdGhpcy5zZXRFeHByZXNzaW9uU3RyaW5nKGV4cHJlc3Npb25TdHJpbmcpO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTsgIC8vL1xuICB9XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gYC52aWV3IHtcbiAgYmFja2dyb3VuZDogcmVkO1xufVxuYDtcblxuICBzdGF0aWMgaW5pdGlhbEV4cHJlc3Npb25TdHJpbmcgPSBcIi8qLy9Ac3BlY2lhbFsyLi4uNF1cIjtcblxuICBzdGF0aWMgaW5pdGlhbE1heGltdW1EZXB0aCA9IDU7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7XG4iXSwibmFtZXMiOlsiY3NzTGV4ZXIiLCJDU1NMZXhlciIsImZyb21Ob3RoaW5nIiwiY3NzUGFyc2VyIiwiQ1NTUGFyc2VyIiwicXVlcnlCeUV4cHJlc3Npb25TdHJpbmciLCJxdWVyeVV0aWxpdGllcyIsIlZpZXciLCJFbGVtZW50Iiwia2V5VXBIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY2xlYXJOb2RlcyIsImNsZWFyUGFyc2VUcmVlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsImFicmlkZ2VkIiwicGFyc2VUcmVlIiwiYXNQYXJzZVRyZWUiLCJleHByZXNzaW9uU3RyaW5nIiwiZ2V0RXhwcmVzc2lvblN0cmluZyIsIm1heGltdW1EZXB0aCIsImdldE1heGltdW1EZXB0aCIsIm5vZGVzIiwic2V0Tm9kZXMiLCJzZXRQYXJzZVRyZWUiLCJjaGlsZEVsZW1lbnRzIiwiQ29sdW1uc0RpdiIsIlNpemVhYmxlRGl2IiwiUm93c0RpdiIsIlN1YkhlYWRpbmciLCJFeHByZXNzaW9uU3RyaW5nSW5wdXQiLCJvbktleVVwIiwiTWF4aW11bURlcHRoSW5wdXQiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiQ29sdW1uRGl2IiwiQ29udGVudFRleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJOb2Rlc1RleHRhcmVhIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJpbml0aWFsQ29udGVudCIsImluaXRpYWxFeHByZXNzaW9uU3RyaW5nIiwiaW5pdGlhbE1heGltdW1EZXB0aCIsInNldENvbnRlbnQiLCJzZXRNYXhpbXVtRGVwdGgiLCJzZXRFeHByZXNzaW9uU3RyaW5nIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF3SEE7OztlQUFBOzs7c0VBdEhzQjtzQkFFRTt1QkFDTzsyQkFDSzs0QkFDZ0M7bUVBRTdDO2lFQUNDOzhEQUNFO2dFQUNFO3FFQUNFO3lFQUNJO2tFQUNKOzs7Ozs7QUFFOUIsTUFBTUEsV0FBV0MsbUJBQVEsQ0FBQ0MsV0FBVyxJQUMvQkMsWUFBWUMsb0JBQVMsQ0FBQ0YsV0FBVztBQUV2QyxNQUFNLEVBQUVHLHVCQUF1QixFQUFFLEdBQUdDLHFCQUFjO0FBRWxELE1BQU1DLGFBQWFDLGFBQU87SUFDeEJDLGVBQWUsQ0FBQ0MsT0FBT0M7UUFDckIsSUFBSSxDQUFDQyxVQUFVO1FBRWYsSUFBSSxDQUFDQyxjQUFjO1FBRW5CLE1BQU1DLFVBQVUsSUFBSSxDQUFDQyxVQUFVLElBQ3pCQyxTQUFTaEIsU0FBU2lCLFFBQVEsQ0FBQ0gsVUFDM0JJLE9BQU9mLFVBQVVnQixLQUFLLENBQUNIO1FBRTdCLElBQUlFLFNBQVMsTUFBTTtZQUNqQjtRQUNGO1FBRUEsTUFBTUUsV0FBVyxNQUNYQyxZQUFZSCxLQUFLSSxXQUFXLENBQUNOLFFBQVFJLFdBQ3JDRyxtQkFBbUIsSUFBSSxDQUFDQyxtQkFBbUIsSUFDM0NDLGVBQWUsSUFBSSxDQUFDQyxlQUFlLElBQ25DQyxRQUFRdEIsd0JBQXdCYSxNQUFNSyxrQkFBa0JFO1FBRTlELElBQUlFLFVBQVUsTUFBTTtZQUNsQixJQUFJLENBQUNDLFFBQVEsQ0FBQ0QsT0FBT1gsU0FBUyxHQUFHO1lBRWpDLElBQUksQ0FBQ2EsWUFBWSxDQUFDUjtRQUNwQjtJQUNGLEVBQUM7SUFFRFMsZ0JBQWdCO1FBQ2QsT0FBUTswQkFFTixvQkFBQ0Msc0JBQVUsc0JBQ1Qsb0JBQUNDLGlCQUFXLHNCQUNWLG9CQUFDQyxtQkFBTyxzQkFDTixvQkFBQ0MsbUJBQVUsUUFBQyw2QkFHWixvQkFBQ0MseUJBQXFCO2dCQUFDQyxTQUFTLElBQUksQ0FBQzNCLFlBQVk7OEJBQ2pELG9CQUFDeUIsbUJBQVUsUUFBQyxnQ0FHWixvQkFBQ0cscUJBQWlCO2dCQUFDRCxTQUFTLElBQUksQ0FBQzNCLFlBQVk7Z0NBR2pELG9CQUFDNkIsK0JBQW1CLHVCQUNwQixvQkFBQ0MscUJBQVMsc0JBQ1Isb0JBQUNOLG1CQUFPLHNCQUNOLG9CQUFDQyxtQkFBVSxRQUFDLDBCQUdaLG9CQUFDTSxnQkFBZTtnQkFBQ0osU0FBUyxJQUFJLENBQUMzQixZQUFZOzhCQUMzQyxvQkFBQ3lCLG1CQUFVLFFBQUMsNkJBR1osb0JBQUNPLGtCQUFpQix1QkFDbEIsb0JBQUNQLG1CQUFVLFFBQUMsd0JBR1osb0JBQUNRLGNBQWE7U0FLckI7SUFDSDtJQUVBQyxhQUFhO1FBQ1gsSUFBSSxDQUFDQyxhQUFhO1FBRWxCLE1BQU0sRUFBRUMsY0FBYyxFQUFFQyx1QkFBdUIsRUFBRUMsbUJBQW1CLEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUNuRmpDLFVBQVUrQixnQkFDVnBCLGVBQWVzQixxQkFDZnhCLG1CQUFtQnVCLHlCQUEwQixHQUFHO1FBRXRELElBQUksQ0FBQ0UsVUFBVSxDQUFDbEM7UUFFaEIsSUFBSSxDQUFDbUMsZUFBZSxDQUFDeEI7UUFFckIsSUFBSSxDQUFDeUIsbUJBQW1CLENBQUMzQjtRQUV6QixJQUFJLENBQUNkLFlBQVksSUFBSyxHQUFHO0lBQzNCO0lBRUEsT0FBT29DLGlCQUFpQixDQUFDOzs7QUFHM0IsQ0FBQyxDQUFDO0lBRUEsT0FBT0MsMEJBQTBCLHNCQUFzQjtJQUV2RCxPQUFPQyxzQkFBc0IsRUFBRTtJQUUvQixPQUFPSSxVQUFVLE1BQU07SUFFdkIsT0FBT0Msb0JBQW9CO1FBQ3pCQyxXQUFXO0lBQ2IsRUFBRTtBQUNKO01BRUEsV0FBZUMsSUFBQUEsc0JBQVMsRUFBQy9DLEtBQUssQ0FBQzs7OztBQUkvQixDQUFDIn0=