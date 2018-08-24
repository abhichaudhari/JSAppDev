/* Create a `DataAccess` module

Export an object with a function `getPost(postId)` */

let requestPromise = require('request-promise');
let timeStamp = require('./timeStamp');


let logResponse = (resp) => {
    return new Promise((resolve, reject) => {
        console.log(resp, timeStamp.getTime());
        resolve();
    })
};

let getPost = (postId) => {
    return requestPromise(`http://jsonplaceholder.typicode.com/posts/${postId}`);
}

module.exports = {
    logResponse: logResponse,
    getPost: getPost
}