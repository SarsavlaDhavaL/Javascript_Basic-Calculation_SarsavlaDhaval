// Write a JavaScript program to calculate given formulas
// a² – b² = (a-b)(a+b)
// (a-b)² = a² – 2ab + b²
// (a+b+c)² = a²+b²+c²+2ab+2ac+2bc 
// (a-b-c)² = a²+b²+c²-2ab-2ac+2bc 
// (a-b)³ = a³- 3a²b + 3ab² – b³ 


var a = 3, b = 2, c = 1;
//Formula no1. a² – b² = (a-b)(a+b)..
document.write("<br>(a² – b²) = " + ((a - b) * (a + b)));

//Formula no2. (a-b)² = a² – 2ab + b²..
document.write("<br>(a - b)² = " + ((a * a) - 2 * a * b + (b * b)));

//Formula no.3 (a+b+c)² = a²+b²+c²+2ab+2ac+2bc..
document.write("<br>(a + b + c)² = " + ((a*a)+(b*b)+(c*c)+(2*a*b)+(2*a*c)+(2*b*c)));

//Formula no4.  (a-b-c)² = a²+b²+c²-2ab-2ac+2bc :(1 Mark)
document.write("<br>(a- b - c)² = " + ((a*a)+(b*b)+(c*c)-(2*a*b)-(2*a*c)+(2*b*c)));

//Formula no5.  (a-b)³ = a³- 3a²b + 3ab² – b³ :(1 Mark)
document.write("<br>(a - b)³ = " + ((a*a*a)-(3*(a*a*b))+(3*a*b*b)-(b*b*b)));

