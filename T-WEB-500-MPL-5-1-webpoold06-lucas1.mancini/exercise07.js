module.exports = {
    arrayFiltering: function(array, test) 
    {
        var text = [];
           for (var i =0; i <array.length;i++)
           {
            if ( test(array[i]) )
            {
                text.push(array[i]);
            }
           }
           return text;
    }

        
    
}
