
module.exports = 
{
	countGs: function(str) 
			{
				var conteur =0;
				for (var i=0; i<str.length;i++)
				{
					if ( str[i]=='G' )
					{
						conteur++
					}

				}
				return conteur;
			}
}			
			
