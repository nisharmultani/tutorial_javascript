
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




