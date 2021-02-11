var objectLookup = function(objekat, str) {
  var properties = str.split('.');

  var tmp = {};
  
  try {
      properties.forEach(function(element) {
         tmp = isEmpty(tmp) ? objekat[element] : tmp[element];
      });
  }
  catch(e) {}

  return tmp;
}

function isEmpty(obj) {
  for(var prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
}

// Write a function that takes a object and a string, which
// represents an object lookup path, for example
// "property1.property2". The function should return the
// value on the specific path. Take care of error handling.
// Example:
// function lookup(obj, path){....}
// object = { property1: { property2: "Apple", property3:
// 'Orange' } }
// path = 'property1.property2'
// lookup(object, path))
// Result:
// 'Apple'