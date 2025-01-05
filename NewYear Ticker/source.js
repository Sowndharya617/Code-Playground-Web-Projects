const newYears ='1 Jan 2026';

function countdown(){
    const now = new Date();
    const target = new Date(newYears);
    const totalSeconds = (target - now)/1000;
    if (totalSeconds <= 0) {
        document.getElementById('dayz').innerHTML = "0";
        document.getElementById('hourz').innerHTML = "0";
        document.getElementById('minz').innerHTML = "0";
        document.getElementById('secondz').innerHTML = "0";
        document.getElementById('countdown-container').innerHTML = "<h2>Happy New Year!</h2>"; // Display message
    } else {
        document.getElementById('dayz').innerHTML = Math.floor(totalSeconds / 3600 / 24);
        document.getElementById('hourz').innerHTML = Math.floor((totalSeconds / 3600) % 24);
        document.getElementById('minz').innerHTML = Math.floor((totalSeconds / 60) % 60);
        document.getElementById('secondz').innerHTML = Math.floor(totalSeconds % 60);
    }

}

countdown();
setInterval(countdown,1000);