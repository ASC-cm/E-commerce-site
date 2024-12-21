
console.log("JavaScript file is loaded");

document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".dropdown-content");
  
    navItems.forEach((dropdown) => {
      const subMenu = dropdown.querySelector(".dropdown-content-second");
      
      if (subMenu) {
        // Function to update submenu position
        const updateSubMenuPosition = () => {
          const rect = dropdown-content.getBoundingClientRect(); // Get the parent dropdown's position
          subMenu.style.top = `${rect.bottom}px`; // Position below the parent
          subMenu.style.left = `${rect.left}px`; // Align to the parent's left
        };
  
        // Initially update the position
        updateSubMenuPosition();
  
        // Update position on window resize or scroll
        window.addEventListener("resize", updateSubMenuPosition);
        window.addEventListener("scroll", updateSubMenuPosition);
      }
    });
  });


  function addToCart() {
    alert("Item added to cart!");

  }
  
  const images = {
    'new-in': [
      'images/jeans trouser/j7.jpeg',
      "images/jeans trouser/j8.jpeg",
      "images/jeans trouser/j9.jpeg",
      'images/jeans trouser/j10.jpeg',
    ],
    'african-design': [
      'images/African Native/na17.jpg',
      'images/African Native/na1.jpg',
      'images/African Native/na7.jpg',
      'images/African Native/na25.jpg',
    ],
    'corporate': [
      'images/juwelries/ju13.jpg',
      'images/juwelries/ju20.jpg',
      'images/juwelries/ju6.jpg',
      'images/juwelries/ju21.jpg',
    ],
    'casual': [
      'images/F.shoes/f.s4.jpg',
      'images/F.shoes/f.s5.jpg',
      'images/F.shoes/f.s11.jpg',
      'images/F.shoes/f.s14.jpg',
    ],
  };
  
  function showGrid(category) {
    const grid = document.getElementById('image-grid');
    grid.innerHTML = ''; // Clear existing images
  
    if (images[category]) {
      images[category].forEach((src) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = category;
        grid.appendChild(img);
      });
    }
  }

  // Toggle Password Visibility
function openE() {
  const passwordInput = document.getElementById('password');
  const eyeIcon = document.getElementById('openE');

  if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIcon.textContent = 'visibility';
  } else {
      passwordInput.type = 'password';
      eyeIcon.textContent = 'visibility_off';
  }
}

// Simulate Form Submission
function submitForm() {
  const container = document.getElementById('container');
  const thankYouContainer = document.getElementById('thank-you-container');
  container.style.display = 'none';
  thankYouContainer.style.display = 'block';
}


function goBack() {
  window.location.href = 'index.html'; 
}


document.getElementById('forgotPasswordForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent page reload
  const email = document.getElementById('email').value;

  if (email) {
      // Simulate sending a password reset link
      alert(`Password reset link has been sent to ${email}. Please check your email.`);
      
      // Redirect to the "link sent" confirmation page
      window.location.href = 'redirect.html';
  } else {
      alert('Please enter a valid email address.');
  }
});

function goBack() {
  window.history.back();
}

