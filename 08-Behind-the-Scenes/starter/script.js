'use strict';


console.log(this);

const calcAge = function(birthYear) {
    console.log(2037-birthYear);
    console.log(this);
};
  
calcAge(1991);

const calcAgeArrow = birthYear=> {
    console.log(2037-birthYear);
    console.log(this);
};
  
calcAgeArrow(1991);

const duncan = {
    year: 1991,
    calcAge: function(){
        console.log(this);
    },
};
duncan.calcAge();
