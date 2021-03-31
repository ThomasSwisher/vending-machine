import { ProxyState } from "../AppState.js";
// import { valuesService } from "../Services/ValuesService.js";
import { purchaseService } from "../Services/PurchaseService.js";

function _draw() {
    //let purchase = ProxyState.enemy
    // NOTE whenever a event needs to trigger a controller action
    // the whole path of app.controllerName.methodName must be provided
    //     document.getElementById('enemy').innerHTML = `
    //     <div class="card">
    //       <img class="card-img-top" src="${enemy.imgUrl}" alt="" style="width: 50vw">
    //       <div class="card-body">
    //         <h4 class="card-title">${enemy.name}</h4>
    //         <p class="card-text">Health: ${enemy.health}</p>
    //       </div>
    //     </div>
    //   `
    document.getElementById('credits').innerText = 0
}


export default class PurchaseController {
    constructor() {
        // NOTE at the start of creating a controller register all the listeners for that controller
        // NOTE ProxyState.on takes the name of the property to watch, and method to run when it changes
        // this method should not be envoked only passed
        //ProxyState.on('buyNow', _draw)
        // then call any immediate function calls
        _draw()
    }
    buyNow() {
        console.log("pass")
        purchaseService.purchase()
    }

}

// //Public
// export default class ValuesController {
//     constructor() {
//         ProxyState.on("values", _draw);
//         _draw()
//     }

//     addValue() {
//         valuesService.addValue()
//     }

// }


//Private
// function _draw() {
//     let purchase = ProxyState.purchase;
//     document.getElementById("app").innerHTML = /*html*/`
//   <button className="btn btn-info" onclick="app.valuesController.addValue()">Add Value</button>  
//   <div className="card-columns values">
//       ${template}
//   </div>
//   `
// }


