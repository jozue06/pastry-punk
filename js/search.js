'use strict';

var doSearch = function() {
  var result = document.getElementById('searchKey').value;
  var strItems = JSON.stringify(result);
  localStorage.setItem('searchKey', strItems);
  console.log('Your name is ' + result);
  return result;
};



// for (var i = 0; i < allStores[0].data.length; i++){
//   if (result === i)
//     testSearchResults.push(result);
//   console.log(testSearchResults);
// }