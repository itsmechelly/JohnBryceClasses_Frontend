function test() {

    const arr = [];
    for (let i = 0; i < 20; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    console.log(arr);

    const evens1 = [];
    for (let i = 0; i < 20; i++) {
        if (arr[i] % 2 === 0) {
            evens1.push(arr[i]);
        }
    }
    console.log(evens1);

    const evens2 = arr.filter(function (item) { item % 2 === 0; });
    console.log(evens2);

    const evens3 = arr.filter(item => item % 2 === 0);
    console.log(evens3);

    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const powers1 = [];
    for (let i = 0; i < arr.length; i++) {
        powers1.push(arr[i] ** 2);
    }
    console.log(powers1);

    const powers2 = arr.map(function (item) { return item ** 2; });
    console.log(powers2);

    const powers3 = arr.map(item => item ** 2);
    console.log(powers3);

}