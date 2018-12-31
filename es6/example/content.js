'use strict';

const exampleContent = `

Abbreviations z for zero,s for successor,Nat for NaturalNumber

Metavariables R,S,T(Nat)

Variables k,n

Contexts ρ,σ(Nat),τ(Nat)

Rule (Induction)
  Premises
    ρ ⊢ R::P(z)
    σ(k) ⊢ S(k)::P(k)=>P(s(k))
  Conclusion
    τ(n) ⊢ R(n)::P(n)

Metatheorem (T(z))
  P(z)
Proof
  P(z) from R

Metatheorem (T(s(k)))
  P(s(k))
Proof
  P(k)=>P(s(k)) from S(k)
  P(k) from T(k)
Therefore
  P(s(k)) by ModusPonens
  
`;

module.exports = exampleContent;
