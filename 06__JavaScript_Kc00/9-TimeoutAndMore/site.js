function printTime(){
    var date = new Date();
    console.log(date.getMinutes+":"+date.getSeconds());
}


function every3Sec(){
    setInterval(
        ()=>{
            console.log(date.getMinutes+":"+date.getSeconds());
        },3000);
}
every3Sec();