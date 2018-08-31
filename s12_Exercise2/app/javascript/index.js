const $ = require('jquery');
let _ = require('lodash');

let dice = [1, 2, 3, 4, 5, 6];

$("#roll").on('click', () => {
    let result = _.shuffle(dice).pop();
    $("#placeholder").html(result);
});