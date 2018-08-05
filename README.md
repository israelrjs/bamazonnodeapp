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

	-  On start up, you'll see the products available for purchase:
	<img width="644" alt="screenshot 2018-08-05 11 13 42" src="https://user-images.githubusercontent.com/35083911/43688582-2ac133c0-98b1-11e8-9106-74200e0d3397.png">


	-  You can then purchase the items and it will tell you the total for your order:
	![Example Customer 2](/images/customer02.png)

	-  It will not process your order if you try to purchase too many:
	![Example Customer 3](/images/customer03.png)

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


