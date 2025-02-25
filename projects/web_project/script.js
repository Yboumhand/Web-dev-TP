let timer;
let timeLeft = 25 * 60;
let isRunning = false;
let sessionCount = 0;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimerDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;
                sessionCount++;
                notifyUser("Session terminée !");
                setTimeout(nextSession, 1000);
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    sessionCount = 0;
    timeLeft = 25 * 60;
    updateTimerDisplay();
}

function nextSession() {
    if (sessionCount % 4 === 0) {
        timeLeft = 15 * 60;
        notifyUser("Pause longue de 15 minutes !");
    } else {
        timeLeft = (sessionCount % 2 === 0) ? 25 * 60 : 5 * 60;
        notifyUser((sessionCount % 2 === 0) ? "Nouvelle session de travail !" : "Pause courte de 5 minutes !");
    }
    updateTimerDisplay();
    startTimer();
}

function notifyUser(message) {
    alert(message);
}

// Event Listeners
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

// Task Management
document.getElementById("addTask").addEventListener("click", function() {
    let taskText = document.getElementById("taskInput").value;
    if (taskText.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = taskText;
        
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.onclick = function() {
            li.remove();
        };

        li.appendChild(deleteBtn);
        document.getElementById("taskList").appendChild(li);
        document.getElementById("taskInput").value = "";
    }
});

// Initial display update
updateTimerDisplay();
