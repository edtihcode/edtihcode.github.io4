console.log("Hello World!");
$(document).ready(function() {
  var mpg;
  $("#submit").click(function() {
    var gallonInput = $("#gallon").val();
    var distanceTravelled = $("#miles").val();
    var gasInputValue = $("#gasPrice").val();
    // console.log(gallonInput,distanceTravelled);
    mpg = calMPG(gallonInput,distanceTravelled);
    $("#result1").val(mpg);
    costPerMile = calCostPerMile(gasInputValue,gallonInput,distanceTravelled);
    $("#result2").val(costPerMile);
    distancePerDollar = calDistancePerDollar(gasInputValue,gallonInput,distanceTravelled);
    $("#result3").val(distancePerDollar);
    //console.log(gallonInput, gasInputValue);

    });

  //   console.log(validateEmail(emailText), passwordText);
  //   $("#error").css("visibility", "visible")
  //
  //   if (emailText == "hello@gmail.com") {
  //     if (passwordText == "123456") {
  //       console.log("password is right");
  //     } else {
  //       console.log("wrong password");
  //     }
  //
  //   } else {
  //     console.log("no user with email " + emailText + " exist");
  //   }
  // });
  $("#calculateSavings").click(function() {
    var priceA= $("#gasPriceA").val();
    var priceB= $("#gasPriceB").val();
    var distanceA= $("#aDistance").val();
    distanceA = parseInt(distanceA);
    var distanceB= $("#bDistance").val();
    distanceB = parseInt(distanceB);
    var costA = $("#costToA").val();
    var costB = $("#costToB").val();
    var purchaseG = $("#gallonToPurchase").val();

    costToGetToA = calCostToGetThere(distanceA,pricePerMileValue);
    purchaseA = purchaseValueG(priceA,purchaseG);
    totalCostValueA = calTotalCostValue(purchaseA,costToGetToA);
    $("#costToA").val("$" + totalCostValueA.toFixed(2));
    costToGetToB = calCostToGetThere(distanceB,pricePerMileValue);
    purchaseB = purchaseValueG(priceB,purchaseG);
    totalCostValueB = calTotalCostValue(purchaseB,costToGetToB);
    $("#costToB").val("$" + totalCostValueB.toFixed(2));
    totalSavings = compare(totalCostValueA,totalCostValueB);
    console.log(totalCostValueA+ "for a");
    console.log(totalCostValueB+ "for b");
    console.log(totalSavings.value + totalSavings.station);
    $("#Results").html(`<h1>You will save $ ${totalSavings.value} by going to station ${totalSavings.station} </h1>`)

    });

});
function calTotalCostValue(purchaseValue,costValue){
  totalCostValue = purchaseValue + costValue ;
  console.log(totalCostValue,"totalcostvalue",purchaseValue,"purcahse V",costValue,"cost v");
  return totalCostValue;
}

function compare(a,b){
  if (a > b) {
    console.log(a,b);
    savings = a-b;
    savings = savings.toFixed(2);
    var stationOfChoice = "B";
    var result = {value: savings, station: stationOfChoice};
    return result;
  }else if (b > a) {
    savings = b - a;
    savings = savings.toFixed(2);
    var stationOfChoice = "A";
    var result = {value: savings, station: stationOfChoice};
    return result;
  }else {
    var stationOfChoice = "No difference/cannot be computed";
    $("#Results").html(`<h1> No difference/cannot be computed </h1>`);
  }

}

function purchaseValueG(price,purchaseG){
  purchaseValue = parseFloat(price) * parseFloat(purchaseG);
  console.log("price",price,"gallon",purchaseG,"total",purchaseValue);
  return purchaseValue;
}

function calMPG(gallonInput,distanceTravelled){
  mpgvalue = parseInt(distanceTravelled) / parseInt(gallonInput);
  mpg = mpgvalue.toFixed(2) + " mpg";
    // console.log("ran");
  return mpg;

}

function calDistancePerDollar(gasInputValue,gallonInput,distanceTravelled){
  distancePerDollarValue = (parseInt(distanceTravelled) / parseInt(gallonInput))/parseFloat(gasInputValue);
  distancePerDollar = distancePerDollarValue.toFixed(2) + " miles";
     console.log(distancePerDollar,"distanceperdollar");
  return distancePerDollar;

}

function calCostToGetThere(distance,pricePerMileValue){
  //costValue = parseInt(distance) * parseInt(pricePerMileValue);
  costValue = distance.toFixed(2) * pricePerMileValue.toFixed(2);
  console.log(distance,"distance", pricePerMileValue, "price per mile value");
  console.log(costValue);
  //cost =  costValue;
    console.log(costValue+ "for cost");
  return costValue;
}

function calCostPerMile(gasInputValue,gallonInput,distanceTravelled){
  pricePerMileValue = parseInt(gasInputValue)/ (parseInt(distanceTravelled) / parseInt(gallonInput));
  console.log(pricePerMileValue, "price per mile");
  costPerMile = "$" + pricePerMileValue.toFixed(2);
    console.log("ran",costPerMile,pricePerMileValue);
  return costPerMile;
}
