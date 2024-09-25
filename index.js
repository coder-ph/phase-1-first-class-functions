function receivesAFunction(spy){
    spy();
}
receivesAFunction(function(){return 'before all'})

function returnsANamedFunction(){
    function Oname(){

    };


return Oname
}
function returnsAnAnonymousFunction(){
    return function(){
        console.log('anonymous function')
    };
} 
