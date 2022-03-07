function nextinLine(arr, item){
    arr.push(item)
     return arr.shift();
 }
 
 //set up 
 const testArr=[1,2,3,4,5];
 
 //dsiplay code
 console.log("Before: " + JSON.stringify(testArr));
 console.log(nextinLine(testArr, 6));
 console.log("After"+ JSON.stringify(testArr));

// extra practice
// swtich statement
/*
function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
      case 1:
      case 2:
      case 3:
      return "Low";
      break;
      case 4:
      case 5:
      case 6:
      return "Mid";
      break;
      case 7:
      case 8:
      case 9:
      return "High";
      break;
  
    }
    // Only change code above this line
    return answer;
  }
  // Change this value to test
  sequentialSizes(1);*/

  //// Setup

 /* changing swtich statments and making objects
function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    const lookup={
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot":"Frank",
    };
  
    result= lookup[val];
  
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie");*/
  /*Record Collection
You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire record collection object.
If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
If value is an empty string, delete the given prop property from the album.
Note: A copy of the recordCollection object is used for the tests.*/
/*
// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if(prop != tracks && value != ""){
    records[id][prop]=value
  } else if (prop=== "tracks" && records[id].hasOwnProperty("tracks")=== false){
    records[id][prop]=value
  }else if (pop ==="tracks" && value!=""){
    records[id][prop].push(value);
  } else if(value==="") {
    delete records[id][prop];
  }
  
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA', 'tracks','take a chance on me');*/
/* solution 2
// Only change code below this line
function updateRecords(records, id, prop, value) {
  if(value=""){
    delete[id][prop]
  }else if (prop=="tracks"){
    records[id][prop]= records[id][prop]||[];
    records[id][prop].push(value);
  }else{
records[id][props]=value;
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');*/

/*// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line

for( let i= 0; i<contacts.length; i++){
if(contacts[i].firstName=== name){
  if(contacts[i].hasOwnProperty(prop)){
    return contacts[i][prop];
    }else {
    return "No such property";
    }
  }  
}
return "No such contact"

  // Only change code above this line
}*/