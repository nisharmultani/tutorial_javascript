// what is use of push methods

// meaning of push
// how to use push metthods

// const animals = ['pigs', 'goats', 'sheep'];
// const lastName = ['b', 'f', 't'];

// const jk = animals.push(...lastName)
// console.log(jk)
// console.log(animals)


const animals= ["a" ,"b", "c"]
const lastName =["manoj","rakes", "lila"]

const result = animals.push(...lastName)

console.log("result",result)
console.log(animals)



// console.log("first",animals)

// const length = animals.push("d","e","g",["k","l"],{name:"k",lastName:"l"})
// console.log(length)
// console.log("new",animals)







// const count = animals.push('cows','lion',"mango",["jira","sira","lila"],{name:"nsiahr", lastName:"multani"});
// console.log(count)


// console.log(count);
// Expected output: 4
// console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

// animals.push('chickens', 'cats', 'dogs');
// console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]




























// const arr = ['nishar' , 'multani','gujarat','india']
// const arr = [2,3,4,5,6,7,]
// const arr2 =[{name:'nisa',addres:'suhari', agr:50},
// {name:'nishra',addres:'buhari', agr:40},
// {name:'sra',addres:'hari', agr:40},
// {name:'hra',addres:'buri', agr:30},
// {name:'nira',addres:'bri', agr:60},]

// map function


// const result  = arr.map((x) => x >2 )
//  console.log(result)

// const filter  = arr.filter((x) => x%2)
// console.log(filter)

// function sum (arr){
//   let s = 0 ;
//   const arrlength =  arr.length
//  for (let i = 0; i < arrlength; i++) {
//     s = s + arr[i];
//   }
//   return s;
// }

// console.log(sum(arr))

// const x  = arr.reduce(function(start , current ){
//  start = start +current
//  return start
// },0)
// console.log(x)

// const result = arr2.map((x)=>{
//    return x.addres
// })
// console.log(result)

// const con = arr2.filter((x)=>{
//   return x.agr>30 x.name
//   }
// })
// console.log(con)
// array built in function  

// 1) array value 
// console.log(arr.values())
// const values = arr.values()
// for (let index of arr.values() ){
//   console.log(index)
// }
//  2)unshift
// The arr.unshift() method is used to add one or more elements to the beginning of the given array
// we add new Strign in array in bigining
// arr.unshift('firstadd','second add')
// console.log(arr)
// for ( let index of arr.values()){
//   console.log(index)
// }
// 3) toString
// array will be display in a form of String
// console.log(arr.toString())

// 4)array toLocalString
// i dont get any proper difference between toString and toLocaleString
// console.log(arr.toLocaleString())
// console.log(arr)
 
// 5)splice
// The arr.splice() method is an inbuilt method in JavaScript which is used to modify the contents of an array by removing the existing elements and/or by adding new elements.
// remove from array
// Array.splice( index, remove_count, item_list )
// arr.splice(2,'multani')
// console.log(arr)

// 6) array sort
// sort is use to array in proper formate like acedingorder and many more 
// by default is will arrange in asseding order
// console.log(arr.sort())
// const person = {
//   value : 53,
//   fullName: function(address , pincode) {
//     return this.firstName + this.lastName +address + this.value + pincode
//   }
// }
// const persion1 = {
//   firstName:'nishar',
//   lastName : 'multani'
// }
// apply method tack argument in form of array
// const a = person.fullName.apply(persion1,['buhari','93489759'])
// console.log(a)
//call methods tack argument in a Strig form 
// const b = person.fullName.call(persion1,'valod','983450')
// console.log(b)

// const a = this;
// console.log(a)

// get api
// let count = 0 ;
// const getData = () => { 
// }
// console.log('call api', count++)

// binary search 
// const arr2 = [2,4,6,8,12,18];
// const size = arr2.length
// const key  = 2;

// function findvalue(arr2, size ,key){
//  let start = 0;
//  let end = size-1;
//  let mid = Math.floor((start + end)/2) ;

//  while(start <= end){
//    if(arr2[mid] == key){
//      return `this is ${key} the key is ${mid}`
//   }
//   // for rightside
//   if(key > arr2[mid]){
//     start = mid + 1;
//   }
//   else{
//     end = mid-1;
//   }
//   mid = Math.floor((start + end)/2);
// }
//  return 'no value found';
  
// }

//  const result = findvalue(arr2,size,key)
//  console.log(result)

// first and last occuurance of array


