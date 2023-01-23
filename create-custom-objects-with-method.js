function Wine(dominantGrape, producer, region, vintage, supportingGrapes, acidity, sweetness, body, tannin, oldWorldNewWorld, price) {
    this.dominantGrape = dominantGrape;
    this.producer = producer;
    this.region = region;
    this.vintage = vintage;
    this.supportingGrapes = supportingGrapes;
    this.acidity = acidity;
    this.sweetness = sweetness;
    this.body = body;
    this.tannin = tannin;
    this.oldWorldNewWorld = oldWorldNewWorld;
    this. price = price;
    this.confirmEntry = function () {
        alert(dominantGrape + "/ " + producer + "/ " + region + "/ " + vintage + "/ " + supportingGrapes);
    }
}

const sangioveseTenutaDiCapezzana = new Wine("Sangoiovese", "Tenuta di Capezzana", "Tuscany", 2019, "Cabernet Sauvignon, Caniolo", "medium acid", "dry", "medium body", "medium tannin", "old world", 85);

sangioveseTenutaDiCapezzana.confirmEntry();

// function that saves arguments as variables and creates a new Wine object that can be saved as a new variable each time. This function contains a method which can be accesed to display the first half of the arguments for the instantiated object

