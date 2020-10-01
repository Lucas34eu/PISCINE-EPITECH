
module.exports = 
{
	fizzBuzz: function(num) 
			{
				var texte_final="";
				
				for (var i=1; i<=num;i++)
				{
					if ( i % 3 == 0)
					{
						
						
						if ( i % 5 == 0 )
					{
						texte_final+= "FizzBuzz"
					}
					else
					{
						texte_final+= "Fizz"
					}

					}

					else if ( i % 5 == 0)
					{
						texte_final+="Buzz";
					}

					
					
					else 
					{
						texte_final+=i
					}

					if (i != num)
					{
						texte_final+= ", ";
					}



				}
				console.log(texte_final);
			}
}			
			
