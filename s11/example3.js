let dataAccess = require('./dataAccess');

setInterval(() => {
    dataAccess.getPost(1)
        .then(dataAccess.logResponse)
}, 3000)