document.addEventListener("DOMContentLoaded", function(){
    function updateCountdown(){
    let now = new Date();
    let month = 5;
    let targetDay = 21;
    let targetTime = new Date(now.getFullYear(), now.getMonth(), targetDay, 0, 0, 0, 0);
    if(now >= targetTime) {
        targetTime = new Date(now.getFullYear(), now.getMonth()+1, targetDay, 0, 0, 0, 0);
        month = month+1;
    }
    let timeleft = targetTime-now;
    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((timeleft / (1000 * 60)) % 60);
    let seconds = Math.floor((timeleft / 1000) % 60);
    days = days.toString().padStart(2, "0");
    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");

    document.getElementById("timer").textContent = `${days}d, ${hours}h, ${minutes}m, ${seconds}s`;
    document.getElementById("updtext").textContent = `1 year, ${month} months`
    }
    setInterval(updateCountdown, 1000);
    updateCountdown();

});