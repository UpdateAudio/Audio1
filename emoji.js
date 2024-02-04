let reactionCounts = JSON.parse(localStorage.getItem('reactionCounts')) || {};

// Function to handle reactions
function react(emoji) {
  reactionCounts[emoji] = (reactionCounts[emoji] || 0) + 1;
  updateReactionCounts();
  saveReactionCountsToLocalStorage();
  playClickSound();
}

// Function to update reaction counts on the page
function updateReactionCounts() {
  for (const emoji in reactionCounts) {
    const count = reactionCounts[emoji];
    const countElement = document.getElementById(`count-${emoji}`);
    if (countElement) {
      countElement.innerText = count;
    }
  }
}

// Function to save reaction counts to local storage
function saveReactionCountsToLocalStorage() {
  localStorage.setItem('reactionCounts', JSON.stringify(reactionCounts));
}

// Function to play a click sound
function playClickSound() {
  const clickSound = document.getElementById('clickSound');
  if (clickSound) {
    clickSound.currentTime = 0;
    clickSound.play();
  }
}

// Initial setup to load reaction counts
updateReactionCounts();

// ... (previous code)

// Function to simulate fake reactions
function simulateFakeReactions() {
  setInterval(() => {
    const emojis = ['🥺', '😯', '😂', '👍', '♥️', '🔥'];

    emojis.forEach((emoji) => {
      reactionCounts[emoji] = (reactionCounts[emoji] || 0) + getRandomInt(55, 999);
    });

    updateReactionCounts();
    saveReactionCountsToLocalStorage();
  }, 1000 * 60 * 60 * 24); // Simulate reactions every 24 hours
}

// Function to get a random integer in a given range
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initial setup to load reaction counts and start simulation
updateReactionCounts();
simulateFakeReactions();
