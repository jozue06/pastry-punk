'use strict';


var results = document.getElementById('storeinfo');
var storeFeature = localStorage.getItem('storeId');


if (localStorage.allStores) {
  var strItems2 = localStorage.getItem('allStores');
  var parsedArray = JSON.parse(strItems2);
  parsedArray = parsedArray[0].data;
  for (var i = 0; i < parsedArray.length; i++) {
    if (storeFeature === parsedArray[i].name) {

      var storeDiv = document.createElement('div');

      var storeImg = document.createElement('h2', 'pic');

      var resultImg = document.createElement('img');

      resultImg.src = parsedArray[i].minibottom;
      storeImg.appendChild(resultImg);
      storeDiv.appendChild(storeImg);

      var resultName = document.createElement('h1');
      resultName.textContent = parsedArray[i].name;
      results.appendChild(resultName);

      var resultLoc = document.createElement('p');
      resultLoc.textContent = parsedArray[i].locationtype;
      storeDiv.appendChild(resultLoc);
      results.appendChild(storeDiv);

      var resultHours = document.createElement('p');
      resultHours.textContent = parsedArray[i].hours;
      storeDiv.appendChild(resultHours);
      results.appendChild(storeDiv);

      var resultBlurb = document.createElement('p');
      resultBlurb.textContent = parsedArray[i].blurb;
      storeDiv.appendChild(resultBlurb);
      results.appendChild(storeDiv);

      var resultPastry = document.createElement('p');
      resultPastry.textContent = parsedArray[i].pastry;
      storeDiv.appendChild(resultPastry);
      results.appendChild(storeDiv);

      var resultItem = document.createElement('p');
      resultItem.textContent = parsedArray[i].item;
      storeDiv.appendChild(resultItem);
      results.appendChild(storeDiv);


      var a = document.createElement('a');

      var website = document.createElement('p');

      website.textContent = parsedArray[i].website;
      a.setAttribute('href', parsedArray[i].website);
      website.setAttribute('id' , parsedArray[i].website);
      a.appendChild(website);
      storeDiv.appendChild(a);

      var resultsMaps = document.getElementById('mapcontact');
      var resultMap = document.createElement('iframe');
      resultMap.src = parsedArray[i].maptag;
      resultsMaps.appendChild(resultMap);
    }
  }
}
