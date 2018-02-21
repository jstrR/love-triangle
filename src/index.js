/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
 	 let counter = 0;
  	for (let i = 0; i<preferences.length; i++) {
	    let k = preferences[i];
	    let m = preferences[k - 1];
	    let n = preferences[m - 1];
	    if (n == i + 1){ 
	    	counter++;
	    }
  	}
 	 return Math.floor(counter/3);
};

