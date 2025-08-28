
const heartCounter = document.getElementById("heart-counter");
const copyCounter = document.getElementById("copy-counter");
const coinCounter = document.getElementById("coin-counter");

// Call history
const historyContainer = document.getElementById("history-container");
const clearHistoryBtn = document.getElementById("clear-history");

// Global state
let hearts = 0;
let copies = 0;
let coins = 100; 

// Utility: format time
function getFormattedTime() {
  const now = new Date();
  return now.toLocaleString(); // e.g. 8/28/2025, 4:55:22 AM
}

// --------------------
// Event Listeners
// --------------------

// Heart button
document.querySelectorAll(".btn-heart").forEach((btn) => {
  btn.addEventListener("click", () => {
    hearts++;
    heartCounter.textContent = hearts;
  });
});

// Copy button
document.querySelectorAll(".btn-copy").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".card"); // find parent card
    const number = card.querySelector("h4").textContent.trim();

    // Copy to clipboard
    navigator.clipboard.writeText(number).then(() => {
      copies++;
      copyCounter.textContent = copies;
      alert(`Copied number: ${number}`);
    });
  });
});

// Call button
document.querySelectorAll(".btn-call").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    const name = card.querySelector("h2").textContent.trim();
    const number = card.querySelector("h4").textContent.trim();

    if (coins < 20) {
      alert("You don't have enough coins to make a call.");
      return;
    }

    const confirmCall = confirm("You will be charged 20 coins for the call.");
    if (confirmCall) {
      coins -= 20;
      coinCounter.textContent = coins;

      // Add to history
      const historyDiv = document.createElement("div");
      historyDiv.className = "history p-2 bg-slate-300 my-4 rounded flex items-center";

      const textDiv = document.createElement("div");
      textDiv.className = "text w-2/3";
      textDiv.innerHTML = `<h2>${name}</h2><h4 class="font-bold">${number}</h4>`;

      const timeP = document.createElement("p");
      timeP.className = "text-sm";
      timeP.textContent = getFormattedTime();

      historyDiv.appendChild(textDiv);
      historyDiv.appendChild(timeP);

      historyContainer.prepend(historyDiv);
    }
  });
});

// Clear history
clearHistoryBtn.addEventListener("click", () => {
  historyContainer.innerHTML = "";
});
