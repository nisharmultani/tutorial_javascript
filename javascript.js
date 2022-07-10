// closer is a function that  bind to gether with here lecsical enverment
// function along with is lexcicas
function a(){
    var x = 10;
    function b() {
        console.log(x)
        function c(){
            console.log(x);
        }
        c();
    }
    b();
}
a();
