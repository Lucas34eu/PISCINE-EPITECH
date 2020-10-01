
module.exports = 
{
	range: function(start,end,step) 
			{
				
				var array = [];

				if (step == null)
				{
					step=1;
				}

				if (step >0)
				{
					for (var i=start; i<=end;i=i+step)
				{
				


					array.push(i);

				}
				
				
				}

				if (step <0)
				{
					for (var i=start; i>=end;i=i+step)
					{
						array.push(i);
					}
				}
				return array;
			}
}			
			
