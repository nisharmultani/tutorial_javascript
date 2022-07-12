// closer is a function that  bind to gether with here lecsical enverment
// function along with is lexcicas

function a() {
  var x = 10;
  function b() {
    console.log(`this is  x Value ${x}`);
  }
  b();
}
a();
//  prototype


//  let arr = ['nsihar','multani']
// info = {
//   name: 'nishar',
//   lastName: 'multani'
// }
// function a(){
//   //

// }




// const x = 100;
// function a(){
//     return x;
// }
//  const v = a();
//  console.log(v)

const arr = ['nishar' , 'multani','gujarat','india']
// array built in function  
// 1) array value 
// console.log(arr.values())
// const values = arr.values()
for (let index of arr.values() ){
  console.log(index)
}



