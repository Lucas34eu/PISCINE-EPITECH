
module.exports = {
	arraysAreEqual: function(arr1,arr2) 
			{

			var result= true;
				if (arr1.length==arr2.length)
					{
						
						for (var i=0;i< arr1.length; i++)
							{
								if (arr1[i]!=arr2[i])
									{
										result= false;
										
									} 
							}
						
			
		
					}
				else
				{
				result= true;
				
				
				}
				return result ;
				
				
			}
		}			
			
