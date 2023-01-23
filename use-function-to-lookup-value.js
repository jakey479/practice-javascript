const wineCollection = [];

function Wine(dominantGrape, producer, region, vintage, supportingGrapes, acidity, sweetness, body, tannin, oldWorldNewWorld, price) {
    this.dominantGrape = dominantGrape,
    this.producer = producer,
    this.region = region,
    this.vintage = vintage,
    this.supportingGrapes = supportingGrapes,
    this.acidity = acidity,
    this.sweetness = sweetness,
    this.body = body,
    this.tannin = tannin,
    this.oldWorldNewWorld = oldWorldNewWorld,
    this. price = price
    wineCollection.push(this);
    }

const sangioveseTenutaDiCapezzana = new Wine("Sangiovese", "Tenuta di Capezzana", "Tuscany", 2019, "Cabernet Sauvignon, Caniolo", "medium acid", "dry", "medium body", "medium tannin", "old world", 85);

const sangioveseTenutaDiCapezzani = new Wine("Sangoiovese", "Tenuta di Capezzani", "Lushcany", 2019, "Cabernet Sauvignon, Caniolo", "medium plus acid", "dry", "medium body", "medium tannin", "old world", 85)

console.log(wineCollection)

const medAcidWines = wineCollection.find(({ acidity }) => acidity === "medium acid");

console.log(medAcidWines);

// first function is a constructor function that creates a new Wine object when called. The new object that is created with the constructor function is pushed to a wineCollection array. A variable is created which stores that value of all objects in the wineCollection array that have