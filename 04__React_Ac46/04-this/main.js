
// Get the button object: 
const myButton1 = document.getElementById("myButton1");

// Add click event to the button:
myButton1.addEventListener("click", function () {
    this.style.backgroundColor = "Green";
});

// --------------------------------------------------------------------------------------------------------------

// this & that: 
const myButton2 = document.getElementById("myButton2");

myButton2.addEventListener("click", function () {
    const that = this; // me, _this, thiz, self, that
    setTimeout(function () {
        that.style.backgroundColor = "Green";
    }, 3000);
});

// --------------------------------------------------------------------------------------------------------------

// bind:
const myButton3 = document.getElementById("myButton3");

myButton3.addEventListener("click", function () {
    setTimeout(function () {
        this.style.backgroundColor = "Green";
    }.bind(this), 3000);
});

// --------------------------------------------------------------------------------------------------------------

// arrow function - this is the best practice!!!
const myButton4 = document.getElementById("myButton4");

myButton4.addEventListener("click", function () {
    setTimeout(() => {
        this.style.backgroundColor = "Green";
    }, 3000);
});
