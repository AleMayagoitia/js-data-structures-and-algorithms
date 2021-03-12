/**
 * Given a list of people with their birth and death years, implement a method to compute the year with most nunmber of people alive.
 * You may assume that all people were born between 19000 and 2000 (inclusive). 
 * If a person was alive during any portion of the year, they should be included in that year's count
 * 
 * For example
 * Person(birth = 1908, death =1909) is included in the counts for both 19908 and 1909
 */

function getYearWithMorePPLAlive(arr) {
    let map = new Map();
    for(let person of arr) {
        if (map.get(person.birth)) {
            map.set(person.birth, map.get(person.birth) + 1)
        } else {
            map.set(person.birth, 1)
        }

        if (person.birth === person.death) {
            continue;
        }
        for(let i = person.birth + 1; i <= person.death; i++) {
            if (map.get(i)) {
                map.set(i, map.get(i) + 1)
            } else {
                map.set(i, 1)
            }
        }

        
    }

    let maxYear;
    let max = 0;
    for(let [key, value] of map.entries()) {
        if (value > max) {
            max = value;
            maxYear = key
        }
    }
    console.log(map)
    return {maxYear, max}
}

function getYearWithMorePPLAlive2(arr, min, max) {
    let births = getSortedYears(arr, true);
    let deaths = getSortedYears(arr, false);

    let birthIndex = 0;
    let deathIndex = 0;
    let currentlyAlive = 0;
    let maxAlive = 0;
    let maxAliveYear = min;

    while(birthIndex < births.length) {
        if (births[birthIndex] <= deaths[deathIndex]) {
            currentlyAlive++;
            if (currentlyAlive > maxAlive) {
                maxAlive = currentlyAlive;
                maxAliveYear = births[birthIndex];
            }
            birthIndex++;
        } else {
            currentlyAlive--;
            deathIndex++;
        }
    }
    return maxAliveYear;
}

let ppl = [
    {
        birth: 1900,
        death: 1910
    },
    {
        birth: 1900,
        death: 2000
    },
    {
        birth: 1995,
        death: 1999
    },
    {
        birth: 1901,
        death: 1995
    },
    {
        birth: 1946,
        death: 1978
    },
    {
        birth: 1900,
        death: 1910
    },
    {
        birth: 1920,
        death: 1980
    },
    {
        birth: 1954,
        death: 1995
    },
    {
        birth: 1998,
        death: 2000
    },
    {
        birth: 1991,
        death: 1995
    }
];

console.log(getYearWithMorePPLAlive(ppl)) // { maxYear: 1954, max: 5 }