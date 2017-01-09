// add space after keywords
// test standard setup
var condition = true;
if (condition) { console.log('whee'); }   // ✓ ok
if(condition) { console.log('whee'); }    // ✗ not ok


// test subsection of custom rules

// empty lines
// should give error, although may not show up in window itself (I get a lightbulb next to them and the error is in the eslint warning window)
function emptylines () {
  var value = 'hello world';



  console.log(value);
}
emptylines();

// var declarations
// need to be in functions, or else eslint will throw error saying "combine var declarations"
// ✗ not ok
function shouldthrowerror () {
  var silent = true;
  var verbose = true;
  console.log(silent, verbose);
}
shouldthrowerror();
// ✓ ok
function shouldnotthrowerror () {
  var silent = true,
    verbose = true;
  console.log(silent, verbose);
}
shouldnotthrowerror();
