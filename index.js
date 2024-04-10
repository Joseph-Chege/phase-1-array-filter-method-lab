// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(drivers, name){

    const searchName = name.toLowerCase();

    const matchingDrivers = drivers.filter(driver => driver.toLowerCase() === searchName);

    return matchingDrivers

}

function fuzzyMatch (drivers, query){
    return drivers.filter(driver => driver.startsWith(query));

}

function matchName(drivers, string){
    return drivers.filter(driver => driver.name === string)

}
