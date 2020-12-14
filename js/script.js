var date=document.getElementById("date").value;
var month=document.getElementById("month").value;
var year=document.getElementById("year").value
function birthDay(){

   var CC = parseInt(year.substring(0,2));
    var YY = parseInt(year.substring(2,4));
    var MM = parseInt(document.getElementById("month").value);
    var DD = parseInt(document.getElementById("date").value);
    dayValue = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
    return (Math.trunc(dayValue));
};
function akanName(){
    if(gender=="female"&&dayValue==[0]){
        return("You were born on sunday and Your akan name is Akosua");
    }
    else if(dayValue==[1] && gender==female){
        return("You were born on monday and Your akan name is Adwoa");
    }
    else if(dayValue==[2] && gender==female){
        return("You were born on Teusday and Your akan name is Abenaa");
    }
    else if(dayValue==[3] && gender==female){
        return("You were born on Wednesday and Your akan name is Akua");
    }
    else if(dayValue==[4] && gender==female){
        return("You were born on Thursday and Your akan name is Yaa");
    }
    else if(dayValue==[5] && gender==female){
        return("You were born on Friday and Your akan name is Afua");
    }
    else if(dayValue==[6] && gender==female){
        return("You were born on Saturday and Your akan name is Ama");
    }
    if(bdayValue==[0] && gender==male){
        return("You were born on sunday and Your akan name is kwasi");
    }
    else if(dayValue==[1] && gender==male){
        return("You were born on monday and Your akan name is kwadwo");
    }
    else if(dayValue==[2] && gender==male){
        return("You were born on Teusday and Your akan name is kwabena");
    }
    else if(dayValue==[3] && gender==male){
        return("You were born on Wednesday and Your akan name is kwaku");
    }
    else if(dayValue==[4] && gender==male){
        return("You were born on Thursday and Your akan name is yaw");
    }
    else if(dayValue==[5] && gender==male){
        return("You were born on Friday and Your akan name is kofi");
    }
    else if(dayValue==[6] && gender==male){
        return("You were born on Saturday and Your akan name is kwame");
    }else{
        return("Please enter valid values")
    }
};
