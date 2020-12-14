var date=document.getElementById("date").value;
var month=document.getElementById("month").value;
var year=document.getElementById("year").value
function birthDay(){

   var CC = parseInt(year.substring(2,4));
    var YY = parseInt(year.substring(2,4));
    var MM = parseInt(document.getElementById("month").value);
    var DD = parseInt(document.getElementById("date").value);
    dayValue = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
    return (Math.trunc(birthDay(dayValue)));
}
console.log(dayValue);
