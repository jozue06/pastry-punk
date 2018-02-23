var allStores = [];
let key,
  sheetNum;
attachEvents();

function readValues() {
  key = '1DJi0_PxTrB9ZHdRpDS36CxsXBMW8cwnDYLhUuC6Q0tM';
  sheetNum = '1';
}
function attachEvents() {
  onload = function(ev) {
    ev.preventDefault();
    readValues();
    // console.log(key, sheetNum);

    var promise = GetSheetDone.labeledCols(key, sheetNum);

    promise.then((data) => {
    //   console.log('Data');
    //   console.log(data);
      allStores.push(data);
    });
  };
}