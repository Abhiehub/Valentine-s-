// Elements
const envelope = document.getElementById('envelope');
const valentineContent = document.getElementById('valentineContent');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const heart = document.getElementById('heart');

// Open Envelope
envelope.addEventListener('click', () => {
  // Hide the envelope and show the content
  envelope.style.display = 'none';
  valentineContent.style.display = 'block';
});

// No Button Behavior (shifting away on every click)
noBtn.addEventListener('click', () => {
  // Get random positions for X and Y
  const randomX = Math.floor(Math.random() * (window.innerWidth - 100)); // Random X position
  const randomY = Math.floor(Math.random() * (window.innerHeight - 100)); // Random Y position

  // Move the button to the random position
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
  noBtn.style.transition = 'left 0.5s ease, top 0.5s ease';  // Smooth transition
});

// Yes Button Behavior (hide all content and show only the heart)
yesBtn.addEventListener('click', () => {
  // Hide all content and buttons (including the "Yes" and "No" buttons)
  valentineContent.style.display = 'none';  // Hide all content
  heart.style.display = 'block';  // Show the final heart message

  // Optionally, disable the Yes button to prevent further clicks (optional)
  yesBtn.disabled = true;
});
