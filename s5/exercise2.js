var players = [
	{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
	{firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
	{firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
	{firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
	{firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
	{firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
	{firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
];

/*
Find a player with the name 'Mike'
Get an array of all players with position 'RB'
Get an array of all the players lastNames
Get an array of the full names of all the running backs with more than 5 touchdowns
Get the number of touchdowns scored by Running
*/

//Find a player with the name 'Mike'
console.log(players.find(player => player.firstName == "Mike"));

//Get an array of all players with position 'RB'
let playersWithRB = players.filter(player => player.position == "RB");
console.log(playersWithRB);

//Get an array of all the players lastNames
let playersLastNames = players.map(player => player.lastName);
console.log(playersLastNames);

//Get an array of the full names of all the running backs with more than 5 touchdowns
let rbWithMoreThan5TD = players.filter(player => (player.position == "RB" && player.touchdowns > 5));
console.log(rbWithMoreThan5TD);

let fullNamesOfrbWithMoreThan5TD = rbWithMoreThan5TD.map(rb => (rb.firstName + ' ' + rb.lastName));
console.log(fullNamesOfrbWithMoreThan5TD);

//Get the number of touchdowns scored by Running
