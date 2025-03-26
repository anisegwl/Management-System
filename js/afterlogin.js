
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Animate bars in chart
    animateChartBars();
    
    // Set up tab functionality
    setupTabs();
  });
  
  // Function to animate bars in the chart
  function animateChartBars() {
    // Get all bars
    const bars = document.querySelectorAll('.bar');
    
    // Set initial height to 0
    bars.forEach(bar => {
      bar.style.height = '0';
    });
    
    // Animate bars to their target height after a small delay
    setTimeout(() => {
      bars.forEach(bar => {
        const targetHeight = bar.getAttribute('data-height') + '%';
        bar.style.height = targetHeight;
      });
    }, 300);
  }
  
  // Function to handle tab switching
  function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const transactionRows = document.querySelectorAll('.transaction-row');
    
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        const tabType = button.getAttribute('data-tab');
        
        // Show/hide transaction rows based on selected tab
        transactionRows.forEach(row => {
          if (tabType === 'all' || row.getAttribute('data-type') === tabType) {
            row.style.display = 'table-row';
          } else {
            row.style.display = 'none';
          }
        });
      });
    });
  }
  
  // Add hover effects for sidebar links
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  sidebarLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      if (!link.classList.contains('active')) {
        link.style.backgroundColor = 'var(--gray-100)';
      }
    });
    
    link.addEventListener('mouseleave', () => {
      if (!link.classList.contains('active')) {
        link.style.backgroundColor = '';
      }
    });
  });
  
  // Add search functionality
  const searchInput = document.querySelector('.search-box input');
  searchInput.addEventListener('focus', () => {
    searchInput.parentElement.style.boxShadow = '0 0 0 2px var(--primary-light)';
  });
  
  searchInput.addEventListener('blur', () => {
    searchInput.parentElement.style.boxShadow = '';
  });
  
  // Add notification badge pulse effect
  const notificationBadge = document.querySelector('.notification-indicator');
  setInterval(() => {
    notificationBadge.style.transform = 'scale(1.2)';
    notificationBadge.style.opacity = '0.7';
    
    setTimeout(() => {
      notificationBadge.style.transform = 'scale(1)';
      notificationBadge.style.opacity = '1';
    }, 300);
  }, 3000);
  
  // Add click handler for the credit cards
  const creditCards = document.querySelectorAll('.credit-card');
  creditCards.forEach(card => {
    card.addEventListener('click', () => {
      card.style.transform = 'translateY(-10px)';
      
      setTimeout(() => {
        card.style.transform = 'translateY(-5px)';
      }, 300);
    });
  });
  
  // Add responsive sidebar toggle for mobile
  window.addEventListener('resize', checkWindowSize);
  
  function checkWindowSize() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    if (window.innerWidth <= 768) {
      sidebar.classList.add('collapsed');
      mainContent.style.marginLeft = '70px';
      mainContent.style.maxWidth = 'calc(100vw - 70px)';
    } else {
      sidebar.classList.remove('collapsed');
      mainContent.style.marginLeft = '260px';
      mainContent.style.maxWidth = 'calc(100vw - 260px)';
    }
  }
  
  // Call initially to set correct state
  checkWindowSize();
  