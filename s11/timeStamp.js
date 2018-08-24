/* Create a `TimeStamp` module

Export an object with a function `getTime()` that returns a timestamp string in the format `h:mm:ss a`
 */

let moment = require('moment');

let getTime = () => {
    return new moment().format("h:mm:ss a");
};


module.exports = {
    getTime: getTime
}




