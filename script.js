const timerEl = document.getElementById("timer");
const minutesInput = document.getElementById("minutes");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

let totalSeconds = 0;
let intervalId = null;


function startTimer() {
  const minutes = Number(minutesInput.value);

  if (!Number.isFinite(minutes) || minutes <= 0) {
    alert("Please enter a valid number of minutes.");
    return;
  }

  totalSeconds = minutes * 60;

  // Clear previous interval if any
  if (intervalId) clearInterval(intervalId);

  intervalId = setInterval(updatetimer, 1000); // call every second
}

function updatetimer(){
    const mins = Math.floor(totalSeconds/60);
    const sec = totalSeconds % 60;

timerEl.textContent = `${String(mins).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;    
    if (totalSeconds === 0) {
        clearInterval(intervalId);
        alert("⏰ Time's up!");
    return;
    }

    totalSeconds--;
}

function resetTimer() {
  clearInterval(intervalId);
  totalSeconds = 0;
  timerEl.textContent = "00:00";
  minutesInput.value = "";
}

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);

// startBtn.addEventListener("click", startTimer);
 minutesInput.addEventListener("keydown",
    function(event){
        if(event.key=== "Enter")startTimer();
    }
 )