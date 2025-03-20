document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const loginForm = document.getElementById('login-form');
    const loginButton = document.getElementById('login-button');
    const buttonText = loginButton.querySelector('.button-text');
    const spinner = loginButton.querySelector('.spinner');
    const togglePasswordBtn = document.getElementById('toggle-password');
    const passwordInput = document.getElementById('password');
    const emailInput = document.getElementById('email');
    
    // Toggle password visibility
    togglePasswordBtn.addEventListener('click', () => {
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
            <path d="m3 3 18 18" />
          </svg>
        `;
      } else {
        passwordInput.type = 'password';
        togglePasswordBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        `;
      }
    });
    
    // Form submission
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simple validation
      if (!emailInput.value || !passwordInput.value) {
        alert('Please fill in all fields');
        return;
      }
      
      // Show loading state
      loginButton.classList.add('loading');
      buttonText.textContent = 'Signing in...';
      spinner.classList.remove('hidden');
      loginButton.disabled = true;
      
      // Simulate API call with setTimeout
      setTimeout(() => {
        // Reset form state after "login"
        loginButton.classList.remove('loading');
        buttonText.textContent = 'Sign in';
        spinner.classList.add('hidden');
        loginButton.disabled = false;
        
        // Show success message
        alert('Welcome back!');
        
        // You could redirect the user here in a real application
        // window.location.href = '/dashboard';
      }, 2000);
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
    
    // Call animation function after a slight delay
    setTimeout(animateElements, 100);
  });
  