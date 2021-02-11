var nextArrayStruct = function (a) {
  let ids = [];
  let values = [];
  let occ;
  let value = 1;

  a.forEach(el => {
      ids.push(el.id);
      values.push(el.value);
  });

  occ = occurence(values);
  console.log(occ)

  occ[1].forEach((val, index) => {
    if(val > 1) {
      values.splice(0,occ[0][index]);

      for(var i=0; i<=values.length; i++){
        if (values[i+1] == null) return Math.max(...values) + 1;  
        else if(values[i+1] - values[i] > 1){
              value = values[i] + 1;
              break;
        }
      }
    }
  })

  
  return {id: missingId(ids), value: value};
}

var missingId = function(nums, min=0) {
  if (nums.length < 1) {
    return 1;
  };
  
  let missing = 1;
  
  let myHash = {};
  
  for (let num of nums) {if (num > 0) myHash[num] = true};
  
  for (missing; missing <= nums.length; missing++) {
    if (!myHash[missing] && missing > min) {
      return missing;
    };      
  };
  
  return missing; 
};

var occurence = function(arr) {
  var a = [],
  b = [],
  prev;
  
  arr.sort();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== prev) {
      a.push(arr[i]);
      b.push(1);
    } else {
      b[b.length - 1]++;
    }
    prev = arr[i];
  }
  
  return [a, b];
}

//   For a random array of structs of type { id, value }, return a
// new struct, with a unique id and a value such as the next
// positive integer, which isn't present in the existing
// structure list and with at least one smaller integer
// appearing at least twice in the same list.