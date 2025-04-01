function switchTab(event, tabId) {
    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    // Add active class to clicked tab
    event.target.classList.add('active');
  
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    // Show selected content
    document.getElementById(tabId).classList.add('active');
  }
  