//figure out the discount and show it to the customer
//When customer clicks the order button, prompts the user's 
//order volume, then uses that to determine order cost
//12 units cost is $20
//24 units $38
//36 units $54
//48 units $70
const UNIT_COST = 5;
const TWENTYFOUR_UNITS_COST = 4;


function placeOrder(){
    const quantity= prompt('How many are you ordering?')
    let cost= UNIT_COST;
        if((quantity >= 12)||(quantity >= 24)){
            cost= TWENTYFOUR_UNITS_COST;
        }
    alert('Your order will cost: $'+ cost +' each');
}