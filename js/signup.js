document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const signupForm = document.getElementById('signup-form');
    const signupButton = document.getElementById('signup-button');
    const buttonText = signupButton.querySelector('.button-text');
    const spinner = signupButton.querySelector('.spinner');
    const togglePasswordBtn = document.getElementById('toggle-password');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const nextButtons = document.querySelectorAll('.next-button');
    const backButtons = document.querySelectorAll('.back-button');
    const steps = document.querySelectorAll('.step');
    const stepContents = document.querySelectorAll('.step-content');
    
    // Password requirements elements
    const passwordRequirements = {
      length: document.querySelector('[data-requirement="length"]'),
      uppercase: document.querySelector('[data-requirement="uppercase"]'),
      number: document.querySelector('[data-requirement="number"]')
    };
    
    // Toggle password visibility
    togglePasswordBtn.addEventListener('click', () => {
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        confirmPasswordInput.type = 'text';
        togglePasswordBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
            <path d="m3 3 18 18" />
          </svg>
        `;
      } else {
        passwordInput.type = 'password';
        confirmPasswordInput.type = 'password';
        togglePasswordBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        `;
      }
    });
    
    // Check password requirements
    passwordInput.addEventListener('input', () => {
      const password = passwordInput.value;
      
      // Check length requirement
      if (password.length >= 8) {
        passwordRequirements.length.classList.add('met');
      } else {
        passwordRequirements.length.classList.remove('met');
      }
      
      // Check uppercase requirement
      if (/[A-Z]/.test(password)) {
        passwordRequirements.uppercase.classList.add('met');
      } else {
        passwordRequirements.uppercase.classList.remove('met');
      }
      
      // Check number requirement
      if (/[0-9]/.test(password)) {
        passwordRequirements.number.classList.add('met');
      } else {
        passwordRequirements.number.classList.remove('met');
      }
    });
    
    // Step navigation
    function goToStep(stepNumber) {
      // Hide all steps
      stepContents.forEach(content => {
        content.classList.remove('active');
      });
      
      // Deactivate all step indicators
      steps.forEach(step => {
        step.classList.remove('active');
      });
      
      // Show the target step
      const targetContent = document.querySelector(`.step-content[data-step="${stepNumber}"]`);
      const targetStep = document.querySelector(`.step[data-step="${stepNumber}"]`);
      
      if (targetContent && targetStep) {
        targetContent.classList.add('active');
        targetStep.classList.add('active');
        
        // Mark all previous steps as active
        steps.forEach(step => {
          const stepNum = parseInt(step.getAttribute('data-step'));
          if (stepNum < stepNumber) {
            step.classList.add('active');
          }
        });
      }
    }
    
    // Next buttons
    nextButtons.forEach(button => {
      button.addEventListener('click', () => {
        const currentStep = parseInt(button.getAttribute('data-step'));
        const nextStep = currentStep + 1;
        
        // Simple validation for each step
        if (currentStep === 1) {
          const fullName = document.getElementById('full-name').value;
          const companyName = document.getElementById('company-name').value;
          const phone = document.getElementById('phone').value;
          
          if (!fullName || !companyName || !phone) {
            alert('Please fill in all fields in this step');
            return;
          }
        } else if (currentStep === 2) {
          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;
          const confirmPassword = document.getElementById('confirm-password').value;
          
          if (!email || !password || !confirmPassword) {
            alert('Please fill in all fields in this step');
            return;
          }
          
          // Check if password meets requirements
          if (password.length < 8 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
            alert('Please make sure your password meets all requirements');
            return;
          }
          
          // Check if passwords match
          if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
          }
        }
        
        goToStep(nextStep);
      });
    });
    
    // Back buttons
    backButtons.forEach(button => {
      button.addEventListener('click', () => {
        const currentStep = parseInt(button.getAttribute('data-step'));
        const prevStep = currentStep - 1;
        goToStep(prevStep);
      });
    });
    
    // Form submission
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Show loading state
      signupButton.classList.add('loading');
      buttonText.textContent = 'Creating account...';
      spinner.classList.remove('hidden');
      signupButton.disabled = true;
      
      // Simulate API call with setTimeout
      setTimeout(() => {
        // Reset form state after "signup"
        signupButton.classList.remove('loading');
        buttonText.textContent = 'Create Account';
        spinner.classList.add('hidden');
        signupButton.disabled = false;
        
        // Show success message
        alert('Account created successfully! Redirecting to login...');
        
        // Redirect to login page after a brief delay
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 1000);
      }, 2000);
    });
    function togglePasswordVisibility(id) {
        var field = document.getElementById(id);
        field.type = field.type === 'password' ? 'text' : 'password';
      }
      
      document.getElementById('toggle-password').addEventListener('click', function() {
        togglePasswordVisibility('password');
      });
      
      document.getElementById('toggle-confirm-password').addEventListener('click', function() {
        togglePasswordVisibility('confirm-password');
      });
    
    // Add subtle animations 
    const animateElements = () => {
      const elements = document.querySelectorAll('.form-group, .signup-prompt');
      elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.animation = `fadeIn 0.5s ease-out forwards`;
        el.style.animationDelay = `${0.1 + index * 0.1}s`;
      });
    };
    
    document.getElementById('toggle-password').addEventListener('click', function() {
        var passwordField = document.getElementById('password');
        if (passwordField.type === 'password') {
          passwordField.type = 'text';
        } else {
          passwordField.type = 'password';
        }
      });
    // Call animation function after a slight delay
    setTimeout(animateElements, 100);
  });
  