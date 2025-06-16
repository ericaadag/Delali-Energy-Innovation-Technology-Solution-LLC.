// Expand/collapse job descriptions
document.querySelectorAll('.expand-btn').forEach(button => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true';
    const jobDesc = document.getElementById(button.getAttribute('aria-controls'));

    if (expanded) {
      button.setAttribute('aria-expanded', 'false');
      button.textContent = '+';
      jobDesc.hidden = true;
    } else {
      button.setAttribute('aria-expanded', 'true');
      button.textContent = '−';
      jobDesc.hidden = false;
    }
  });
});

// Expand/collapse FAQs
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const expanded = question.getAttribute('aria-expanded') === 'true';
    const answer = document.getElementById(question.getAttribute('aria-controls'));

    if (expanded) {
      question.setAttribute('aria-expanded', 'false');
      answer.hidden = true;
    } else {
      question.setAttribute('aria-expanded', 'true');
      answer.hidden = false;
    }
  });
});

// Form validation and submission simulation
const form = document.getElementById('applicationForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formMessage.textContent = '';
  
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  // Check file type
  const fileInput = form.cvUpload;
  if (fileInput.files.length === 0) {
    formMessage.textContent = 'Please upload your CV in PDF format.';
    formMessage.style.color = 'red';
    return;
  }

  const file = fileInput.files[0];
  if (file.type !== 'application/pdf') {
    formMessage.textContent = 'Only PDF files are accepted.';
    formMessage.style.color = 'red';
    return;
  }

  // Simulate form submission delay
  formMessage.style.color = 'goldenrod';
  formMessage.textContent = 'Submitting your application...';

  setTimeout(() => {
    formMessage.textContent = 'Thank you for applying! We will review your submission and get back to you soon.';
    form.reset();
  }, 1500);
});
