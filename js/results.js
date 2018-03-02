'use strict';


var results = document.getElementById('container');
var resultsArr = [];

if (localStorage.searchKey)
{
  var strItems2 = localStorage.getItem('searchKey');
  var parsedArray = JSON.parse(strItems2);
  for (var j = 0; j < parsedArray.length; j++){
    resultsArr.push(parsedArray[j]);
  }
  for (var i = 0; i < resultsArr.length; i++){

    var storeDiv = document.createElement('div');
    storeDiv.setAttribute('id', 'storeDiv');

    var storeImg = document.createElement('section');
    storeImg.setAttribute('id','pic');

    var resultImg = document.createElement('img');

    var a = document.createElement('a');

    resultImg.src = parsedArray[i].minibottom;
    a.setAttribute('href', 'store.html');
    console.log(parsedArray[i].name);
    resultImg.setAttribute('id' , parsedArray[i].name);
    a.appendChild(resultImg);
    storeImg.appendChild(a);
    storeDiv.appendChild(storeImg);

    var resultName = document.createElement('h1');
    resultName.textContent = parsedArray[i].name;
    results.appendChild(resultName);

    var resultNeighborhood = document.createElement('p');
    resultNeighborhood.textContent = parsedArray[i].neighborhood;
    resultName.appendChild(resultNeighborhood);
    results.appendChild(storeDiv);

    var resultAddress = document.createElement('p');
    resultAddress.textContent = parsedArray[i].address;
    resultName.appendChild(resultAddress);
    results.appendChild(storeDiv);

    var resultHours = document.createElement('p');
    resultHours.textContent = parsedArray[i].hours;
    resultName.appendChild(resultHours);
    results.appendChild(storeDiv);
  }
}

function imageHandler(event){

  for (var k = 0; k < parsedArray.length; k++){
    if (event.target.id === parsedArray[k].name){
      localStorage.setItem('storeId', event.target.id);
    }

  }

}

results.addEventListener('click', imageHandler);


// resultImg.src = allStoresShow[0].data[i].minibottom;

// storeDiv.appendChild(storeImg);