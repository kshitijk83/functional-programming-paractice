"use strict";

function lotteryNum() {
	return (Math.round(Math.random() * 100) % 58) + 1;
}

function pickNumber(num, nums) {
	var newArr = [...nums ]
	if(!newArr.includes(num)){
		return [num, ...newArr].sort((a,b)=>a-b)
	}
	return nums
}

var luckyLotteryNumbers = [];

while (luckyLotteryNumbers.length < 6) {
	luckyLotteryNumbers=pickNumber(lotteryNum(), Object.freeze(luckyLotteryNumbers));
}

console.log(luckyLotteryNumbers);
