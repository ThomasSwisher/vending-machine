// Controllers are registered to use in the html.
// Because of draw function most controllers will be registered.

import PurchaseController from "./Controllers/purchaseController.js";


// import ValuesController from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  purchaseController = new PurchaseController
}

window["app"] = new App();
