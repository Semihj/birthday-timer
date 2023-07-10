let birthDayInput = document.getElementById("bd");


const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const seconds = document.getElementById("seconds");

const countDown = () => {
    const birthDay = birthDayInput.value;
    const birthDayDate = new Date(birthDay);
    const currentDate = new Date();

    const secondsCount = (birthDayDate - currentDate) / 1000;

    const dayscount = Math.floor(secondsCount / 3600 / 24);
    const hourscount = Math.floor(secondsCount / 3600) % 24;
    const minscount = Math.floor(secondsCount / 60) % 60;
    const leftseconds = Math.floor(secondsCount) % 60;

    console.log(dayscount);
    if(isNaN(dayscount) ) {
        days.innerText = "0"
    }
    if(isNaN(hourscount) ) {
        hours.innerText = "0"
    }
    if(isNaN(minscount) ) {
       mins.innerText = "0"
    }
    if(isNaN(leftseconds) ) {
       seconds.innerText = "0"
    } else {
        days.innerText = dayscount;
    hours.innerText = hourscount;
    mins.innerText = minscount;
    seconds.innerText = leftseconds;
    }

    
};

birthDayInput.addEventListener("input", () => {
    // Start the countdown when the button is clicked
    setInterval(countDown, 1000);
});
