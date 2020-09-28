function do_something(arg1, arg2) {
  console.log(arguments);
}

do_something(1, 2);


function func1(a, b, c) {
  console.log(arguments[0]);
  // expected output: 1

  console.log(arguments[1]);
  // expected output: 2

  console.log(arguments[2]);
  // expected output: 3
}

func1(1, 2, 3);



// Function Expression
var canada = () => console.log('cold')
// Function Declaration
function india() {
  console.log('warm')
}

// Function Invocation, Calling, Execution
canada()
india()

function india() {
  console.log(arguments)
  console.log('warm')
}

india()

//arguments
function marry(person1, person2) {
  console.log(arguments)
  console.log(Array.from(arguments))
  return `${person1} is now married to ${person2}`
}

function marry2(...args) {
  console.log(args)
  console.log(Array.from(arguments))
  return `${person1} is now married to ${person2}`
}

marry('Tim', 'Tina')