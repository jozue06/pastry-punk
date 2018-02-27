'use strict';


var results = document.getElementById('results');
if (localStorage.searchKey){
  var strItems2 = localStorage.getItem('searchKey');
  var searchKey2 = JSON.parse(strItems2);
  var resultsArr = [];
  resultsArr.push(searchKey2);
  for (var i = 0; i < resultsArr.length; i++){
    var showResults = document.createElement('li');
    showResults.textContent = searchKey2.name;
    results.appendChild(showResults, searchKey2);
  }
}