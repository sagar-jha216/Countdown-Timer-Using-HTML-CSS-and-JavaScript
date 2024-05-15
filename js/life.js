const endDate="16 May 2025 10:00 PM"
const inputs = document.querySelectorAll("input")
document.getElementById("end-date").innerText = endDate;
const clock=()=>{
    const end = new Date(endDate); //end date
    const now = new Date();  // current date
    const diff=(end-now)/1000; // diff is in mili seconds so we devide by 1000 to make it second
    //covert into days
    inputs[0].value = Math.floor(diff/3600/24);
    //hours
    inputs[1].value = Math.floor(diff/24/60)%24;
    //min
    inputs[2].value = Math.floor(diff/60)%60;
    //sec
    inputs[3].value = Math.floor(diff%60);
}
clock();

//We want to call clock function in the duration of 1 second
setInterval(
    ()=>{
        clock();
    },
    1000 //it is 1 sec means function will be called in each second
)