module.exports = {
    objectsDeeplyEqual: function(cmp1, cmp2) {

        if (cmp1 === cmp2) {
            return true;
        }


		if (cmp1 == null || 
				typeof cmp1 != "object" 
					|| cmp2 == null 
						|| typeof cmp2 != "object") 
						{
            				return false;
        				}

        var nombrepropcmp1 = 0;
        var nombrepropcmp2 = 0;

        for (var prop in cmp1) {
            for (var prop in cmp1) {
                nombrepropcmp1++;
            }

            for (var prop in cmp2) {
                nombrepropcmp2++;

                if (!(prop in cmp1) || !module.exports.objectsDeeplyEqual(cmp1[prop], cmp2[prop])) {
                    return false;
                }
            }

            return nombrepropcmp1 === nombrepropcmp2;
        }
    }
}
