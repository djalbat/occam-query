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
const bnf = `

    expression       ::=  path spread? subExpression?   
    
                       |  error+ 
                                 
                       ;
  
    path             ::=  "/" infiniteDescent? selectors ;
    
    subExpression    ::=  path spread? subExpression?;

    infiniteDescent  ::=  "/" ;
    
    selectors        ::=  selector ( "|" selector )* ;

    spread           ::=  unique
    
                       |  "[" 

                          ( 
                            
                            ( startIndex "..." endIndex ) 
                            
                            | 
                            
                            ( startIndex "..." ) 
                            
                            | 
                            
                            ( "..." endIndex )
                             
                            | 
                            
                            index 
                            
                          )  
                          
                          "]" ;

    selector         ::=  ruleName | tokenType ;
                       
    ruleName         ::=  [name] | "*" ;
                       
    tokenType        ::=  "@"<NO_WHITESPACE>( [name] | "*" ) ;
                       
    startIndex       ::=  [number] ;
                       
    endIndex         ::=  [number] ;
                       
    index            ::=  [number] ;
                       
    unique           ::=  "!" ;
                       


    error.           ::=  . ;
    
`;
const _default = bnf;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leHByZXNzaW9uL2JuZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgYm5mID0gYFxuXG4gICAgZXhwcmVzc2lvbiAgICAgICA6Oj0gIHBhdGggc3ByZWFkPyBzdWJFeHByZXNzaW9uPyAgIFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICB8ICBlcnJvcisgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgO1xuICBcbiAgICBwYXRoICAgICAgICAgICAgIDo6PSAgXCIvXCIgaW5maW5pdGVEZXNjZW50PyBzZWxlY3RvcnMgO1xuICAgIFxuICAgIHN1YkV4cHJlc3Npb24gICAgOjo9ICBwYXRoIHNwcmVhZD8gc3ViRXhwcmVzc2lvbj87XG5cbiAgICBpbmZpbml0ZURlc2NlbnQgIDo6PSAgXCIvXCIgO1xuICAgIFxuICAgIHNlbGVjdG9ycyAgICAgICAgOjo9ICBzZWxlY3RvciAoIFwifFwiIHNlbGVjdG9yICkqIDtcblxuICAgIHNwcmVhZCAgICAgICAgICAgOjo9ICB1bmlxdWVcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgfCAgXCJbXCIgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIHN0YXJ0SW5kZXggXCIuLi5cIiBlbmRJbmRleCApIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBzdGFydEluZGV4IFwiLi4uXCIgKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICggXCIuLi5cIiBlbmRJbmRleCApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJdXCIgO1xuXG4gICAgc2VsZWN0b3IgICAgICAgICA6Oj0gIHJ1bGVOYW1lIHwgdG9rZW5UeXBlIDtcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgcnVsZU5hbWUgICAgICAgICA6Oj0gIFtuYW1lXSB8IFwiKlwiIDtcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgdG9rZW5UeXBlICAgICAgICA6Oj0gIFwiQFwiPE5PX1dISVRFU1BBQ0U+KCBbbmFtZV0gfCBcIipcIiApIDtcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgc3RhcnRJbmRleCAgICAgICA6Oj0gIFtudW1iZXJdIDtcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgZW5kSW5kZXggICAgICAgICA6Oj0gIFtudW1iZXJdIDtcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgaW5kZXggICAgICAgICAgICA6Oj0gIFtudW1iZXJdIDtcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgdW5pcXVlICAgICAgICAgICA6Oj0gIFwiIVwiIDtcbiAgICAgICAgICAgICAgICAgICAgICAgXG5cblxuICAgIGVycm9yLiAgICAgICAgICAgOjo9ICAuIDtcbiAgICBcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGJuZjtcbiJdLCJuYW1lcyI6WyJibmYiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQThEQTs7O2VBQUE7OztBQTVEQSxNQUFNQSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwRGIsQ0FBQztNQUVELFdBQWVBIn0=