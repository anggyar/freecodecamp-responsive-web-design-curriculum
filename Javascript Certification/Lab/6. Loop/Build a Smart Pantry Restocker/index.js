const pantry = [
  {
    sku: "A10",
    name: "Tomatoes",
    qty: 4,
    expires: "2027-01-01",
    zone: "fridge",
  },
  {
    sku: "D43",
    name: "Pineapples",
    qty: 2,
    expires: "2020-01-01",
    zone: "general",
  },
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge",
];

function parseShipment(rawData) {
  let results = [];

  for (let i = 0; i < rawData.length; i++) {
    let current = rawData[i];
    let splitted = current.split("|");

    let sku = splitted[0];
    let name = splitted[1];
    let qty = splitted[2];
    let expires = splitted[3];
    let zone = splitted[4];

    let isDuplicate = false;
    for (let j = 0; j < results.length; j++) {
      if (results[j].sku === sku) {
        isDuplicate = true;
        break;
      }
    }

    if (isDuplicate === true) {
      continue;
    }

    if (zone) {
      zone = zone;
    } else {
      zone = "general";
    }

    qty = Number(qty);

    let dataObject = {
      sku: sku,
      name: name,
      qty: qty,
      expires: expires,
      zone: zone,
    };

    results.push(dataObject);
  }

  return results;
}

function planRestock(pantry, shipment) {
  let actions = [];

  for (let i = 0; i < shipment.length; i++) {
    let type;
    if (shipment[i].qty <= 0) {
      type = "discard";
    } else {
      let isSkuExist = false;

      for (let j = 0; j < pantry.length; j++) {
        if (shipment[i].sku === pantry[j].sku) {
          isSkuExist = true;
          break;
        }
      }

      if (isSkuExist === true) {
        type = "restock";
      } else {
        type = "donate";
      }
    }

    let objectAction = {
      type: type,
      item: {
        sku: shipment[i].sku,
        name: shipment[i].name,
        qty: shipment[i].qty,
        expires: shipment[i].expires,
        zone: shipment[i].zone,
      },
    };
    actions.push(objectAction);
  }
  return actions;
}

/**
 * Instruksi yang ku pahami:
 * buat fungsi groupByZone(actions), berguna untuk mengelompokkan actions kedalam storage zone berdasarkan setiap properti zone.
 *
 * !!!Fungsi return sebuah object, dengan ketentuan:
 *  1. key : zona name
 *  2. value : array dari actions sesuai zone
 */
function groupByZone(actions) {
  let grouped = {};

  for (let i = 0; i < actions.length; i++) {
    let currentAction = actions[i];
    let currentZone = currentAction.item.zone;

    if (grouped[currentZone] === undefined) {
      grouped[currentZone] = [];
    }

    grouped[currentZone].push(currentAction);
  }

  return grouped;
}

function clonePantry(pantry) {
  let cloned = [];
  for (let i = 0; i < pantry.length; i++) {
    let current = pantry[i];

    let newItem = {
      sku: current.sku,
      name: current.name,
      qty: current.qty,
      expires: current.expires,
      zone: current.zone,
    };
    cloned.push(newItem);
  }

  return cloned;
}

//Simulation
const data = rawData;
console.log("Raw data is: \n", data);
console.log("=".repeat(40));

let parsedShipmentData = parseShipment(data);
console.log("Parsed Data is : \n", parsedShipmentData);

let shipment = [
  {
    sku: "A10",
    name: "Tomatoes",
    qty: 4,
    expires: "2027-01-01",
    zone: "fridge",
  },
  {
    sku: "D43",
    name: "Pineapples",
    qty: 2,
    expires: "2020-01-01",
    zone: "general",
  },
];
console.log("=".repeat(40));

let planRestockData = planRestock(pantry, shipment);
console.log("Restock Plan : \n", planRestockData);
console.log("=".repeat(40));

let zoneData = groupByZone(planRestockData);
console.log(zoneData);

console.log(clonePantry(pantry));
