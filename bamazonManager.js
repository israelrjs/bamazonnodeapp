var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "105200Votw",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log(
    "-----------------------------------------------------------------------------------------"
  );
  console.log(
    "                                                                                         "
  );
  console.log(
    "_________________________________________________________________________________________"
  );
  managerBamazon();
});

function managerBamazon() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View Products for Sale",
        "View Low Inventory",
        "Add to Inventory",
        "Add New Item"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
        case "View Products for Sale":
          productsForSale();
          break;

        case "View Low Inventory":
          lowInventory();
          break;

        case "Add to Inventory":
          addToInventory();
          break;

        case "Add New Item":
          addNewItem();
          break;
      }
    });
}

function productsForSale() {
  connection.query("SELECT * FROM products", function(err, fields) {
    if (err) {
      console.log(err);
    } else {
      console.log(
        "-----------------------------------------------------------------------------------------"
      );
      console.log(
        "                                                                                         "
      );
      console.log(
        "_________________________________________________________________________________________"
      );
      console.log("What we are selling:");
      console.log(
        "------------------------------------------------------------------------------------------"
      );
      for (var i = 0; i < fields.length; i++) {
        console.log(
          "Item ID: " +
            fields[i].item_id +
            " | " +
            "Item Name: " +
            fields[i].product_name +
            " | " +
            "Department: " +
            fields[i].department_name +
            " | " +
            "Price: " +
            fields[i].price +
            " | " +
            "Stock: " +
            fields[i].stock_quantity
        );
      }
    }
    console.log(
      "-----------------------------------------------------------------------------------------"
    );
    console.log(
      "                                                                                         "
    );
    console.log(
      "_________________________________________________________________________________________"
    );
    managerBamazon();
  });
}
function lowInventory() {
  connection.query("SELECT * FROM products WHERE stock_quantity < 5", function(
    err,
    fields
  ) {
    if (err) {
      console.log(err);
    } else {
      console.log(
        "-----------------------------------------------------------------------------------------"
      );
      console.log(
        "                                                                                         "
      );
      console.log(
        "_________________________________________________________________________________________"
      );
      console.log("Products Low Inventory: ");
      console.log(
        "-----------------------------------------------------------------------------------------"
      );
      for (var i = 0; i < fields.length; i++) {
        console.log(
          "Item ID: " +
            fields[i].item_id +
            " | " +
            "Item Name: " +
            fields[i].product_name +
            " | " +
            "Department: " +
            fields[i].department_name +
            " | " +
            "Price: " +
            fields[i].price +
            " | " +
            "Stock: " +
            fields[i].stock_quantity
        );
      }
    }
    console.log(
      "-----------------------------------------------------------------------------------------"
    );
    console.log(
      "                                                                                         "
    );
    console.log(
      "_________________________________________________________________________________________"
    );
    managerBamazon();
  });
}

function addToInventory() {
  connection.query("SELECT * FROM products", function(err, fields) {
    inquirer
      .prompt([
        {
          type: "input",
          name: "id",
          message: "What is the ID of item you want to add?",
          filter: Number
        },
        {
          type: "input",
          name: "qty",
          message: "How much would you like to add?",
          filter: Number
        }
      ])
      .then(function(ans) {
        var idSelected = parseInt(ans.id);
        var quantityAdding = parseInt(ans.qty);
        var currentQty = parseInt(fields[idSelected].stock_quantity);
        connection.query(
          "UPDATE products SET ? WHERE ?",
          [
            {
              stock_quantity: currentQty + quantityAdding
            },
            { item_id: ans.id }
          ],
          console.log("Item " + idSelected + " Was Updated")
        );
        managerBamazon();
      });
  });
}
function addNewItem() {
  connection.query("SELECT * FROM products", function(err, fields) {
    inquirer
      .prompt([
        {
          type: "input",
          name: "id",
          message: "Set an ID number for this item"
        },
        {
          type: "input",
          name: "name",
          message: "What item are you adding?"
        },
        {
          type: "input",
          name: "dep",
          message: "What department does it belong to?"
        },
        {
          type: "input",
          name: "price",
          message: "What price will it sell for?"
        },
        {
          type: "input",
          name: "qty",
          message: "How many of this item do you want to stock?"
        }
      ])
      .then(function(input) {
        var itemID = input.id;
        var itemName = input.name;
        var depAdd = input.dep;
        var sellPrice = input.price;
        var qtyAdd = input.qty;

        connection.query(
          "INSERT INTO products(item_id,product_name,department_name,price,stock_quantity) VALUES (?,?,?,?,?);",
          [itemID, itemName, depAdd, sellPrice, qtyAdd]
        );
        if (err) console.log("Error: " + err);
        else {
          console.log(
            "-----------------------------------------------------------------------------------------"
          );
          console.log(
            "                                                                                         "
          );
          console.log("This item was added");
          console.log(
            itemID +
              " | " +
              itemName +
              " | " +
              depAdd +
              " | " +
              "$" +
              sellPrice +
              " | " +
              qtyAdd
          );
          connection.end();
        }
      });
  });
}
