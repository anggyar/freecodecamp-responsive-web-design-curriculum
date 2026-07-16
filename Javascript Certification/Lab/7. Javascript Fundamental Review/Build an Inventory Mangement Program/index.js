/** Declare Empty Array
 * Later we will store product object with key "name" with value lowercase string, and "quantity" key with integer value
 *
 */
let inventory = [];

/**Declare function findProductIndex(productName)
 * Return index of the product object inside inventory array.
 * #1. Always lowercase form of prodect name to perform search. if not found, return -`1
 */

function findProductIndex(productName) {
  let lowerCaseProductName = productName.toLowerCase();
  // assumpt there is no product in inventory array at first before add the logic.
  let indexNumber = -1;
  // console.log(lowerCaseProductName)
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === lowerCaseProductName) {
      indexNumber = i;
      break;
    }
  }

  return indexNumber;
}

// console.log(findProductIndex("milk")) -> DONE

/** Instruction no 4. Declare function addProduct(products), that takes products object
 * #1. If there is a product in inventory, addProduct should update "quantity" by adding PRODUCT OBJECT.
 * example : {"name": "milk", "quantity": 15}
 * #2. quantity should be updated with current quantity that passed in the function.
 * #3. log the product name followed by space and "quantity updated"
 */
/**
 * Instruction no 5.
 * #1. If there is no product name in inventory, addProduct should push product to inventory array.
 * #2. Log name product followed by space and "quantity updated"
 */
function addProduct(productObj) {
  let productName = productObj.name.toLowerCase();
  let productQty = productObj.quantity;
  let newObj = {
    name: productName,
    quantity: productQty,
  };

  let isFound = false;

  for (let i = 0; i < inventory.length; i++) {
    if (productName === inventory[i].name) {
      isFound = true;
      inventory[i].quantity += productQty;
      console.log(`${productName} quantity updated`);
      break;
    }
  }

  if (isFound === false) {
    inventory.push(newObj);
    console.log(`${productName} added to inventory`);
  }
}

// console.log(inventory)
// // // addProduct({"name": "coffee", "quantity": 2})
// // // addProduct({"name": "tea", "quantity": 2})
// addProduct({name: "FLOUR", quantity: 5})
// console.log(inventory)

/** Instruction 6 & 7
 * #1. Declare function removeProduct(productName, productQuantity)
 * #2. Harus mengurangi quantity yang dimasukkan dalam argumen fungsi, selaras dengan product object yang ada di inventory.
 * #3. Log `Remaining ${productName} pieces: ${productQuantity}
 */
/** Instruction 8 & 9
 * #1. If quantity = 0, removeProduct should remove product object from inventory.
 * #2. If quantity not enough, log `Not enough ${productName} available, remaining pieces: ${productQuantity}`
 * #3. If no product found in inventory, log `${productName} not found"
 *
 */
function removeProduct(productName, deletedQuantity) {
  let lowerCaseProductName = productName.toLowerCase();
  let isFound = false;

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === lowerCaseProductName) {
      isFound = true;
      if (deletedQuantity > inventory[i].quantity) {
        console.log(
          `Not enough ${lowerCaseProductName} available, remaining pieces: ${inventory[i].quantity}`,
        );
        break;
      }

      inventory[i].quantity -= deletedQuantity;
      console.log(
        `Remaining ${lowerCaseProductName} pieces: ${inventory[i].quantity}`,
      );

      if (inventory[i].quantity === 0) {
        inventory.splice(i, 1);
      }
    }
  }

  if (isFound === false) {
    console.log(`${lowerCaseProductName} not found`);
  }
}

removeProduct("FLOUR", 5);
// console.log(inventory)
// removeProduct("hujah", 1);
// console.log(inventory)
