
    document.addEventListener("keydown",function(event) {
        
        if (document.querySelector("footer > div").textContent.length < 42)
        {
            document.querySelector("footer > div").textContent+=event.key;
        }
        else
        {   
            while(document.querySelector("footer > div").textContent.length > 42)
            {
                document.querySelector("footer > div").textContent=document.querySelector("footer > div").textContent.substring(1);
            }
            document.querySelector("footer > div").textContent+=event.key;
        }

    
        

        
     }); 