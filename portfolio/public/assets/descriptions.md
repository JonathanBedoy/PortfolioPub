 **Nia Lashes By Denise**:

***Teaser***:

 *"E-commerce website for eyelashes branded as 'Nia Lashes By Denise' using the PayPal API for transactions."*

***Description***:

*"This e-commerce website allows the user to add eyelash extesnions to their cart and checkout using PayPal. Along with being able to take a prfound look at the eyelash being sold."*

***Goals:***

* add to cart

  * A standard add to cart feature is present which allows the user to checkout with multiple items and quantities. Additionally, the cart is persisted after the user leaves (using local storage).
* checkout (low fees)

  * The client requested a checkout that is reliable and trustworthy to the user, feature that coule be implemented in many ways.
  * In terms of trustworthiness, PayPal is one of the biggest payment processors out there. By using PayPal, the client is able to provide users with a safe and reliable way to process the transaction.
  * Additionally, the client will have a PayPal dashboard where they can then, view and fullfill their orders.
* save orders

  * The client requested an order page, that shows the user their order information.
  * Persisting data like this meant setting up a database. Since the client wanted a low cost solution to this, using a MongoDB embedded solution (NeDB) seemed to be a solid solution. This allowed the client to run all back-end related needs on one server.
* keep track of inventory

  * In order for the client not to oversell they're eyelashes, they needed an up to date inventory. The item quantities (stored in a NeDB instance) are updating at checkout. As well as not allowing the user to purchase more than what is in inventory.
* view items

  * A list of items are shown, separated by the eyelash material being used (minx or silk). The items all have their own landing page which shows information for each eyelash extesnsion, as well as pictures accompanying it.

**Inventory System:**

***Teaser***:

 *"Inventory system with the capability of generating invoices and keeping track of invoices, inventory, and company debts."*

***Description***:

*"This web app allows the user to keep tabs on their inventory, as well as intuitively generate invoices using inputed company and inventory data."*

***Goals:***

* Inventory
  * The user is capable of adding removing and editting items from their inventory.
* Company
  * The user is capable of adding removing and editting their clients (company or other). The user is also given the ability to view any invoice from that company.
* Invoices
  * To fully bring this all together, the user is then able to generate invoices using their inputted inventory items, and company data. They are also given a way to keep track of paid/unpaid invoices. As well as being able to view and print any invoice generated.
  * Invoices are persisted even after removing an item or company.
* Overview
  * The user is given an overview of their inventory system. Supplying them with a view of their paid/unpaid invoices, as well as their top 3 money making companies.

**Wordle With A Friend:**

***Teaser***:

 *"Classic game of wordle, but with a multiplayer element to it."*

***Description***:

*"This web app is a recreation of the famous web-based word game, with a twist, It also allows the user to play with their friend. Each player receives one guess per turn, until the word is guessed correctly."*

***Goals:***

* Wordle
  * The web app uses a faithful style to the original "singleplayer" game. This is basically an implementaion of Wordle with multiplayer funtionality.
  * Using various APIs, a random somewhat common five-letter word is chosen.
  * The user can only guess valid words from the dictionary.
* Lobby
  * In order for two players to play, a user will have to create a lobby, and invite their friend using the lobby code (uniquely generated server-side). The friend can then join the lobby and the game will start.
* Connection
  * The users are connected into a lobby using SocketIO. Which allows the users to communicate with eachother, using the server as a "middleman". All interactions are passed in real-time to the other users. Also has a layer of persistence, if the user is disconnected for whatever reason, they will automatically reconnect to the lobby(Only if the lobby still exists).
* Leave
  * The user also has the option to leave the lobby at anytime. Another option is being able to play again after the match is over (both players have to agree).
