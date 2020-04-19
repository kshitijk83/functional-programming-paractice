// High order funcitons take a fn as a argument
// and change it's shape and return another function

function fn(){

}

function binary(fn){
	return function(arg){
		fn(arg)
	}
}

function binary(fn){
	return function (arg1, arg2){
		fn(arg1, arg2)
	}
}

function spreadArg(fn){
	return function (args){
		return fn(...args)
	}
}

function unSpread(fn){
	return function (...args){
		fn(args)
	}
}

function flip2(fn){
	return function (arg1, arg2, ...args){
		fn(arg2, arg1, ...args)
	}
}

function reverse(fn){
	return function (...args){
		fn(...args.reverse())
	}
}

var g = binary(fn)
var h = unary(fn)
var a = spreadArg(fn)
var b = unSpread(fn)
var c = flip2(fn)
var d = reverse(fn)

g(1,2,3,4) // consider only 1 and 2
h(1,2,3,4) // consider only 1
a([1,2,3,4]) // fn(1,2,3,4)
b(1,2,3,4) // fn([1,2,3,4])
c(1,2,3,4) // fn(2,1,3,4)
d(1,2,3,4) // fn(4,3,2,1)