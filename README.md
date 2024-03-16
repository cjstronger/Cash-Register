This cash register function returns 3 statuses, if the drawer has money and the cash given is able to cover the price of the product the function will return a status of 'open' and return the amount of extra change perfectly descending from $100 to ¢.01.
If the drawer has money but the cash given is not able to cover the price the function will return a status of 'insufficient funds' with no change.
If the price is covered but the drawer is empty after the change is given the register will return a status of 'closed'
Eventually I'll come back to this when I'm bored and add a status of 'change drawer' if the drawer is not able to give back the change from the purchase.
