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