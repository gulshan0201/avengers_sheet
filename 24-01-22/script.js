var table = document.getElementById("table");
var addurl = "https://api2.binance.com/api/v3/ticker/24hr";
fetch (addurl)
.then((response) => {

  return response.json();
})
.then((data) => {

  console.log(data);
  var tr = document.createElement("tr");
  var td1 = document.createElement("th");
  td1.innerText ="Symbol";
  var td2 = document.createElement("th");
  td2.innerText = "Price Change";
  var td3 = document.createElement("th");
  td3.innerText = "Avg Price";
  var td4 = document.createElement("th");
  td4.innerText = "Last Price";
  tr.append(td1, td2, td3, td4);
  table.appendChild(tr);

  for(var i = 0; i < 100; i = i + 1) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    td1.innerText = data[i].symbol;
    td2.innerText = data[i].priceChange;
    td3.innerText = data[i].weightedAvgPrice;
    td4.innerText = data[i].lastPrice;
    tr.append(td1, td2, td3, td4);
    table.appendChild(tr);
  }
})
.catch((err) => {
  console.log("Error in fetching API");
}) 
