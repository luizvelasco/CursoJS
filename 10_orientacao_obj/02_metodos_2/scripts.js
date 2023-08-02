const cachorro = {
    raca: 'SRD',
    uivar: function() {
        console.log("Auuuuu");
    },
    rosnar: function() {
        console.log("grrrr");
    },
    setRaca: function(raca){
        this.raca = raca;
    },
    getRaca: function(){
        return "A raça é " + this.raca;
    }
};

console.log(cachorro.raca);

cachorro.setRaca("Pastor");

console.log(cachorro.raca);

console.log(cachorro.getRaca());