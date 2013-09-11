//Stephanie Oldengarm, Sept. 11, 2013, Expressions Worksheet - Discounts

//Calculate discounted price for an item with and without sales tax.

var origPrice = 3.75;
var discountPercent = 5;
var itemSold = "frozen yogurt";
//describe the item
var salesTax = 6;

//percentages = x/100

var itemTaxed = origPrice + (origPrice * (salesTax/100));

var itemUntaxed = origPrice - (origPrice * (discountPercent/100));

console.log("Your" + " " + itemSold + " " + "was originally $" + origPrice + ", but after a" + " " + discountPercent + "% discount, it is now $" + itemUntaxed + " " + "without tax, and $" + itemTaxed + " with tax.");