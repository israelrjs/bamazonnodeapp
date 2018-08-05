# bamazonnodeapp

Requires a keys.js file to run.  Should be formatted as follows:

```javascript
exports.connection = {
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'password',
	database: 'bamazon'
};
```

You will also need to run **npm install** to get the right packages from the package.json

## bamazonCustomer.js

- run **node BamazonCustomer.js**

	-  On start up, "Select I am a Customer" to view Items for sell
	<img width="644" alt="screenshot 2018-08-05 11 13 42" src="https://user-images.githubusercontent.com/35083911/43688582-2ac133c0-98b1-11e8-9106-74200e0d3397.png">


	-  Items for sell will view, Then you will be able to select the Id of item you wnat to buy and how many.
	<img width="761" alt="screenshot 2018-08-05 11 14 09" src="https://user-images.githubusercontent.com/35083911/43688604-7c6eaeb4-98b1-11e8-9491-dc2ed4270c70.png">

	-  It will not process your order if you try to purchase too many:
	<img width="731" alt="screenshot 2018-08-05 11 21 35" src="https://user-images.githubusercontent.com/35083911/43688607-817ababa-98b1-11e8-837f-1c997e2f43e1.png">

## bamazonManager.js

- run **node BamazonManager.js**
	-  Follow the prompts to "manage" your Bamazon store!

	-  You can view the products that are available to sell:
	![Example Manager 1](/images/manager01.png)

	-  You can view the products with low quantity (below 5):
	![Example Manager 2](/images/manager02.png)

	-  You can add product to your store:
	![Example Manager 3](/images/manager03.png)

	-  You can add a new product to your store:
	![Example Manager 4](/images/manager04.png)


