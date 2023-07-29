function printtime(){
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    var day = d.getDay();
    var month = d.getMonth();
    var year = d.getYear();

    switch(day){
        case 0:
            day="Sunday";
            break;
        case 01:
            day="Monday";
            break;
        case 2:
            day="Tuesday";
            break;
        case 3:
            day="Wednesday";
            break;
        case 4:
            day="Thursday";
            break; 
        case 5:
            day="Friday";
            break; 
        case 6:
            day="Saturday";
            break;       
    }

    if(hours<10){
        hours = "0"+hours;
    }
    if(mins<10){
        mins = "0"+ mins;
    }
    if(secs<10){
        secs = "0" +secs;
    }
    
    month = month + 1;
    document.getElementById("test").innerHTML= hours+":"+mins+":"+secs;
    document.getElementById("ttt").innerHTML = day+"," + Date +"/" + month + "/" + year;
}
setInterval(printtime, 1000);