function mod(y){
	return function forX(x){
		return x%y
	}
}

function eq(y){
	return function forX(x){
		return y===x
	}
}

function compose(fn2, fn1){
	return function composed(...args){
		return fn2(fn1(...args))
	}
}

var mod2 = mod(2);
var eq1 = eq(1);
var isOdd=compose(eq1, mod2)
console.log(isOdd(3))