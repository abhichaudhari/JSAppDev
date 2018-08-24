let moment = require('moment');
let requestPromise = require('request-promise');

let logResponse = (resp) => {
    console.log(resp, new moment().format("h:mm:ss a"));
};

setInterval(() => {
    requestPromise('http://jsonplaceholder.typicode.com/posts/1')
        .then(logResponse)
}, 3000)