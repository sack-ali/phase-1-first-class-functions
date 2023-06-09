function receivesAFunction(callback) {
    // Call the callback function
    callback();
  }
  
  function returnsANamedFunction() {
    // Define and return a named function
    function namedFunction() {
      console.log("This is a named function");
    }
    return namedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    // Return an anonymous function directly
    return function() {
      console.log("This is an anonymous function");
    };
  }
  