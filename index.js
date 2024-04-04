//Parameter function
function showTime(){
return `${new Date().getHours()}:${new Date().getMinutes()}`
}
//Main function
function whatTime(showTime) {
    console.log(`Hello Time is ${showTime()}`);
}

const inital = (firstName,lastName) => {
    console.log(firstName.charAt(0) + lastName.charAt(0));
}

whatTime(showTime)
inital('Roger','Waters')