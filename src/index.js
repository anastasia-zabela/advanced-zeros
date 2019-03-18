module.exports = function getZerosCount(number, base) {
    let simpleFactors = getSimpleFactors (base);
	let zerosCount = getArrayZeros(simpleFactors);

	function getSimpleFactors (base) {
        let factors = {};
        let arrayFactors = [];
		let simple = 2;
		let countPower = 0;
		while (simple<=base) {
			if (base%simple === 0) {
		    	if (factors[simple] === undefined) {
			    	factors[simple] = 0;
			    }
			    base /= simple;
	    		countPower++;
				if (base%simple !== 0) {
					factors[simple] = countPower;
				}	
			} else {
				simple++;
				countPower = 0;
			}
		}
		for (key in factors) {
            arrayFactors.push(+key);
            arrayFactors.push(factors[key]);
        }
        return arrayFactors;
	}

	function getArrayZeros (simpleFactors) {
		let arrayZeros = [];
		for (let i=0; i<simpleFactors.length; i++) {
			let zeros = 0;
	    	let copyNumber = number;
			while (copyNumber > 0) {
    			copyNumber /= simpleFactors[i];
	    		copyNumber = Math.floor(copyNumber);
		    	zeros += copyNumber;
			}
			zeros = Math.floor(zeros/simpleFactors[i+1]);
			arrayZeros.push(zeros);
			i++;
		}
		arrayZeros.sort((a, b) => {return a-b});
		arrayZeros = arrayZeros.slice(0, 1);
		return +arrayZeros.join('');
	}
			
	return zerosCount;
}