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

// No Button Behavior (shifting away)
noBtn.addEventListener('mouseover', () => {
  const randomX = Math.floor(Math.random() * 300) - 150; // Random X position
  const randomY = Math.floor(Math.random() * 300) - 150; // Random Y position
  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
  noBtn.style.transition = 'transform 0.5s ease';
});

// Yes Button Behavior
yesBtn.addEventListener('click', () => {
  heart.style.display = 'block';
  yesBtn.disabled = true;
  noBtn.disabled = true;  // Disable both buttons after clicking "Yes"
});
