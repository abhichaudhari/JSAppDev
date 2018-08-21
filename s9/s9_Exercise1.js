/* jQuery basics exercise
Use this HTML

Using jQuery:

Load jQuery (using a CDN)
Get the top-level header element
Get all the section elements
Get the section element with class="current"
Get the section that comes after the current section
Get the h2 node from the section before the 'current' section
Get the div that contains the section that has an h2 with a class of 'highlight'
Get all the sections that contain an H2 and store them in an Array */

//Get the top-level header element
let header = $('header');

//Get all the section elements
let section = $('section');
section.find('*');

//Get the section element with class="current"
let currentSection = section.find('.current');

//Get the section that comes after the current section
let afterCurentSection = currentSection.next();

//Get the h2 node from the section before the 'current' section
let h2 = $(currentSection[0].prev()).find('h2');

//Get the div that contains the section that has an h2 with a class of 'highlight'
let div = $(section.h2.highlight).parent().parent();

//Get all the sections that contain an H2 and store them in an Array
let array = Array.from($("section").find("h2"));