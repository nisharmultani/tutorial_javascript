
const arr = ['nishar' , 'multani','gujarat','india']
// array built in function  

// 1) array value 
// console.log(arr.values())
// const values = arr.values()
for (let index of arr.values() ){
  console.log(index)
}
//  2)unshift
// The arr.unshift() method is used to add one or more elements to the beginning of the given array
// we add new Strign in array in bigining
arr.unshift('firstadd','second add')
console.log(arr)
for ( let index of arr.values()){
  console.log(index)
}
// 3) toString
// array will be display in a form of String
console.log(arr.toString())

// 4)array toLocalString
// i dont get any proper difference between toString and toLocaleString
console.log(arr.toLocaleString())
console.log(arr)
 
// 5)splice
// The arr.splice() method is an inbuilt method in JavaScript which is used to modify the contents of an array by removing the existing elements and/or by adding new elements.
// remove from array
// Array.splice( index, remove_count, item_list )
arr.splice(2,'multani')
console.log(arr)

