// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
  let names = array.slice(0,2);
  return names;
}

const returnLastTwoDrivers = function(array) {
  let names = array.slice(array.length-2);
  return names;
}

const selectingDrivers = [returnFirstTwoDrivers(), returnLastTwoDrivers()]
