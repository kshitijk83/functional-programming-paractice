function trampoline(fn){
	return function trampolined(...args){
		result=fn(...args)
		while(typeof result==="function"){
			result=result()
		}
		return result
	}
}

function isVowel(char){
	return ["a","e","i","o","u"].includes(char)
}

function countVowel(count, str){
	count+=isVowel(str[0])?1:0
	if(str.length<=1) return count
	return function (){
		return countVowel(count,str.slice(1))
	}
}

countVowel=trampoline(countVowel)
countVowel("aseedw");