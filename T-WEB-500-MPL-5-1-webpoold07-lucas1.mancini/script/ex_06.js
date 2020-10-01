
(function() {

    function Hero(nom, classe, intelli, strength) {
        this.nom = nom;
        this.classe = classe;
        this.intelli = intelli;
        this.strength = strength;
        this.toString = function() {
            document.querySelector("footer > div").innerHTML += "''I am " + this.nom + " the " + this.classe + ", I have " + this.intelli + " intelligence point" + s(this.intelli) + " and " + this.strength + " strength points''<br/>";
        }

    }
    var mage = new Hero("amadeus", "mage", 10, 3);
    var warrior = new Hero("pontius", "warrior", 1, 8);
    mage.toString();
    warrior.toString();

    function s(int) {
        if (int > 1) { return "s"; } else { return ""; }
    }
})();

