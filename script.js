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
  // Get random positions for X and Y within the window size
  const randomX = Math.floor(Math.random() * (window.innerWidth - 100)); // Random X position
  const randomY = Math.floor(Math.random() * (window.innerHeight - 100)); // Random Y position

  // Move the button to the random position
  noBtn.style.position = 'absolute'; // Ensure it's positioned absolutely
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
  noBtn.style.transition = 'left 0.5s ease, top 0.5s ease';  // Smooth transition
});

// Yes Button Behavior (hide all content and show only the heart)
yesBtn.addEventListener('click', () => {
  // Hide the Valentine content (question and buttons)
  valentineContent.style.display = 'none';  // Hide the question and buttons

  // Show the heart message smoothly
  heart.style.display = 'block';  // Show the heart message
  heart.style.opacity = '0'; // Initially set opacity to 0 for smooth fade-in
  setTimeout(() => {
    heart.style.transition = 'opacity 1s ease';  // Add fade-in effect
    heart.style.opacity = '1'; // Change opacity to 1 after the content is hidden
  }, 100);  // Delay to ensure hiding of the initial content before fading in
});
