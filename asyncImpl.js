async function getData(uId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetched the data!");
            resolve("lognath@gmail.com");
        }, 4000);
    })
}

console.log("start");
var email = getData("skc").then((email) => {
    console.log("Email id of the user id is: " + email);
    console.log("end");
});
