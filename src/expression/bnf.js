"use strict";

const bnf = `

    expression       ::=  path subExpression? spread?  
    
                       |  error+ 
                                 
                       ;
  
    path             ::=  "/" infiniteDescent? selectors ;
    
    subExpression    ::=  path subExpression?;

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
                            
                          )  
                          
                          "]" ;

    selector         ::=  ruleName | tokenType ;
                       
    ruleName         ::=  [name] | "*" ;
                       
    tokenType        ::=  "@"<NO_WHITESPACE>( [name] | "*" ) ;
                       
    startIndex       ::=  [number] ;
                       
    endIndex         ::=  [number] ;
                       
    unique           ::=  "!" ;
                       


    error.           ::=  . ;
    
`;

export default bnf;
