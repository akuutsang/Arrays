const inventors = [
    {first: "Albert", last: "Einstein", year: 1879, passed:1955},
    {first: "Isaac", last: "Newton", year: 1643, passed:1727},
    {first: "Galileo", last: "Galilei", year: 1564, passed:1642},
    {first: "Marie", last: "Curie", year: 1867, passed:1934},
    {first: "Johannes", last: "Kepler", year: 1571, passed:1630},
    {first: "Nicolaus", last: "Copernicus", year: 1473, passed:1543},
    {first: "Max", last: "Planck", year: 1858, passed:1947},
];

const people = [ "Beck, Glenn", "Becker, Carl", "Beckett, Samuel", "Beddoes, Mick",
"Beecher, Henry", "Beethoven, Ludwig", "Begin, Menachem", "Belloc, Hilaire", 
"Bellow, Saul", "Benchley, Robert", "Beneson, Peter", "Ben-Gurion, David", 
"Benjamin, Walter", "Benn, Tony", "Bennington, Chester", "Benson, Leana",  "Bent,Silas",
"Bentson, Lloyd", "Berger, Ric", "Bergman, Ingmar", "Berio, Luciano","Berle, Milton",
"Berlin, Irving", "Bernie, Eric", "Beinhard, Sandra", "Berra, Yogi", 
"Berry, Halle", "Berry, Wendell", "Bethea, Erin", "Bevan, Anuerin", "Bevel, Ken",
"Biden, Joseph", "Bierce, Ambrose", "Biko, Steve", "Billings, Josh", "Blondo, Frank",
"Birell, Augustine", "Black Elk", "Blair, Robert", "Blair, Tony,", "Blake, William"]


// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
// const fifteen = inventors.filter(inventor =>{
//     if(inventor.year >= 1500 && inventor.year < 1600){
//     return true;  //keep it
// }
// })
// console.log(fifteen)
const fifteen = inventors.filter((inventor => inventor.year >= 1500 && inventor.year < 1600))
console.table(fifteen)

// Array.prototype.map()
// 2. Give us an array of the inventory first and last names

const fullnames = inventors.map(inventor => `${inventor.first}  ${inventor.last}`);
console.log(fullnames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdays, oldest to youngest

// const ordered = inventors.sort(function(a,b){
//     if (a.year > b.year){
//         return 1;   
//     } else{
//         return -1;
//     }
// })
// console.table(ordered)

// OR USE A TERNARARY OPERATOR 

const ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1)
console.table(ordered);


// Array.prototype.reduce()
// 4. How many years did all the inventors live?

// 5. Sort the inventors by years lived

// 6. Creat a list of Boulevards in Paris that contains "de" anywhere in the name 
// https://en.wikipedia.org/wiki/category:Boulevards_in_paris


