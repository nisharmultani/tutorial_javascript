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




// const x = 100;
// function a(){
//     return x;
// }
//  const v = a();
//  console.log(v)
