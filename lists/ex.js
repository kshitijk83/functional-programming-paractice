"use strict";

// Put your code here! :)
function constant(v){
    return function(){
        return v
    }
}
function add(x,y){
    return x+y;
}
// console.log(add(fn1(), fn2()))
function add2(fn1, fn2){
    return add(fn1(), fn2())
}
// loop
// function addn(fnArr){
//     while(fnArr.length>2){
//         var [fn1, fn2, ...rest]=fnArr
//         fnArr=[
//             function(){
//                 return add2(fn1(), fn2())
//             },
//             ...rest
//         ]
//     }
//     return add2(fnArr[0], fnArr[1])
// }
// recursion
// function addn(fnArr){
//     if(fnArr.length===2){return add2(fnArr[0],fnArr[1])}
//     var [fn1, fn2, ...rest] = fnArr
//     return addn([
//         function(){
//             return add2(fn1(), fn2())
//         }
//         ,...rest
//     ])
// }
// reduce
function addn(fnArr){
    fnArr.reduce(function(acc, fn){
        return function(){
            add2(acc(), fn())
        }
    }, constant(0))
}

var vals = [7,4,8,0,10,7,3,2,5,9,12,6,4,1,7,8];

addn(
    vals.reduce(function(acc, cur){
        if(!acc.includes(cur)){
            return [...acc, cur]
        }
        return acc
    },[])
    .filter(function(v){
        return v%2===0
    })
    .map(constant)
)