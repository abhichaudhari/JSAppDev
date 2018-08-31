// /app/javascript/another.js

/* function sayHello() {
    var header = document.querySelector("#greeting");
    var hello = ("<h1> hello world </h1>");
    header.innerHTML = hello;
} */

//module.exports = sayHello();

var $ = require('jquery');

module.exports = $("#reveal").on('click', function(){
  $("#greeting").html("<h1> hello world!</h1>");
  $(this).hide();
});