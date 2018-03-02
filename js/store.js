'use strict';


var results = document.getElementById('storeinfo');
<<<<<<< HEAD
// var resultsArr = [];
var storeFeature = localStorage.getItem('storeId');


if (localStorage.allStores){
  var strItems2 = localStorage.getItem('allStores');
  var parsedArray = JSON.parse(strItems2);
  parsedArray = parsedArray[0].data;
  //for (var j = 0; j < parsedArray.length; j++){
  // resultsArr.push(parsedArray[j]);
  //}
  for (var i = 0; i < parsedArray.length; i++) {
    if(storeFeature === parsedArray[i].name) {

      var storeDiv = document.createElement('div');

      var storeImg = document.createElement('p', 'pic');

      var resultImg = document.createElement('img');

      resultImg.src = parsedArray[i].minibottom;
      storeImg.appendChild(resultImg);
      storeDiv.appendChild(storeImg);

      var resultName = document.createElement('h1');
      resultName.textContent = parsedArray[i].name;
      results.appendChild(resultName);

      var resultLoc = document.createElement('p');
      resultLoc.textContent = parsedArray[i].locationtype;
      resultName.appendChild(resultLoc);
      results.appendChild(storeDiv);

      var resultHours = document.createElement('p');
      resultHours.textContent = parsedArray[i].hours;
      resultName.appendChild(resultHours);
      results.appendChild(storeDiv);

      var resultsMaps = document.getElementById('mapcontact');
      var resultMap = document.createElement('iframe');
      resultMap.src = parsedArray[i].maptag;
      resultsMaps.appendChild(resultMap);
    }
  }
}
=======
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

    var resultLoc = document.createElement('p');
    resultLoc.textContent = parsedArray[i].locationtype;
    resultName.appendChild(resultLoc);
    results.appendChild(storeDiv);
    
    var resultHours = document.createElement('p');
    resultHours.textContent = parsedArray[i].hours;
    resultName.appendChild(resultHours);
    results.appendChild(storeDiv);

    var resultsMaps = document.getElementById('mapcontact');
    var resultMap = document.createElement('iframe');

    resultMap.setAttribute( 'id', 'map');

    resultMap.src = parsedArray[i].maptag;
    resultsMaps.appendChild(resultMap);
  }
}
>>>>>>> master
