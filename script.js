document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signup-form');
  const successMessage = document.getElementById('success-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Show success message
    successMessage.classList.remove('hidden');
    successMessage.classList.add('visible');

    // Hide message after 5 seconds
    setTimeout(() => {
      successMessage.classList.remove('visible');
      successMessage.classList.add('hidden');
    }, 5000);

    // Reset form
    form.reset();
  });
});