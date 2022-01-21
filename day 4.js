// How to compare two JSON have the same properties without orde 😍🤓🤩🤩🤩 it was happiest thing to create a solution by our own!

let obj1 = {
    name: "santhosh",
    age: 21,
    gender: "male"
}
let obj2 = {
    age: 21,
    name: "santhosh",
    gender: "male"
}

var objct1 = { name: "Person 1", age:5 };
var objct2 = { age:5, name: "Person 1" };



function compareTheObject(x, y) {
    var val1 = [], val2 = [];
    for ([key, val] of Object.entries(x)) {
        val1.push(key, val)
    }
    for ([key, val] of Object.entries(y)) {
        val2.push(key, val)
    }

    let result =
        val1.length === val2.length &&
        val1.every(function (element) {
            return val2.includes(element);
        });
    console.log(result);
}

compareTheObject(obj1, obj2);
compareTheObject(objct1,objct2);





// display all the country flags in console


const getcountries = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3.1/all")
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
      const countries = xhr.response;

      const flags = countries.map((country)=>country.flags.png);
      console.table(flags);


      // Use the same rest countries and print all countries name, region, sub region and population

    for(country of countries){
        console.log(`name : ${country.name.common} , region : ${country.region} , subregion : ${country.subregion}, population : ${country.population}`);
    }
  };

};
getcountries();





