// ouput 1

var a="        hlo";
var a1="ashok      ";
var concat=a.trimStart().concat(a1.trimEnd()).toUpperCase();
console.log(concat);

// output 2

var a="HelLoAshOkGoUd";
var middlepart=a.slice(5,10).toLowerCase()
var lastindex=middlepart.length-1;
console.log(middlepart);
console.log(lastindex);

//  output 3

var a="ashok";
var concat=a.concat("m").toUpperCase();
var lastsecondchar=concat.at(-2)
console.log(concat);
console.log(lastsecondchar);

// output 4

var a="ashok";
var a1="goud";
var concat=a.slice(0,3).concat(a1.slice(0,3));
var result=concat[0].toUpperCase()+concat.slice(1,length-1)+concat[concat.length-1].toUpperCase()
console.log(concat);
console.log(result);

// output 5

var a="       ashok       ";
var a1="goud"
var trim=a.trim();
var fstandlstupper=trim[0].toUpperCase()+trim.slice(1,4)+trim[trim.length-1].toUpperCase()
var result=trim.slice(0,3).concat(a1)
console.log(fstandlstupper);
console.log(result);

// output 6

var a="hello there , how are you" ;
var result=a.indexOf("are")
console.log(result);





















