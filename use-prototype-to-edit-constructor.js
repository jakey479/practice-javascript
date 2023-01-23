function Wine(dominantGrape, producer, region, vintage, supportingGrapes, acidity, sweetness, body, tannin, oldWorldNewWorld, price) {
    this.dominantGrape = dominantGrape;
    this.producer = producer;
    this.region = region;
    this.vintage = vintage;
    this.supportingGrapes = supportingGrapes;
    this.aciditiy = acidity;
    this.sweetness = sweetness;
    this.body = body;
    this.tannin = tannin;
    this.oldWorldNewWorld = oldWorldNewWorld;
    this. price = price;
}

Wine.prototype.confirmEntry = function () {
    alert(this.dominantGrape + "/ " + this.producer + "/ " + this.region + "/ " + this.vintage + "/ " + this.supportingGrapes);
}

const sangioveseTenutaDiCapezzana = new Wine("Sangoiovese", "Tenuta di Capezzana", "Tuscany", 2019, "Cabernet Sauvignon, Caniolo", "medium acid", "dry", "medium body", "medium tannin", "old world", 85)

sangioveseTenutaDiCapezzana.confirmEntry();

const sangioveseTenutaDiCapezzani = new Wine("Sangoiovese", "Tenuta di Capezzani", "Lushcany", 2019, "Cabernet Sauvignon, Caniolo", "medium acid", "dry", "medium body", "medium tannin", "old world", 85)

sangioveseTenutaDiCapezzani.confirmEntry();

// a constructor function -> adding a method function called confirmEntry to the constructor function via the Wine prototype-> instantiating two new objects that have access to the newly created confirmEntry method function and calling them to be certain 