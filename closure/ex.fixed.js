function ajax(url, data, cb){
	// ...
}
function partial(fn, ...args1){
	return function (...args2){
		return fn(args1.concat(args2));
	}
}
function getCustomer(data, cb){
	return ajax(CUSTOMER_API, data, cb)
}
// getCustomer({id: 42}, renderCustomer)

function getCurrentCustomer(cb){
	getCustomer({id: 12}, cb)
}

getCurrentCustomer(renderCustomer)

// loose currying
function curry(numofinput, fn){
	count=0
	return function x(...arg1){
		count+=arg1.length
		if(count===numofinput){
			return fn(...arg1)
		}
		return function y(...arg2){
			return x(...arg1.concat(arg2))
		}
	}
}

var ajax =curry(
	3,
	function ajax(url, data, cb){}
)

ajax(url,data)(cb)
// or
ajax(url)(data, cb)