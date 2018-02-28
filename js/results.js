'use strict';


var results = document.getElementById('container');
var resultsArr = [];

if (localStorage.searchKey){
  var strItems2 = localStorage.getItem('searchKey');
  var parsedArray = JSON.parse(strItems2);
  for (var j = 0; j < parsedArray.length; j++){
    resultsArr.push(parsedArray[j]);
  }
  for (var i = 0; i < resultsArr.length; i++){

    var storeDiv = document.createElement('div');

    var storeImg = document.createElement('p', 'pic');

    var resultImg = document.createElement('img');

    resultImg.src = parsedArray[i].minibottom;
    storeImg.appendChild(resultImg);
    storeDiv.appendChild(storeImg);

    var resultName = document.createElement('h1');
    resultName.textContent = parsedArray[i].name;
    results.appendChild(resultName);

    var resultNeighborhood = document.createElement('p');
    resultNeighborhood.textContent = parsedArray[i].neighborhood;
    resultName.appendChild(resultNeighborhood);
    results.appendChild(storeDiv);
  }
}
