const trains = [
    { trainNo:123, from:"Chennai Central",to: "Bangalore" },
    { trainNo:124, from:"Chennai Central",to: "Bangalore" },
    { trainNo:125, from:"Chennai Central",to: "Madurai"},
    { trainNo:126, from:"Chennai Central",to: "Bangalore"},
];

const cancelledTrains = [ 
    {trainNo: 123, cancelledOn:"2021-01-28"}
];

/** 
Find trains based on source and destination.
Find trains based on the journeyDate ( exclude cancelledTrains
*/

function searchTrains(source, destination, journeyDateStr){

    let journeyDate = new Date(journeyDateStr);            
    let filteredTrains = trains ;
    // implement logic
    return filteredTrains;
}

// Test Case #1: 
let availableTrains1= searchTrains("Chennai Central","Bangalore","2020-01-27");
console.log("List Available Trains - Test Case #1");
console.log(availableTrains1);

let availableTrains2= searchTrains("Chennai Central","Bangalore","2020-01-28");
console.log("List Available Trains - Test Case #2");
console.log(availableTrains2);
