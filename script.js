// Elements
const envelope = document.getElementById('envelope');
const valentineContent = document.getElementById('valentineContent');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const heart = document.getElementById('heart');

// Open Envelope
envelope.addEventListener('click', () => {
  // Hide the envelope and show the content after a short delay
  envelope.style.display = 'none';
  setTimeout(() => {
    valentineContent.style.display = 'block'; // Show the question and buttons
  }, 500);  // 0.5 second delay for smooth transition
});

// No Button Behavior (shifting away on every click)
noBtn.addEventListener('click', () => {
  // Get random positions for X and Y within the window size
  const randomX = Math.floor(Math.random() * (window.innerWidth - 100)); // Random X position
  const randomY = Math.floor(Math.random() * (window.innerHeight - 100)); // Random Y position

  // Move the button to the random position
  noBtn.style.position = 'absolute'; // Ensure it's positioned absolutely
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
  noBtn.style.transition = 'left 0.5s ease, top 0.5s ease';  // Smooth transition
});

// Yes Button Behavior (Pop-up the heart text)
yesBtn.addEventListener('click', () => {
  // Show the heart message with pop-up animation
  heart.style.display = 'block';  // Make heart message visible
  heart.style.animation = 'popUp 0.6s ease-in';  // Trigger pop-up animation
});
