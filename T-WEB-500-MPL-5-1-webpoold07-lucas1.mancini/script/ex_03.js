

document.querySelector("footer > div").addEventListener("click",function() {
    prenom();
    function prenom ()
    {
        var nom = "";
        while (nom == "" || nom == null)
        {
            var nom = prompt("What's your name ?","");
        }
    

        if (confirm("are you sure "+ nom +" is your name ?" ))
        {
            alert("Hello " + nom);
            document.querySelector("footer > div").textContent="Hello " + nom;
        }
        else
        {
            prenom();
        }
    }

})