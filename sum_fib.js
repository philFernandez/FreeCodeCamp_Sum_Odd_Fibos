/*
 Sums all odd fibonacci numbers less than or equal to 
 number taken by sumFibs function. Returns that sum
*/

function sumFibs(maxFibNum) {
	var fibSequence = [1, 1];
	var sumOddFibs = 0;
	
	var i = 0;
	while (fibSequence[fibSequence.length-1] < maxFibNum) {
		fibSequence[i+2] = (fibSequence[i] + fibSequence[i+1]);
		if (fibSequence[i+2] % 2 !== 0 && fibSequence[i+2] <= maxFibNum) {
			sumOddFibs += fibSequence[i+2];
		}
		i++;
	}
	console.log(fibSequence);
	return sumOddFibs+2;

}

console.log(sumFibs(1000))