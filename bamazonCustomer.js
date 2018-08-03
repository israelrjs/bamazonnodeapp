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

  console.log("-------------------------------------------"),
    console.log("                                           "),
    console.log("         *** Welcome to BamaZOn ***         "),
    console.log("                                           "),
    console.log("-------------------------------------------");
  openBamazon();
});
function openBamazon() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "Who Are you?",
      choices: ["I am a Customer", "I am a Manager"]
    })
    .then(function(answer) {
      switch (answer.action) {
        case "I am a Customer":
          customerBamazon();
          break;

        case "I am a Manager":
          managerBamazon();
          break;
      }
    });
}

function customerBamazon() {
  productsForSale();
  buyProducts();
}

function productsForSale() {
  connection.query("SELECT * FROM products", function(result, fields) {
    console.log("What we are selling:");
    console.log("----------------------");
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
    console.log("_______________________________________________________");
  });
}

function buyProducts() {
  connection.query("SELECT * FROM products", function(result, fields) {
    inquirer
      .prompt([
        {
          type: "input",
          name: "id",
          message: "What is the ID of the product you would like to purchase?"
        },
        {
          type: "input",
          name: "qty",
          message: "How many would you like to purchase?",
          validate: function(value) {
            if (isNaN(value)) {
              return false;
            } else {
              return true;
            }
          }
        }
      ])
      .then(function(ans) {
        var idofitemselected = ans.id;
        var quantityBuying = ans.qty;
        var priceOfitem = fields[idofitemselected].price;
        var grandtotal = parseFloat((priceOfitem * quantityBuying).toFixed(2));
        // console.log(idofitemselected);
        // console.log(quantityBuying);
        // console.log(priceOfitem);
        // console.log(grandtotal);
        if (fields[idofitemselected].stock_quantity >= quantityBuying) {
          connection.query(
            "UPDATE products SET ? WHERE ?",
            [
              {
                stock_quantity:
                  fields[idofitemselected].stock_quantity - quantityBuying
              },
              { item_id: ans.id }
            ],
            function(fields) {
              console.log(
                "Great! Your total is $" +
                  grandtotal.toFixed(2) +
                  ". Your item(s) will be shipped to you in 3-5 business days."
              );
              console.log(
                "----------------------------------------------------------------------------------------------------"
              );
            }
          );
        } else {
          console.log("Sorry, out of stock!");
        }

        productsForSale();
        setTimeout(function() {
          rePrompt();
        }, 3000);
      });
  });
}

function repromtproductsForSale() {
  connection.query("SELECT * FROM products", function(result, fields) {
    console.log("What we are selling:");
    console.log("----------------------");
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
  });
}

function rePrompt() {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "reply",
        message: "Would you like to purchase another item?"
      }
    ])
    .then(function(ans) {
      if (ans.reply) {
        buyProducts();
      } else {
        console.log("See you soon!");
        connection.end();
      }
    });
}
