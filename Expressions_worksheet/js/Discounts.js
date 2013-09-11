//Stephanie Oldengarm, Sept. 11, 2013, Expressions Worksheet - Discounts

//Calculate discounted price for an item with and without sales tax.

var origPrice = 3.75;
var discountPercent = 5;
var itemSold = "frozen yogurt";
//describe the item
var salesTax = 6;

//percentages = x/100

var itemTaxed = origPrice + (origPrice * (salesTax/100)) - (origPrice * (discountPercent/100));
//to determine how much the item will cost when taxed, you must divide the sales tax by 100 and multiply it by the original price. This will give you the amount to add to the original price to determine cost plus tax. Then you must subract the discount price.

var itemUntaxed = origPrice - (origPrice * (discountPercent/100));
//to determine how much the item will cost without tax, you simply must subtract the discount from the original price.

console.log("Your" + " " + itemSold + " " + "was originally $" + origPrice + ", but after a" + " " + discountPercent + "% discount, it is now $" + itemUntaxed + " " + "without tax, and $" + itemTaxed + " with tax.");