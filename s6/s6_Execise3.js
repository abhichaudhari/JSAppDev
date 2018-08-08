/* Exercise 3: Mixins
- Create a user profile object that contains properties for
    - name
    - address
    - city
    - state
    - zipcode
    - avatar

- Write a function `getProfileUpdate()` that hypothetically asks the user
  to update some profile properties and returns information about which properties were changed,
  and to what values.(for now, just hardcode the return value)

- Write a function `updateProfile()` that takes a single object of "keys:values" and
  overwrites those keys on the profile object

- Get a profile update and update the profile with it.
- log the new profile */

let userProfile = {
    name: null,
    address: null,
    city: null,
    state: null,
    zipcode: null,
    avatar: null
};

let getProfileUpdate = function () {
    return {name: "Bob", city: "Apex", zipcode: 27523};
};

let updateProfile = function (myHash) {
    Object.assign(userProfile, myHash);
};

updateProfile(getProfileUpdate());

console.log(userProfile);





