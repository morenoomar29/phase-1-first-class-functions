

function receivesAFunction(cbFunction) {
    cbFunction();
}



function returnsANamedFunction() {
    return receivesAFunction
}


function returnsAnAnonymousFunction() {
    return function() {
        ''
    }
}

































