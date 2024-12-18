var jsonString=`{
    "name": "Parth",
    "age": 20,
    "is": true,
    "hobbies": ["reading", "gaming"],
    "address": {
      "city": "Surat"
      }
  }`


  console.log(jsonString);
//   json to jsobj 
  console.log(JSON.parse(jsonString));
//   jsobj to json 
  console.log(JSON.stringify(JSON.parse(jsonString)));
  
  
  