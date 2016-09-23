//Calculator
var runningTotal = 0;
document.getElementById("total").innerHTML = "Total: " + runningTotal;
var receipt = [];

function printReceipt(){
  runningTotal = 0;
  $(".receipt").remove();
  for(k=0;k<receipt.length;k++){
    $("#receipt")
      .append($("<span></span>")
      .addClass("receipt")
      .text(receipt[k].itemName + " $" + receipt[k].itemPrice)
      .append($("<input></input")
      .attr("id", k)
      .attr("type", "checkbox")
      .attr("class", "deletable")
      )
      .append($("<br>")
      )
    );
    runningTotal += receipt[k].itemPrice;
    document.getElementById("total").innerHTML = "Total: $" + runningTotal;
  }
}

function addItem(x){
  var xarray = x.split("");
  var n = xarray[0];
  var m = xarray[1];
  receipt.push({"itemName": menu[n].items[m].itemName, "itemPrice": menu[n].items[m].itemPrice});
  printReceipt();
}

function itemInfo(x){
  $(".addItem").remove();
  var xarray = x.split("");
  var n = xarray[0];
  var m = xarray[1];
  var printInfo = menu[n].items[m].itemName + " $" + menu[n].items[m].itemPrice;
  $("#addButton").append($("<button></button>")
    .text("Add")
    .attr("id", n + m)
    .attr("class", "addItem")
    .attr("onclick", "addItem(this.id)")
  );
  document.getElementById("itemInfo").innerHTML = printInfo;
}

//DOM generator
function genSectionMenu(n) {
  $(".itemButton").remove();
  for(m=0;m<menu[n].items.length;m++){
    $("#sectionMenu").append($("<div></div>")
      .attr("id", "sectionDiv")
      .addClass("itemButton")
    );
    $('#sectionDiv').append($("<button></button>")
      .text(menu[n].items[m].itemName)
      .attr("id", n + m)
      .attr("onclick", "itemInfo(this.id)")
    ).append($("<br>")
    )
  ;}
}

for(n=0;n<menu.length;n++){
  $("#mainMenu").append($("<button></button>")
    .text(menu[n].sectionName)
    .addClass("sectionButton")
    .attr("id", n)
    .attr("onclick", "genSectionMenu(this.id)")
  );
}
