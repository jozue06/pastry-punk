'use strict';


var results = document.getElementById('results');
if (localStorage.searchKey){
  var strItems2 = localStorage.getItem('searchKey');
  var searchKey2 = JSON.parse(strItems2);
  var showResults = document.createElement('li');
  showResults.textContent = searchKey2.name;
  results.appendChild(showResults, searchKey2);
}