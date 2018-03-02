'use strict';


var allResults = document.getElementById('container');
var allStoresShow = [];


var strItems2 = localStorage.getItem('allStores');
var parsedArray = JSON.parse(strItems2);
for (var j = 0; j < parsedArray.length; j++){
  allStoresShow.push(parsedArray[j]);
}
for (var i = 0; i < allStoresShow[0].data.length; i++){

  var storeDiv = document.createElement('div');

  var storeImg = document.createElement('p', 'pic');

  var resultImg = document.createElement('img');
  var a = document.createElement('a');
  resultImg.src = allStoresShow[0].data[i].minibottom;

  a.setAttribute('href', 'store.html');
  a.appendChild(resultImg);
  storeImg.appendChild(a);
  storeDiv.appendChild(storeImg);

  var resultName = document.createElement('h1');
  resultName.textContent = allStoresShow[0].data[i].name;
  allResults.appendChild(resultName);

  var resultNeighborhood = document.createElement('p');
  resultNeighborhood.textContent = allStoresShow[0].data[i].neighborhood;
  resultName.appendChild(resultNeighborhood);
  allResults.appendChild(storeDiv);

  var resultAddress = document.createElement('p');
  resultAddress.textContent = allStoresShow[0].data[i].address;
  resultName.appendChild(resultAddress);
  allResults.appendChild(storeDiv);

  var resultHours = document.createElement('p');
  resultHours.textContent = allStoresShow[0].data[i].hours;
  resultName.appendChild(resultHours);
  allResults.appendChild(storeDiv);
}
