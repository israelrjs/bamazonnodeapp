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
<img width="671" alt="screenshot 2018-08-06 21 39 10" src="https://user-images.githubusercontent.com/35083911/43751191-78a81976-99c1-11e8-862f-2194fa4560e2.png">

	-  Once item is chosen and quantity is specified you will be prompted that your purchase was succesfull. Database will be updated.
<img width="731" alt="screenshot 2018-08-05 11 21 35" src="https://user-images.githubusercontent.com/35083911/43751305-fa160be4-99c1-11e8-9242-83b900d6467e.png">




## bamazonManager.js

- run **node BamazonManager.js**
	-  Follow the prompts to "manage" your Bamazon store!
	<img width="674" alt="screenshot 2018-08-05 11 24 31" src="https://user-images.githubusercontent.com/35083911/43751349-24483374-99c2-11e8-9514-ee0e9ff3cc4a.png">

	-  You can view the products that are available to sell:
<img width="711" alt="screenshot 2018-08-05 11 24 54" src="https://user-images.githubusercontent.com/35083911/43751360-303491dc-99c2-11e8-8538-6b8995d34ac3.png">

	-  You can view the products with low quantity (below 5):
	<img width="693" alt="screenshot 2018-08-05 11 25 08" src="https://user-images.githubusercontent.com/35083911/43751370-3d00293a-99c2-11e8-865c-36e0335c45ad.png">
	-  You can add product to your store:
	<img width="636" alt="screenshot 2018-08-05 12 09 52" src="https://user-images.githubusercontent.com/35083911/43751375-42358512-99c2-11e8-9d6a-e604efe535bf.png">

	-  You can add a new product to your store:
	<img width="641" alt="screenshot 2018-08-05 12 15 36" src="https://user-images.githubusercontent.com/35083911/43751384-4899abb8-99c2-11e8-833b-c7e15d4810d2.png">


