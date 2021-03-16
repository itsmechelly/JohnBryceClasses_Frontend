function makeSureOnlyOneChar(email, symbol) {
    var arr = email.split(symbol)
    if (arr.len == 2) {
        console.log('OK');
    } else {
        console.log('No');
    }
}

makeSureOnlyOneChar("kobi@gmail.com", '@');
makeSureOnlyOneChar("kobi@g@ail.com", '@');
makeSureOnlyOneChar("kobi@g@ai@.com", '@');


function wordInsideWord(str, start, len) {
    console.log(str.substring(start, start + len));
}

wordInsideWord("Moshe", 2, 3);

function oppositeSentence(str) {
    var arr = str.split(" ");
    arr.reverse();
    var res = '';
    arr.forEach(element => {
        res += element + " ";
    });
    console.log(res);

}

oppositeSentence("sara shara shir sameach");
oppositeSentence("java 822.123 learn JS");


function checkIfBookExist(book) {
    var books = ["book 1", "book 2", "book 3", "book 4", "book 5"];
    if (books.includes(book)) {
        console.log('Found!');
    } else {
        console.log('Not Found');
    }
}

checkIfBookExist("book 3");
checkIfBookExist("book 6");

function biggest(a, b, c, d) {
    console.log(Math.max(a, b, c, d));
}

biggest(1, 2, 3, 4);
biggest(4, 3, 12, 2);


function printNewTime() {
    var date = new Date();
    console.log(date.getHours(), ":", date.getMinutes());
    //console.log(date);
    var timeToAdd = (60 * 8 - 20) * 60 * 1000;
    var res = new Date(date.getTime() + timeToAdd);
    console.log(res.getHours(), ":", res.getMinutes());

}

printNewTime();

function generateRandom(){
    return Math.floor(Math.random()*101);
}

function lottery(){

    var arr = [generateRandom(),generateRandom(),generateRandom(),generateRandom(),generateRandom(),generateRandom()];

    var res = "";
    arr.forEach(element => {
        res+= element+","
    });
    console.log(res);
}

lottery();
lottery();


function printNiceTime(){
    var date = new Date();
    console.log(date.getHours(),":",date.getMinutes(),":",date.getSeconds());
}

printNiceTime();
printNiceTime();
printNiceTime();