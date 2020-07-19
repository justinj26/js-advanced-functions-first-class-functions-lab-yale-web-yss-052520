// Code your solution in this file!
const returnFirstTwoDrivers = function(driv_array) {
    return driv_array.slice(0, 2)
}

const returnLastTwoDrivers = function(driv_array) {
    return driv_array.slice(-2)
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(a) {
    if (a == 4) {
        return function(fare) {
            return fare * 4
        }
    } else {
        return function(fare) {
            return fare * a
        }
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(driv_array, driv_function) {
    return driv_function(driv_array)
}

