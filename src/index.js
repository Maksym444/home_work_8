
const array = [1, 3, 5, 'tut', 9, 'tam', 13];

function map (arr, callback) {
  let results = [];
 for (i = 0; i < arr.length; i++) {
   results.push(callback(arr[i]));
 }
 return results;
};

let addNumber = map(array, function(item) {
 return item + 22;
});

console.log (addNumber)




var filter = function(arr, callback) {
 let results = [];
 for (i = 0; i < arr.length; i++) {
   if (callback(arr[i])) {
     results.push(arr[i]);
   }
 }
 return results;
};

let odd = [1, 20, 4, 2, 5, 3, 24, 6, 45].filter(function(num) {
 return num %2 !=0;
});

console.log(odd);  


const notification = [
{
 date: '1/07/2019',
 msg: 'Some message here 1'
},
{
 date: '2/07/2019',
 msg: 'Some message here 2'
},
{
 date: '2/07/2019',
 msg: 'Some message here 2.1'
},
{
 date: '3/07/2019',
 msg: 'Some message here 3' 
},
{
 date: '3/07/2019',
 msg: 'Some message here 3.1'
},
{
 date: '3/07/2019',
 msg: 'Some message here 3.2'
},
{
 date: '4/07/2019',
 msg: 'Some message here 4'
}
];

function sortArrayBy(arr) {  
   return arr.reduce((result, currentValue) => {
     (result[currentValue.date] = result[currentValue.date] || []).push(currentValue.msg);
     return result; 
   }, {})
 }
console.log (sortArrayBy(notification));
