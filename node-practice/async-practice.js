
setTimeout(function() {
  console.log("Robert");
}, 5000);



greet(); // greet invoked immediately

// async!
setTimeout(greet, 5000); // greet will be invoked after 5 seconds

function greet() {
  console.log('Hi Robert');
}
